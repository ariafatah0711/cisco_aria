<a href="../../README.md#back">Back README.md...</a>

# Konfigurasi vlan with server

## 1. **Setting vlan di switch**
- mengelompokan beberapa antarmuka fastEthernet menggunakan range agar lebih evesien
```
(c)#interface range fastEthernet 0/1-10
(c)#int ra fa 0/1-10
(c-if)#
```

- konfigurasi switch 1
```
interface FastEthernet0/1 // server vlan 10
 switchport access vlan 10
!
interface FastEthernet0/2 // pc
 switchport access vlan 10
!
interface FastEthernet0/3
 switchport access vlan 10
!
interface FastEthernet0/4
 switchport access vlan 20
!
interface FastEthernet0/5
 switchport access vlan 20
!
interface FastEthernet0/6 // switch 2
 switchport mode trunk
!
```

- konfigurasi switch 2
```
interface FastEthernet0/1 // server vlan 20
 switchport access vlan 20
!
interface FastEthernet0/2 // pc
 switchport access vlan 10
!
interface FastEthernet0/3
 switchport access vlan 10
!
interface FastEthernet0/4
 switchport access vlan 20
!
interface FastEthernet0/5
 switchport access vlan 20
!
interface FastEthernet0/6 // switch 1
 switchport mode trunk
!
```

- jangan lupa di port fa 0/6 tiap switch aktifkan mode trunk agar switch dapat saling terhubung
- topologi
<img src="../../notes cisco/image/2_3.png">

## 2. **Setting DNS pada server**
- DNS merupakan Domain Name System
- yang fungsinya untuk menerjemahkan suatu alamat ip numerik menjadi domain
- contoh: "www.example.com" alih alih harus mengingat alamat ip numerik yang rumit seperti "192.168.1.1" atau "203.0.113.45"

1. langkah pertama menyeting ip server yang bertujuan untuk menjadi domain servernya
```
ip server: 192.168.1.100
```

2. lalu klik services dan pilih DNS lalu centang tanda DNS service
3. masukan nama domain dan ip addreasnya
```
name: www.facebook.com
address: 192.168.1.100 (ip server)
```

4. klik http pada server dan edit file html yang ingin tampil nanti
5. jika sudah masukan dns pada pc yang ingin terhubung
6. untuk menampilkan web hanya perlu pilih PC dan klik web browser dan ketik nama domainya ex: www.index.com