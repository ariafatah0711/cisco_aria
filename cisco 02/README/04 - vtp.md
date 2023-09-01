<a href="00 - README.md">Back cisco..</a>

# Konfigurasi VTP

## 1. **Pengenalan VTP**
- Virtual LAN Trunking Protocol (VTP) adalah protokol yang digunakan untuk mengelola informasi VLAN di jaringan Cisco.
- yang berfungsi untuk mengkondigurasi pengaturan vlan di server yang nantinya akan mempengaruhi vlan di switch client

**MODE VTP**
1. **server VTP**
- digunakan untuk mengkonfigurasi VLAN dan menyebarkan Informasi VLAN ke switch lainya

2. **client VTP**
- digunakan untuk menerima informasi vlan dari server dan tidak diizinkan untuk mengubah konfigurasi VLAN

2. **transparant VTP**
- transparant VTP tidak menyebarkan informasi VLAN, namun dapat menerima informasi dari server dan menggunakanya dalam pengoprasian lokal
- server hanya meneruskan vlan saja. kita harus membuat vlan secara manual

## 2. **Konfigurasi VTP Server**
- konfigurasi membuat vlan terlebih dahulu
```
(c)#vlan 101
(c-v)#name blue
(c-v)#vlan 202
(c-v)#name red
```

- Pada switch yang akan dijadikan server VTP:
```
(c)#vtp mode server
(c)#vtp domain example.com
(c)#vtp password 123
```

- Pastikan port trunk pada switch ini sudah di Konfigurasi.

## 3. **Konfigurasi VTP pada Switch Client**
- Pada switch yang akan dijadikan client VTP, Anda hanya perlu mengatur mode VTP menjadi "client" dan mengonfigurasi domain serta password yang sesuai.

- Pada switch yang akan dijadikan client VTP:
```
(c)#vtp mode client
(c)#vtp domain example.com
(c)#vtp password 123
```

- setelah itu hanya perlu menyambungkan ke port yang ingin di hubungkan vlan

<img src="../../notes cisco/image/vtp.png">