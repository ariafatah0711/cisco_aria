<a href="../../README.md#back">Back README.md...</a>

# dynamic router
## pengenalan
- Dynamic Routing atau Routing Dinamis adalah teknik routing yang mampu membuat tabel routing secara otomatis dan real-time berdasarkan lalu lintas jaringan dan beberapa router yang saling terhubung. Routing Dinamis mengijinkan router untuk saling berbagi informasi network, dan mengijinkan router-router tersebut untuk memilih jalur terbaik ke tujuan/destination.
  - dynamic router adalah jenis router yang dapat memutuskan rute jaringan berdasarkan informasi yang diperoleh secara dinamis dari lingkup jaringan.
  - ini berarti router dapat mengubah jaluratau rute yang digunakan untuk mengirimkan data sesuai perubahan kondisi jaringan.

## jenis
- RIP -> Routing Information Protokol
- OSPF -> Open Shortest Path First
- IGRP -> Internal Gateway Routing Protokol
- EIGRP -> Enhanced Interior Gateway Routing Protocol
- BGP -> Border Gateway Protokol
- IS-IS -> Intermediate System to Intermediate System

## tabel static router dan dynamic router
- tabel route
  ```
  S: Static Route
  D: Dynamic
  A: Active
  C: Connect
  ```
- penjelasan
  ```
  DAS: Dynamic Active Static, suatu routing bersifat static yang dibuat secara dynamic atau otomatis
  DAC: Dynamic Active Connect, konfigurasi terhubung yang dibuat secara otomatis.
  AS: Active Static, konfigurasi routing yang kita definisikan sendiri.
  ```
- tabel
  - **S** = menambahkan alamat jaringan pada routing table secara manual
  - **D** = mendata alamat jaringan mana yang akan disertakan dalam proses pertukaran informasi antar router

# RIP
- Protokol RIP memberikan update routing table berdasarkan router yang terhubung langsung, kemudian router selanjutnya akan memberikan informasi mengenai router selanjutnya yang terhubung dengan router tersebut. Dan informasi yang ditukarkan oleh RIP ini adalah Host, Network, Subnet, rute default.
## konfigurasi
  - menambahkan rip
    ```
    (c)# router rip
    (c)# network <network>
    ```
  - menghapus rip
    ```
    no network <network>
    ```
## contoh
  - router 1 : fa 0/1 : 192.168.1.1
  - router 2 : fa 0/0 : 192.168.10.1
  - configuration
    ```
    (c)# router rip
    (c)# network 192.168.1.0
    (c)# network 192.168.10.0

    # show ip route
    C    192.168.1.0/24 is directly connected, FastEthernet0/0
    R    192.168.2.0/24 [120/1] via 192.168.10.2, 00:00:23, FastEthernet1/0
    C    192.168.10.0/24 is directly connected, FastEthernet1/0
    ```