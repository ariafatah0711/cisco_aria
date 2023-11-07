<a href="../../README.md#back">Back README.md...</a>

# ip dhcp

## 1. **ip dhcp**
- membagi alamat ip secara otomatis

## 2. **konfigurasi router**
- konfigurasi ip address
```
(c)# int gig 0/1
(c)# ip add 192.168.1.1
(c)# no shutdown
```

- konfigurasi ip dhcp
```
(c)# ip dhcp pool nama_dhcp
(c)# default-router 192.168.1.1 #default gateway yang akan diterima client
(c)# network 192.168.1.0 255.255.255.0 #net yang akan di dapatkan client (contoh kami menggunakan 192.168.1.0)
(c)# dns-server 8.8.8.8 #dns yang akan di diterima oleh client
```