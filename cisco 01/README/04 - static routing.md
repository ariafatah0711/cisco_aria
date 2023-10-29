<a href="../../README.md#back">Back README.md...</a>

# **A. static router**
## Pengertian Static Router
- static router adalah konfigurasi router dimana rute jaringan ditentukan secara manual oleh administator jaringan.
- router tidak menggunakan protokol routing dinamis untuk memahami topologi jaringan tetapi administator 
  menentukan lalu lintas ke tujuan tertentu

- misalkan router 1 memiliki dua antarmuka dengan alamat ip, yaitu 192.168.1.0 dan 192.168.10.0 
  namun meskipun memiliki antarmuka ke 192.168.2.0, router ini tidak dapat terhubung secara langsung ke jaringan tersebut. untuk mengatasi 
  masalah ini dan memungkinkan router 1 dapat terhubung secara langsung ke jaringan 192.168.2.0 dapat digunakan static routing

# **B. menggunakan static router**
```
#show ip route (untuk melihat routing table)
#(c)ip route [network tujuan] [subnet mask] [antarmuka keluar atau melalui jaringan tsb]
```

- contoh sebelum menggunakan router static :
```
#show ip route
C    192.168.1.0/24 is directly connected, FastEthernet0/0
C    192.168.10.0/24 is directly connected, FastEthernet1/0
```
 
- contoh setelah menggunakan router static :
```
#(c)ip route 192.168.2.0 255.255.255.0 192.168.10.2

#show ip route
C    192.168.1.0/24 is directly connected, FastEthernet0/0
S    192.168.2.0/24 [1/0] via 192.168.10.2
C    192.168.10.0/24 is directly connected, FastEthernet1/0
```