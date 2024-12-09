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