<a href="../../README.md#back">Back README.md...</a>

# **A. mode pada cisco**
- **User EXEC mode** : Mode standar saat login, yang hanya dapat memberikan hak akses terbatas.<br>
  ```router>```
- **Privileged EXEC Mode** : mode kedua setelah memasukan kata sandi, dan memberikan hak akses lebih tinggi.<br>
  ```router#```
- **Global Configuration Mode** : mode configurasi perangkat secara keseluruhan dapat mengatur parameter dasar.<br>
  ```router(config)#```
- **Interface Configuration Mode** : mode configurasi untuk mengatur parameter khusus interface tertentu.<br>
  ```router(config-if)#```

# **B. cara berpindah mode lewat cli**
- **CLI (command line interface)** merupakan lingkungan antarmuka baris perintah yang digunakan untuk berinteraksi dan mengkonfigurasikan perangkat jaringan terutama router dan switch.
- untuk masuk ke mode cli anda dapat mengklik router dan mengklik cli
```
>enable (untuk menuju Privileged EXEC Mode)

#configure terminal (untuk menuju Global Configuration Mode)

(c)#interface GigabitEthernet0/1
```

# **c. configuration**
## running-config
- merupakan configurasi berjalan yang saat ini sedang diterapkan pada perangkat.
  saat perangkat router dimatikan maka konfigurasi akan di restart / 
  hanya berfungsi selama perangkat aktif dan hilang saat dimatikan atau direstart

## startup-config
- merupakan configurasi awal yang disimpen di memory perangkat permanen (NVRAM) 
  dan akan dimuat saat perangkat dinyalakan atau di restart

# **D. menampilkan data config lewat cli**
- untuk menampilkan config lewat cli harus masuk ke privilage mode EXEC terlebih dahulu
```
#show running-config (menampilkan running config)
#show startup-config (menampilkan startup config)
```
- atau disingkat menjadi
```
#sh run atau #sh start
```

- untuk menyimpan configurasi/menghapus configurasi anda dapat melakukan
```
#write memory (mengcopy configurasi running ke configurasi startup)
#copy running-config startup-config (sama sama menyalin config)

#write erase (menghapus semua konfigurasi yang ada di konfig startup)
```

- contoh hasil dari config yang dikeluarkan
```
Router_B#show startup-config 
Using 1492 bytes
!
version 12.2
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
!
hostname Router_B
!
!
!
enable secret 5 $1$mERr$day4dRsvDbEV2fGaIdHyk1
!
!
!
!
!
!
no ip cef
no ipv6 cef
!
!

Router_B#
```

# **E. mengubah configuration**
- mengubah nama perangkat router<br>
```
(c)#hostname [nama_perangkat]
```

- membuat password pada user<br>
```
(c)#line console 0
(c)#password [password_console_0]
(c)#login
```

- membuat password pada Privileged EXEC Mode<br>
```
(c)#enable password [password] (password tanpa terekripsi)
(c)#enable secret [password] (password yang telah terenkripsi)

# output pada running-config akan ditampilkan seperti ini
enable secret 5 $1$mERr$day4dRsvDbEV2fGaIdHyk1
enable password aria123
```

- membuat MOTD(message of the day) pesan yang ditampilkan saat login<br>
```
(c)#banner motd &[text yang akan ditampilkan]&
(c)#banner motd !{enter} [dan ketikan text yang akan ditampilkan] !

# dapat menggunakan text apapun selama text itu tidak diikuti text yang dibuat(&,!,~,dll)
```