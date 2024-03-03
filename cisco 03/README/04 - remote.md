<a href="../../README.md#back">Back README.md...</a>

# svi(seitch vlan interface)
## pengenalan
- Switch virtual interface (SVI), merupakan istilah khusus yang digunakan pada perangkat Cisco. Istilah ini mengacu pada sebuah virtual interface layer tiga pada sebuah switch. Istilah ini juga biasa dikenal dengan istilah VLAN. Secara default, SVI pada perangkat Cisco adalah VLAN 1. 

## fungsi
- Untuk Mengakses Perangkat Secara Remote
Dengan menambahkan ip address ke interface SVI dan menambahkan ip default gateway, maka kita dapat mengakses perangkat secara remote.

- Monitoring Perangkat
Dengan memberikan ip pada interface SVI kita dapat memonitor perangkat menggunakan software seperti MRTG atau software monitoring lainnya.

## svi
- config svi
  ```
  (c)# int vlan 1
  (c)# ip add 192.168.1.2 255.255.255.0
  (c)# no sh
  ```
- config vlan svi
  ```
  (c)# ip default-gateway 192.168.1.1 255.255.255.0
  ```

# remote
## pengenalan
- Remote dalam konteks jaringan mengacu pada kemampuan untuk mengakses dan mengelola perangkat jarak jauh, tanpa harus berada di lokasi fisik perangkat tersebut. Dengan akses remote, administrator dapat melakukan konfigurasi, pemantauan, dan pemecahan masalah melalui jaringan.

## jenis
- console
  - Remote console mengacu pada akses langsung ke konsol fisik (biasanya melalui kabel rollover) pada perangkat jaringan seperti router atau switch.
  - Koneksi console memungkinkan administrator untuk berinteraksi dengan perangkat melalui port konsol dan mengakses mode konfigurasi.
  - Ini adalah metode yang digunakan ketika perangkat mengalami masalah dan memerlukan pemecahan masalah secara langsung.
  - Tidak efisien untuk mengelola perangkat jarak jauh karena memerlukan akses fisik ke perangkat
- vty (Virtual Teletype)
  - VTY adalah antarmuka virtual yang memungkinkan akses remote ke perangkat melalui Telnet atau SSH.
  - Dengan VTY, administrator dapat mengelola perangkat dari jarak jauh tanpa harus berada di lokasi fisik perangkat.
  - Telnet menggunakan port TCP 23, sedangkan SSH adalah protokol yang lebih aman dan mengenkripsi komunikasi.
  - VTY memungkinkan banyak pengguna untuk mengakses perangkat secara bersamaan melalui jaringan.
  - Konfigurasi VTY melibatkan pengaturan password, username, dan transport input (Telnet atau SSH).

## console
- remote with console
  - konfigurasi line console and password
    ```
    (c)# hostname router_1
    (c)# enable secret 123
    (c)# line console 0
    (c)# password 123
    (c)# login
    ```
  - encrpytion pass
    ```
    (c)# service password-encryption
    ```
  - connect with console
    ```
    - connect pc and device(router, switch, etc) with console
        - pc: rs 232 
        - device: console
    - and go to desktop>terminal>ok
    ```

## ssh
- remote with ssh
  - konfigurasi key gen
    ```
    (c)# hostname switch_1
    (c)# enable secret 123
    (c)# ip domain-name cisco.com
    (c)# crypto key generate rsa
         How many bits in the modulus [512]: 1024
    (c)# username admin secret 123
    ```
  - konfigurasi line vty 
    ```
    (c)# line vty 0 4 or line vty 0 15
    (c)# transport input ssh
    (c)# login local
    ```
  - show ssh
    ```
    (c)# ip ssh version
    (c)# do sh ip ssh
    (c)# do sh ssh
    ```