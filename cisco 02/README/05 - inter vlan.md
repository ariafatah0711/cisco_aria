<a href="../../README.md#back">Back README.md...</a>

# inter vlan
## pengenalan
- Inter-VLAN (Inter-Virtual Local Area Network) adalah proses atau teknik yang digunakan untuk mengizinkan komunikasi antara VLAN yang berbeda di dalam jaringan. 
  - Ketika Anda memiliki beberapa VLAN dalam jaringan Anda, standarnya adalah bahwa perangkat dalam satu VLAN tidak dapat berkomunikasi secara langsung dengan perangkat dalam VLAN lain.
  - Inter-VLAN routing memungkinkan perangkat dalam VLAN yang berbeda untuk berkomunikasi satu sama lain melalui router atau Layer 3 switch.

## jenis
- router on a stick
  - Router on a Stick adalah konfigurasi di mana satu router menghubungkan beberapa VLAN dengan menggunakan satu interface fisik. Router ini kemudian memproses lalu lintas antar-VLAN dengan bantuan subinterface
- Multilayer Switch
  - Multilayer Switch (atau Layer 3 Switch) adalah switch yang memiliki kemampuan routing terintegrasi. Ini berarti switch ini dapat mengirimkan lalu lintas antar-VLAN tanpa perlu melibatkan router eksternal. Multilayer Switch mampu melakukan fungsi routing antar-VLAN di dalam perangkatnya sendiri.

# router on a strick
## configuration
```
(c)# int fa 0/0.<vlan>
(c)# encapsulation dot1Q <vlan>
(c)# ip add <ip_address> <subnet_mask>
```
## contoh
```
(c)# int fa 0/0.10
(c)# encapsulation dot1Q 10
(c)# ip add 192.168.10.1 255.255.255.0
```
- (c)# encapsulation dot1Q 10: Ini adalah perintah yang mengatur jenis encapsulation VLAN yang digunakan untuk antarmuka sub-interface ini. dot1Q adalah protokol yang digunakan untuk menandai frame Ethernet dengan informasi VLAN. Angka 10 mengacu pada nomor tag VLAN yang diberikan ke antarmuka sub-interface tersebut.
- (c)# ip add 192.168.10.1 255.255.255.0: Ini adalah perintah yang mengatur alamat IP pada antarmuka sub-interface tersebut. Alamat IP yang diberikan adalah 192.168.10.1, dan subnet masknya adalah 255.255.255.0. Ini adalah alamat IP yang akan digunakan sebagai gateway default untuk perangkat yang terhubung ke VLAN dengan tag 10.

## contoh topologi
- topologi
  - 2 pc kanan kiri lalu tengahnya switch dan atasnya router
- switch
  ```
  (c)# vlan 10
  (c)# name vlan10
  (c)# ....
  (c)# int fa 0/1
  (c)# sw acc vlan 10
  (c)# ...
  (c)# int fa 0/10
  (c)# sw mode trunk
  ```
- router
  ```
  (c)# int fa 0/0
  (c)# no sh

  (c)# int fa 0/0.10
  (c)# encapsulation dot1Q 10
  (c)# ip add 192.168.10.1 255.255.255.0

  (c)# int fa 0/0.20
  (c)# encapsulation dot1Q 20
  (c)# ip add 192.168.20.1 255.255.255.0
  ...

# multilayer switch
## pengenalan
- router on a stick menggunakan sub interface (#int fa 0/0.10), dan menggunakan 2 perangkat switch dan router
- multilayer switch merupakan gabungan router dan switch yang dapat digunakan sebagai layer 3 (#int vlan 10), dan hanya menggunakan satu perangkat

## configuration
- menambahkan vlan
- menghubungkan vlan di setiap port
- interface vlan ```(c)# int fa 0/0.10``` jika di konfigurasi sebelumnya
    ```
  (c)# int vlan <vlan>
  (c)# ip add <ip_address> <subnet_mask>
  ```
- mengaktifkan intervlan di multi layer switch
  ```(c)# ip routing```

## contoh
## configuration
- menambahkan vlan
- menghubungkan vlan di setiap port
- interface vlan
  ```
  (c)# int vlan 10
  (c)# ip add 10.10.10.1 255.255.255.0
  ```
- mengaktifkan intervlan di multi layer switch
  ```(c)# ip routing```