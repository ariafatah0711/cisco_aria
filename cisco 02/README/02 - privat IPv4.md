<a href="00 - README.md">Back README.md..</a>

# **A. Privat IPv4**
## jenis ip yang ada pada IPv4
- IPv4 terbagi menjadi 3 yaitu 10.10.10., 172.x.x.x., dan 192.168.x.x

| RFC 1918 name | IP address range | Number of addresses | Largest CIDR block (subnet mask) |Host ID size | Mask bits | Classful description |
|--- | --- | --- | --- | --- | --- | --- |
| 24-bit block | 10.0.0.0 – 10.255.255.255 | 16.777.216 | 10.0.0.0/8 (255.0.0.0) | 24 bits | 8 bits |single class A network |
20-bit block | 172.16.0.0 – 172.31.255.255 | 1.048.576 | 172.16.0.0/12 (255.240.0.0) | 20 bits | 12 bits | 16 contiguous class B networks |
16-bit block | 192.168.0.0 – 192.168.255.255 | 65.536 |	192.168.0.0/16 (255.255.0.0) | 16 bits | 16 bits | 256 contiguous class C networks |

# **B. Perbedaan Jenis pada setiap IPv4**
## 1. 10.0.0.0 - 10.255.255.255
- ini adalah ip pribadi kelas **A** yang memiliki total **16.777.216** alamat ip, menggunakan subnet mask **/8**, dan biasanya digunakan untuk mengkoneksikan ke internet
  - class **A** / subnet mask **/8**
  - memiliki total ip **16.777.216**
  - biasanya digunakan untuk mengkoneksikan ke internet (alamat ip router dengan network)

## 2. 172.16.0.0 - 172.31.255.255
- ini adalah ip pribadi kelas **B** yang memiliki total **1.048.576** alamat ip, menggunakan subnet mask **/12**, dan biasanya digunakan untuk mengkoneksikan ke internet
  - class **B** / subnet mask **/12**
  - memiliki total ip **1.048.576**
  - biasanya digunakan untuk menghubungkan router ke router / switch dengan switch

## 2. 192.168.0.0 – 192.168.255.255
- ini adalah ip pribadi kelas **C** yang memiliki total **65.536** alamat ip, menggunakan subnet mask **/16**, dan biasanya digunakan untuk mengkoneksikan ke internet
  - class **C** / subnet mask **/16**
  - memiliki total ip **65.536**
  - biasanya digunakan antar jaringan local (pc ke switch, pc ke pc, dan router ke switch)
  
# **C. Tipe Jaringan yang dipakai Bridge / Routing**
## 1. Bridge
- How Bridge Works : Let's look at a basic configuration example to illustrate how routing is used to forward packets between two local networks and to the Internet.
- In this setup, we have several networks:
  - three client networks (192.168.1.3/24, 192.168.1.4/24, and 192.168.1.5/24);
  - one network to connect routers (192.168.1.1), usually called backbone;
  - the last network (192.168.1.6 - 254) connects our gateway router (Router1) to the internet.

<img src="../../notes cisco/image/IPv4-Bridge.jpg" height="200" width="300">
[![IPv4 Routing](../../notes%20cisco/image/IPv4-Bridge.jpg)](../../notes%20cisco/image/IPv4-Bridge.jpg)

## 2. Routing
- How Routing Works : Let's look at a basic configuration example to illustrate how routing is used to forward packets between two local networks and to the Internet.
- In this setup, we have several networks:
  - two client networks (192.168.2.0/24 and 192.168.1.0/24);
  - one network to connect routers (172.16.1.0/30), usually called backbone;
  - the last network (10.1.1.0/24) connects our gateway router (Router1) to the internet. 

<img src="../../notes cisco/image/IPv4 - Routing.jpg" height="200" width="300">

[![IPv4 Routing](../../notes%20cisco/image/IPv4%20-%20Routing.jpg)](../../notes%20cisco/image/IPv4%20-%20Routing.jpg)