# dhcp server
## pengenalan
- Dynamic Host Configuration Protocol. DHCP server adalah sebuah protokol jaringan yang bekerja secara otomatis dalam mengenali perangkat yang terhubung ke jaringan.
- protokol standar yang memungkinkan server untuk mendistribusikan IP Address secara dinamis kepada perangkat lainnya dalam sebuah jaringan.
- port yang digunakan adalah 67(server) dan 68(client)

## tahapan
- DHCP Discover
  -  Discover dilakukan oleh perangkat client akan mengirimkan pesan DHCP DISCOVER ke subnet jaringan  menggunakan alamat tujuan 255.255.255.255. Setelah ditemukan, client akan meminta alamat IP yang tersedia pada DHCP server.
- DHCP Offer
  - Setelah DHCP server menerima pesan DHCP DISCOVER dari client, server akan membuat penawaran kepada dengan mengirimkan pesan DHCP OFFER ke client.
  - pesan tersebut berisi id client, alamat IP yang ditawarkan, subnet mask, durasi penggunaan, dan alamat IP DHCP server.
- DHCP Request
  - client menyetujui penawaran yang diberikan dengan memberikan pesan DHCP REQUEST kepada server.
  - Isi pesannya adalah meminta agar server meminjamkan salah satu IP address yang tersedia di kumpulan alamat IP DHCP. 
- DHCP Acknowledge
  - server menerima pesan permintaan dari client, server akan mengirim pesan berupa paket DHC PACK kepada client.
  - Paket ini berisi alamat IP, durasi sewa, dan informasi konfigurasi jaringan lain yang mungkin dibutuhkan client. 
  - Jika alamat IP telah diberikan, berarti proses konfigurasi IP telah selesai. Setelah itu, server akan memberi tanda bahwa alamat IP tersebut telah dipakai oleh client di database yang mereka miliki. 

# configuration
## router
- membuat ip dhcp
  ```
  (c)# ip dhcp pool <nama_dhcp>
  (c)# default-router <default_gateway> #default gateway yang akan diterima client
  (c)# network <network_address> <subnet_mask> #network yang akan di dapatkan client
  (c)# dns-server <ip_dns_server> #dns yang akan di diterima oleh client
  ```

## contoh
- interface
  ```
  (c)# int gig 0/1
  (c)# ip add 192.168.1.1
  (c)# no shutdown
  ```
- membuat ip dhcp
  ```
  (c)# ip dhcp pool nama_dhcp
  (c)# default-router 192.168.1.1
  (c)# network 192.168.1.0 255.255.255.0
  (c)# dns-server 8.8.8.8
  ```
- PC
  - ubah ip PC menjadi automatis / dhcp
  - result
    - ip address        : 192.168.1.2
    - subnetmask        : 255.255.255.0
    - default gateway   : 192.168.1.1
    - dns server        : 8.8.8.8