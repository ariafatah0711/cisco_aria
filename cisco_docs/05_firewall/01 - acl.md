# access list
## pengenalan
- access list => merupakan sebuah mekanisme yang digunakan untuk melakuan filtering terhadap trafik yang ada pada jaringan.
    - Dengan menerapkan ACL, kita bisa mengijinkan atau menolak paket dari suatu host yang menuju ke tujuan tertentu (misalnya server). 
    - Bisa dikatakan access-list ini seperti halnya firewall.

## jenis jenis ACL
### ACL Standard
- Digunakan untuk melakukan filter trafik secara general. 
    - ACL ini akan memfilter semua jenis trafik dari suatu host atau suatu network. 
    - Kita tidak bisa menentukan protokol mana yang akan diijinkan atau ditolak.
- Contoh penerapannya adalah memblok sebuah host agar tidak bisa berkomunikasi dengan jaringan lain.
- ACL standard menggunakan penomoran 1-99, dan biasanya diletakkan pada interface yang paling dekat dengan destination packet.

### ACL Extended
- Digunakan untuk melakukan filter trafik secara lebih spesifik. Kita bisa menentukan trafik untuk protocol apa yang akan dijinkan atau ditolak. 
    - Selain itu kita juga bisa menentukan tujuan trafik tersebut.
- Contoh penerapan ACL extended adalah memblok koneksi ping (icmp) dari suatu host ke host lain yang terletak pada jaringan yang berbeda.
- ACL extended menggunakan penomoran 100-199, dan biasanya diletakkan pada interface yang paling dekat dengan source packet.

## number ACL & Named ACL
- Berdasarkan penulisannya, access list dapat definisikan dengan menggunakan sistem penomoran (menggunakan angka)
    - atau menggunakan sistem penamaan (menggunakan nama untuk mendefinisikan acl).
- Beberapa contoh konfigurasi acl yang ada di atas tadi merupakan contoh numbered ACL. Nomor 1-99 digunakan untuk ACL Standard sedangkan 100-199 digunakan untuk ACL Extended.

## Menentukan Penempatan ACL Pada Interface
- Sebelum bisa berfungsi dengan baik, access list harus dipasang atau diterapkan pada interface router terlebih dahulu.
    - Hal ini dikarenakan acl bekerja melakukan filtering trafik ketika trafik tersebut sampai di interface milik router.
    - Ada dua penempatan yang bisa dipilih yakni in (untuk trafik inbound) dan out (untuk trafik outbound).
- Inbound adalah paket yang masuk ke dalam interface router. 
- Sementara outbound adalah paket yang keluar dari interface router menuju keluar router.
- Jika menggunakan penempatan in, maka ACL akan memeriksa paket yang masuk ke dalam interface tersebut.
- Jika menggunakan penempatan out, maka ACL akan memeriksa paket yang keluar dari interface tersebut.

- Sebuah interface dapat menangani trafik inbound maupun otubound. Maka dari itu, untuk menentukan penempatan in atau out, kita perlu melihat arah dari trafik tersebut. Coba lihat topologi berikut :
![alt text](image.png)
- Router memiliki dua buah interface yang terhubung ke dua jaringan yang berbeda. Interface Gigabit0/0 mengarah ke jaringan server, sedangkan interface Gigabit0/1 mengarah ke jaringan client.
- Ketika terdapat trafik dari client menuju server, maka trafik tersebut akan melewati kedua interface pada router di atas. 
- Pertama-tama paket yang berasal dari client akan masuk ke dalam interface Gig0/1. Pada situasi ini terjadi trafik inbound pada interface tersebut. 
- Paket kemudian melewati router dan keluar melalui interface Gig0/0. Pada situasi ini, trafik yang terjadi pada interface gig0/0 adalah outbound.
- Setelah sampai ke server, si server akan membalas dengan mengirimkan paket ke client tadi. Maka paket tersebut akan masuk ke dalam router melalui interface Gig0/0. Pada situasi ini terjadi trafik inboud pada interface gig0/0.
- Selanjutnya paket keluar menuju client melalui interface Gig0/1. Trafik yang terjadi di interface gig0/1 adalah otubound.

## ACL on VTY
- Selain di tempatkan pada interface fisik, access list juga dapat diletakkan pada interface virtual router yakni pada vty.
- Penggunaan access list pada vty biasanya untuk melakukan blok terhadap koneksi remot yang masuk ke router, seperti koneksi telnet atau ssh.

# configuration
## ACL
```bash
# ACL Standar
access-list 1 permit host 192.168.10.5

# ACL Extends
access-list 101 permit icmp host 192.168.10.5 host 172.30.10.7

# number ACL
ip access-list [standard/extended] [nama_ACL] <enter>

# syntax
access-list <number> {permit | deny} <source> [log]! Modern syntax
ip access-list standard {<number> | <name>} [<sequence>] {permit | deny} <source> [log]

```

## contoh
```bash
# template
ip access-list standard ALLOW_HOST 
permit host 192.168.10.7

# access list standar
access-list 10 deny 192.168.1.0 0.0.0.255
access-list 10 permit any
int fa0/1
ip access-group 1 out

# access list extend
access-list 100 deny icmp 192.168.1.0 0.0.0.255 host 20.20.20.2 echo
access-list 100 permit ip any any
int fa0/1
ip access-group 100 out

# cant www can ftp
access-list 101 deny tcp 192.168.1.0 0.0.0.255 host 20.20.20.1 eq www # eq itu untuk po
access-list 101 permit tcp host 192.168.10.1 host 20.20.20.1 eq ftp
access-list 101 deny tcp host 192.168.10.2 host 20.20.20.1 eq ftp
access-list 101 permit tcp host 192.168.10.2 host 20.20.20.1 eq www
access-list 101 permit ip any any # selain ip disana bisa mengakses

int fa 0/0
ip access-group 101 in
```

## show
```golang
(c)# show access-lists
(c)# show access-lists [<number> | <name>]
(c)# show ip access-lists [<number> | <name>]
(c)# show ip access-lists interface <interface>
(c)# show ip access-lists dynamic
(c)# show ip interface [<interface>]
(c)# show time-range [<name>]
```