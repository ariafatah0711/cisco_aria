<a href="../../README.md#back">Back README.md...</a>

# vtp
## pengenalan
- Virtual LAN Trunking Protocol (VTP) adalah protokol yang digunakan untuk mengelola informasi VLAN di jaringan Cisco.
- yang berfungsi untuk mengkondigurasi pengaturan vlan di server yang nantinya akan mempengaruhi vlan di switch client

## mode vtp
- server VTP
  - digunakan untuk mengkonfigurasi VLAN dan menyebarkan Informasi VLAN ke switch lainya

- client VTP
    - digunakan untuk menerima informasi vlan dari server dan tidak diizinkan untuk mengubah konfigurasi VLAN

- transparent VTP
    - transparent VTP tidak menyebarkan informasi VLAN, namun dapat menerima informasi dari server dan menggunakanya dalam pengoprasian lokal
    - server hanya meneruskan vlan saja. kita harus membuat vlan secara manual

# configuration
## vtp
- switch server
  ```
  (c)# vtp mode server
  (c)# vtp domain <domain>
  (c)# vtp password <password>
  ```
- switch client
  ```
  (c)# vtp mode client
  (c)# vtp domain <domain>
  (c)# vtp password <password>
  ```
- switch transparent
  ```
  (c)# vtp mode transparent
  (c)# vtp domain <domain>
  (c)# vtp password <password>
  ```

## contoh
- switch server
  ```
  (c)# vlan 10
  (c)# name kelompok_A
  (c)# vlan 20
  (c)# name kelompok_B
  (c)# vtp mode server
  (c)# vtp domain example.com
  (c)# vtp password 123
  ```
- switch client
  ```
  (c)# vtp mode client
  (c)# vtp domain example.com
  (c)# vtp password 123
  (c)# show vlan
  VLAN Name                             Status    Ports
  ---- -------------------------------- --------- -------------------------------
  1    default                          active    Fa0/1, Fa1/1, Fa2/1, Fa3/1
                                                  Fa4/1, Fa5/1
  10   kelompok_A                       active
  20   kelompok_B                       active
  ```
- switch transparent
  ```
  (c)# vtp mode transparent
  (c)# vtp domain example.com
  (c)# vtp password 123
  (c)# show vlan
  VLAN Name                             Status    Ports
  ---- -------------------------------- --------- -------------------------------
  1    default                          active    Fa0/1, Fa1/1, Fa2/1, Fa3/1
                                                  Fa4/1, Fa5/1
  ```
- result
  <img src="../../notes cisco/image/2_2.png">