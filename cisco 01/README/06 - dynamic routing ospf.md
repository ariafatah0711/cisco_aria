<a href="../../README.md#back">Back README.md...</a>

# ospf

## 1. **ospf route**
- Open Shortest Path First (OSPF) adalah sebuah protokol routing otomatis (Dynamic Routing) yang mampu menjaga, mengatur dan mendistribusikan informasi routing antar network mengikuti setiap perubahan jaringan secara dinamis. Pada OSPF dikenal sebuah istilah Autonomus System (AS) yaitu sebuah gabungan dari beberapa jaringan yang sifatnya routing dan memiliki kesamaan metode serta policy pengaturan network, yang semuanya dapat dikendalikan oleh network administrator. Dan memang kebanyakan fitur ini diguakan untuk management dalam skala jaringan yang sangat besar. Oleh karena itu untuk mempermudah penambahan informasi routing dan meminimalisir kesalahan distribusi informasi routing, maka OSPF bisa menjadi sebuah solusi.
- OSPF termasuk di dalam kategori IGP (Interior Gateway Protocol) yang memiliki kemapuan Link-State dan Alogaritma Djikstra yang jauh lebih efisien dibandingkan protokol IGP yang lain. Dalam operasinya OSPF menggunakan protokol sendiri yaitu protokol 89.

## 2. **cara konfigurasi**
- konfig
```
(c)# router ospf 10
(c)# network <ip_address> <wild card> area 0
```

## 3. **konfigurasi**
- router A
```
fa 0/0 : 10.10.10.1 255.255.255.0
fa 0/1 : 20.20.20.1 255.255.255.0
fa 0/2 : 1.1.1.2 255.255.255.252
```
- router B
```
fa 0/0 : 1.1.1.2 255.255.255.252
```
wildcard /30    : /30 = 255.255.255.252
                : 255.255.255.255 - 255.255.255.252
                    : 0.0.0.3
wildcard /24    : /24 = 255.255.255.0
                : 255.255.255.255 - 255.255.255.0
                    : 0.0.0.255

- route ospf
```
(c)# router ospf 10
(c)# network 10.10.10.0 0.0.0.255 area 0
(c)# network 20.20.20.0 0.0.0.255 area 0
(c)# network 1.1.1.0 0.0.0.3 area 0
```

- konfigurasi ip dhcp
```
(c)# ip dhcp pool nama_dhcp
(c)# default-router 192.168.1.1 #default gateway yang akan diterima client
(c)# network 192.168.1.0 255.255.255.0 #net yang akan di dapatkan client (contoh kami menggunakan 192.168.1.0)
(c)# dns-server 8.8.8.8 #dns yang akan di diterima oleh client
```