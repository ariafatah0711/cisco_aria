<a href="../../README.md#back">Back README.md...</a>

# inter vlan

## 1. **inter vlan**
- Inter-VLAN (Inter-Virtual Local Area Network) adalah proses atau teknik yang digunakan untuk mengizinkan komunikasi antara VLAN yang berbeda di dalam jaringan. 
-  Ketika Anda memiliki beberapa VLAN dalam jaringan Anda, standarnya adalah bahwa perangkat dalam satu VLAN tidak dapat berkomunikasi secara langsung dengan perangkat dalam VLAN lain.
- Inter-VLAN routing memungkinkan perangkat dalam VLAN yang berbeda untuk berkomunikasi satu sama lain melalui router atau Layer 3 switch.

## 2. **Konfigurasi Switch**
- topologi : 2 pc kanan kiri lalu tengahnya switch dan atasnya router
- konfigurasi membuat vlan
```
(c)# vlan 10
(c)# name vlan10
(c)# ....
```

- konfigurasi menghubungkan port
```
(c)# int fa 0/1
(c)# sw acc vlan 10
(c)# ...
```

- konfigurasi mode trunk router
```
$(c) int fa 0/10 // port ke router
$(c) sw mode trunk
```

## 3. **Konfigurasi Router**
- mengaktifkan port
```
(c)# int fa 0/0 // port ke switch
(c)# no sh
```

- konfigurasi encapsulation di setiap protocol
```
(c)# int fa 0/0.10
(c)# encapsulation dot1Q 10
(c)# ip add 192.168.10.1 255.255.255.0

(c)# int fa 0/0.20
(c)# encapsulation dot1Q 20
(c)# ip add 192.168.20.1 255.255.255.0
```

- (c)# encapsulation dot1Q 10: Ini adalah perintah yang mengatur jenis encapsulation VLAN yang digunakan untuk antarmuka sub-interface ini. dot1Q adalah protokol yang digunakan untuk menandai frame Ethernet dengan informasi VLAN. Angka 10 mengacu pada nomor tag VLAN yang diberikan ke antarmuka sub-interface tersebut.
- (c)# ip add 192.168.10.1 255.255.255.0: Ini adalah perintah yang mengatur alamat IP pada antarmuka sub-interface tersebut. Alamat IP yang diberikan adalah 192.168.10.1, dan subnet masknya adalah 255.255.255.0. Ini adalah alamat IP yang akan digunakan sebagai gateway default untuk perangkat yang terhubung ke VLAN dengan tag 10.

## 4. **Konfigurasi DHCP Router**
- konfigurasi dhcp pool di setiap vlan
```
(c)# ip dhcp pool vlan10
(c)# network 192.168.10.0 255.255.255.0
(c)# default-router 192.168.10.1

(c)# ip dhcp pool vlan10
(c)# network 192.168.10.0 255.255.255.0
(c)# default-router 192.168.10.1
```

- mengakrifkan ip dhcp pada pc
```
# ke pc lalu, ke desktop, ip configuration
# dan pilih dhcp, tunggu hingga selesai
``` 