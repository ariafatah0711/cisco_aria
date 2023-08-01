<a href="../00 - README.md">Back notes cisco..</a>

# **A. Perintah Dasar Switch & Router Cisco**
Ada beberapa perintah dasar cisco yang wajib diketahui.
```
Router>
Router>enable
Router#
Router#configure terminal
Router(config)#
```

Ada beberapa hak akses ketika masuk dalam Cisco IOS:
- User mode ditandai dengan tanda “>”
- Previlige mode ditandai dengan tanda “#”. Untuk masuk dari user mode ke
previlige mode ketikkan perintah enable.
- Global configuration mode digunakan untuk mengkonfigurasi perangkat.

Mengganti Hostname
```
Router(config)#hostname Semarang
Semarang(config)#
```

Meyimpan Konfigurasi
Konfigurasi agar ketika device direboot konfigurasi tidak hilang.
```
Router(config)#write
```
atau
```
Router(config)#copy run start
Router(config)#copy running-config startup-config
```

Mereset Perangkat Cisco
Untuk mengembalikan konfigurasi ke default.
```
Router(config)#write erase
```

Perintah show ip interface brief digunakan untuk melihat informasi interface.
```
Router#show ip interface brief 
Interface              IP-Address      OK? Method Status                Protocol 
FastEthernet0/0        192.168.1.254   YES manual up                    up 
FastEthernet1/0        192.168.2.254   YES manual up                    up 
Serial2/0              unassigned      YES unset  administratively down down 
Serial3/0              unassigned      YES unset  administratively down down 
FastEthernet4/0        unassigned      YES unset  administratively down down 
FastEthernet5/0        unassigned      YES unset  administratively down down
```

Perintah show running-config atau show startup-config digunakan untuk melihat konfigurasi yang sedang
berjalan atau di pakai.
```
Router_B#show running-config atau sh run
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

# **B. Konfigurasi Password pada Cisco**
Keamanan adalah hal yang penting dalam suatu jaringan. Pemberian authentikasi
berupa username dan password dalam device dilakukan agar tidak sembarang
orang dapat masuk ke device.
Mengeset Password Line Console maka ketika melakukan config melalui port
console akan diminta login.
```
Router>enable
Router#configure terminal
Router(config)#line console 0
Router(config-line)#password 123
Router(config-line)#login
```

Ketika masuk ke device akan muncul tampilan berikut.
```
User Access Verification
Password:
```

Konfigurasi VTY (Virtual Terminal) agar device
menggunakan username dan password yang spesifik.
dapat
ditelnet dengan
```
Router(config)#username admin
Router(config)#enable password coba1
Router(config)#enable secret coba2
Ketika di show run.
Router#sh run
Building configuration...
Current configuration : 598 bytes
!
version 12.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
!
hostname Router
!
enable secret 5 $1$mERr$9SLtlDbYs.aoemVq5cCcc.
enable password coba1
!
username admin
```

enable secret = password diencripsi.
enable password = password tidak dienciprsi dan dapat dilihat dengan show run.
Jika kita mengeset enable secret dan enable password, maka yang dipakai adalah
enable secret.