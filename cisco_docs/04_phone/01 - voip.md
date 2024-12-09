# voip
## pengenalan
- Voice over Internet Protocol atau VoIP adalah teknologi komunikasi dengan metode transmisi suara atau audio serta konten lainnya seperti gambar dan video, menggunakan koneksi internet.

# configuration
## router
### dhcp pool
- interface
  ```
  ```
- setting ip dhcp pool
  ```
  (c)# ip dhcp pool <nama_dhcp>
  (c)# default-router 192.168.1.1
  (c)# network 192.168.1.0 255.255.255.0
  (c)# option 150 ip 192.168.1.1
  (c)# ex
  (c)# ip dhcp excluded-address 192.168.1.1
  ```
  - ip dhcp pool VOICE 
    - merupakan perintah untuk membuat DHCP server bernama voice
  - default-router
    - merupakan perintah untuk menset alamat gateway
  - network 192.168.1.0 255.255.255.0
    - merupakan perintah untuk menset network dan subnetmask DHCP
  - option 150 ip 192.168.1.1
    - merupakan perintah option untuk memberikan ip dari daftar TFTP server
  - ip dhcp excluded-address 192.168.1.1
    - merupakan perintah agar ip 192.168.1.1 tidak diberikan kepada client (pengecualian)

### telephony service
  ```
  (c)# telephony-service
  (c)# max-dn 3
  (c)# max-ephones 3
  (c)# ip source-address 192.168.1.1 port 2000
  (c)# auto assign 1 to 5
  ```
  - max-dn
    - merupakan perintah untuk menentukan jumlah maksimal dial number
  - max-ephones
    - merupakan perintah untuk menentukan jumlah maksimal IP phone yang aktif
  - ip source address 192.168.1.1 port 2000
    - merupakan perintah agar IP Phone membuat pengalamatan berdasarkan sumber local (Router)

## switch
### vlan mode voice
- mode access, dan voice vlan <vlan>
  ```
  (c)# int range fa0/2-3
  (c)# switchport mode access
  (c)# switchport voice vlan 1
  ```

## router
### dial number
- setting dial number
  ```
  (c)# ephone-dn 1
  (c)# number 0001
  (c)# ephone-dn 2
  (c)# number 0002
  ```

# voip in diference router
## router
- router ke router
  ```
  (c)# dial-peer voice 1 voip
  (c)# destination-pattern 2..
  (c)# session target ipv4:192.168.1.1
  ```
- destination-pattern 2..
  - akan menghubungkan ke semua dial numbere yang diawali 2..
  - contoh 201, 202, 250, 289, dll
- session target ipv4:192.168.1.1
  - menghubungkan dial-peer ke router yang menyrdiakan ip phone
    ```
    ex: r1 -> r2 -> r3
        ip          ip
        phone       phone
    ```
    maka r1 harus session target ipv4: ke alamat interface r3