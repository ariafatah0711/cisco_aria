<a href="../../README.md#back">Back README.md...</a>

# cli(command line interface) cisco
## mode cisco
- **User EXEC mode**
  - ```router>```
  - Mode standar saat login, yang hanya dapat memberikan hak akses terbatas.
- **Privileged EXEC Mode**
  - ```router#```
  - mode kedua setelah memasukan kata sandi, dan memberikan hak akses lebih tinggi.
- **Global Configuration Mode**
  - ```router(config)#```
  - mode configurasi perangkat secara keseluruhan dapat mengatur parameter dasar.

## change mode cisco
- masukan di cli router atau switch cisco
  ```
  router>enable
  router#configure terminal
  router(config)#
  ```
  atau
  ```
  router>en
  router#conf t
  router(config)#
  ```

# Priveleged EXEC mode
- bisa di ketika di mode Priveleged EXEC dengan ```show```
- atau dengan ```do show``` pada global configuration mode

## running-config
- merupakan configurasi berjalan yang saat ini sedang diterapkan pada perangkat.
  - saat perangkat router dimatikan maka konfigurasi akan di restart atau hanya berfungsi selama perangkat aktif dan hilang saat dimatikan atau direstart
- show run config
  ```
  # show running-config
  # sh run
  # sh r 
  ```

## startup-config
- merupakan configurasi awal yang disimpen di memory perangkat permanen (NVRAM) dan akan dimuat saat perangkat dinyalakan atau di restart
- show startup conf
  ```
  # show startup-config
  # sh start
  # sh s
  ```

## save/remove file configuration
- write
  ```
  # write memory
  # copy running-config startup-config
  # cp run start
  ```
- remove
  ```
  # write erase
  ```

# global configuration mode
- mengubah hostname
  ```
  (c)# hostname <nama_perangkat>
  ```
- membuat password pada user
  ```
  (c)# line console 0
  (c)# password <password_console_0>
  (c)# login
  ```
- membuat password pada Privileged EXEC mode
  ```
  (c)# enable password <password>
  (c)# enable secret <password_terenkripsi>
  ```
- membuat MOTD(message of the day)
  - pesan yang ditampilkan saat login
  ```
  (c)# banner motd &<teks_yang_akan_ditampilkan>&
  (c)# banner motd ![enter]
  (c)# <teks yang akan ditampilkan>
  (c)# <teks yang akan ditampilkan>
  (c)# ![enter]
  ```
  - dapat menggunakan text apapun selama text itu tidak diikuti text yang dibuat(&,!,~,dll)


<hr>

# cisco academy
# IOS
- enable => mode user to mode privilage
- disable => mode privilege to mode user
- configure terminal => mode privilage to mode config
- exit => back 1 mode ex: config-if to config, mode config to mode privilage
- end => mode sub configuration to mode privilage
- Ctrl + Z\C => mode sub configuration to mode privilage
- line console 0 => to interface console
- line vty 0 15 => terminal virtual
- interface vlan 1

# shorcut ios
| key | description |
| --- | --- |
| Tab | menyelesaikan entri nama perintah |
| backsapace | menghapus karakter di sebelah kiri |
| Ctrl + D | menghapus satu karakter di kursor |
| Ctrl + K | menghpaus karakter dari kursor kiri ke kanan |
| Ctrl + U/X | menghapus karakter dari kursor kanan ke kiri |
| Ctrl + W | menghapus karakter di sebelah kiri kursor |
| Ctrl + A | memindahkan kursor ke awal baris |
| Ctrl + E | memindahkan kursor ke akhir baris |
| Ctrl + Z/C | mode apapun menjadi mode privilage |
| Ctrl + R | jika tiba tiba ada teks yang menggagu gitu |
| Ctrl + Shift + 6 | exit *Translating "test"...domain server (255.255.255.255)* |
| Esc + D | menghapus semua karakter hingga akhir kata |

# show
- show running-config => show running config
- show interfaces => show interface
- show ip interface => show layer 3 ip interface
- show arp => show arp mac address
- show ip route => show ip route
- show protocols => protokol
- show version => show versi

# konfigurasi switch dasar
- line console 0
  - password 123
  - login
- line vty 0 15
  - password 123
  - login
- service password-encryption
- benner motd #test#

# vlan ip switch svi(seitch vlan interface)
- int vlan 1
- ip add 192.168.1.1 255.255.255.0
- no sh

# konfigurasi router dasar
- hostname R1
- enable secret password
- line console 0
  - password 123
  - login
- line vty 0 4
  - password 123
  - login
  - transport input {ssh | telnet | none | all}
- service password-encryption
- benner motd #test#

# security
- sh ip ssh
- ip domain-name cisco.com
- crypto key generate rsa
  - 1024
- username admin secret ccna
- line vty 0 15
  - transport input ssh
  - login local
- ip ssh version 2
- sh ip ssh
- sh ssh

# default gateway
- ip default-gateway 192.168.10.1
- 