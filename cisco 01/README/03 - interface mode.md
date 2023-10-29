<a href="../../README.md#back">Back README.md...</a>

# **A. interface, default gateway**
## Pengertian Interface
- interface merupakan antarmuka jaringan atau perangkat yang memungkinkan mereka untuk saling berkomunikasi dan bekerja pada layer 1 dari model osi

## Pengertian Default Gateway
- default gateway meneruskan subnet lokal ke perangkat di subnet lain . dengan kata lain, gateway default menghubungkan jaringan lokal ke internet atau jaringan lain
- contoh : 192.168.1.11atau 192.168.1.254 <br> selama default gateway tidak memilki ip address yang sama

# **B. membuat interface lewat cli**
## membuat interface
- jangan lupa untuk menghubungkan perangkat atau kabel yang sesuai terlebih dahulu
```
(c)#interface fastEthernet 1/0 atau int fa0/0
(c-if)#ip address [alamat_ip] [subnet_mask]
(c-if)#no shutdown

- no shutdown(mengaktifkan antarmuka)
- shutdown(menonaktifkan)
```

<h3>Contoh :</h3>

```
(c)#interface fa0/0
(c-if)#ip address 192.168.1.254 255.255.255.0
(c-if)#no shutdown
```

- setelah anda membuat interface di router anda belum dapat mengkomunikasikan perangkat yang berbeda konektivitas jaringan/network address
- dan anda dapat melakukan komunikasi dengan routernya

```
# command prompt pc(ip 192.168.1.1)
ping 192.168.1.254

# cli (ip fa0/0 192.168.1.254)
ping 192.168.1.1
```

## menampilkan interface yang terhubung
- menampilkan port yang terhubung dan ip dari fasethernet menggunakan
```
- #show ip interface brief (menampilkan daftar antarmuka interface pada perangkat jaringan beserta informasi penting terkait konfigurasi IP)
```

<h3>Contoh :</h3>

```
#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol 
FastEthernet0/0        192.168.1.254   YES manual up                    up 
FastEthernet1/0        192.168.2.254   YES manual up                    up 
Serial2/0              unassigned      YES unset  administratively down down 
Serial3/0              unassigned      YES unset  administratively down down 
FastEthernet4/0        unassigned      YES unset  administratively down down 
```


# **C. konektivitas jaringan**
- dalam jaringan, peerangkat hanya bisa berkomunikasi dengan perangkat yang berada di jaringan yang sama
- perangkat hanya dapat mengirim lalu lintas langsung ke alamat ip yang berada dalam jaringan yang sama
<h3>Contoh :</h3>

```
kita memilki 3 perangkat(A, B, C.)
A = 192.168.1.1/24
B = 192.168.1.2/24
C = 192.168.2.1/24
```

- perangkat A dapat berkomunikasi dengan perangkat B karena mereka berada dalam jaringan yang sama
- perangkat A dan B tidak dapat berkomunikasi dengan perangkat C yang memilki ip 192.168.2.1 karena mereka perangkat tersebut berada dalam jaringan yang berbeda

# **D. peran router**
- router berfungsi sebagai perangkat yang menghubungkan jaringan dengan alamat ip yang berbeda
- router memilki beberapa antarmuka yang terhubung ke berbeagai jaringan dengan alamat ip yang berbeda

# **E. default gateway**
- default gateway adalah alamat ip router yang digunakan oleh perangkat untuk mengirim lalu lintas ke jaringan luar
- setiap perangkat dalam jaringan harus di konfigurasikan dengan default gateway yang benar untuk berkomunikasi dengan jaringan di luar
<h3>Contoh :</h3>

```
misalkan kita memiliki sebuah komputer dengan alamat ip 192.168.1.10
yang terhubung ke router dengan antarmuka 192.168.1.254
router ini berfungsi sebagai default gateway untuk komputer
```

# **F. menghubungkan jaringan**
- router memungkinkan perangkat dari satu jaringan untuk berkomunikaasi dengan perangkat di jaringan lain.
- dengan memastikan bahwa perangkat terhubung ke router dengan benar dan mengatur default gateway dengan benar, komunikasi antara jaringan dapat berfungsi
<h3>Contoh :</h3>

```
kita memilki 2 jaringan yaitu 192.168.1.x dan 192.168.2.x.
router berfungsi sebagai perangkat yang menghubungkan keduanya.
dengan mengatur antarmuka router 1 ke 192.168.1.1 atau 192.168.1.254 dan 
antarmuka router 2 ke 192.168.2.1 atau 192.168.2.254,
router memungkinkan perangkat kedua jaringan untuk berkomunikasi satu sama lain
```