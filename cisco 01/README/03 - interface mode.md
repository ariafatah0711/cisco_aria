<a href="../../README.md#back">Back README.md...</a>

# pengenalan
## interface
- interface merupakan antarmuka jaringan atau perangkat yang memungkinkan mereka untuk saling berkomunikasi dan bekerja pada layer 1 dari model osi

## default gateway
- default gateway meneruskan subnet lokal ke perangkat di subnet lain . dengan kata lain, gateway default menghubungkan jaringan lokal ke internet atau jaringan lain
    - contoh : 192.168.1.11atau 192.168.1.254
    - selama default gateway tidak memilki ip address yang sama

# configuration
## interface
- menghubungkan perangkat dengan router dengan port / interface yang tersedia
    - PC 0 : fa 0/0
    - router : fa 0/1
- configuration
  - menambahkan ip address
    ```
    (c)# interface fastEthernet <port>
    (c)# ip address <ip_address> <subnet_mask>
    ```
  - mengelompokan ip address
    ```
    (c)# interface range fastEthernet <port>
    (c)# ip address <ip_address> <subnet_mask>
    ```
    
  - menonaktifkan interface
    ```
    (c)# no shutdown
    (c)# no sh
    ```
  - menonaktifkan interface
    ```
    (c)# sh
    (c)# sh
    ```

## mngatur ip address PC
- PC 0
  - ip address        : <ip_address>
  - subnetmask        : 255.255.255.0
  - default-gateway   : <ip_interface_router_tadi>

- contoh
  - PC 0
    ip address      : 192.168.1.1
    subnetmask      : 255.255.255.0
    default-gateway : 192.168.1.254
  - router
    fa 0/0          : 192.168.1.254

## menampilkan interface yang terhubung
- ```# show ip interface brief```

# kesipulan
## jaringan
  - dalam jaringan, perangkat hanya bisa berkomunikasi dengan perangkat yang berada di jaringan yang sama
  - perangkat hanya dapat mengirim lalu lintas langsung ke alamat ip yang berada dalam jaringan yang sama
  - contoh
    - kita memilki 3 perangkat(A, B, C.)
      - A = 192.168.1.1/24
      - B = 192.168.1.2/24
      - C = 192.168.2.1/24
    - perangkat A dapat berkomunikasi dengan perangkat B karena mereka berada dalam jaringan yang sama
    - perangkat A dan B tidak dapat berkomunikasi dengan perangkat C yang memilki ip 192.168.2.1 karena mereka perangkat tersebut berada dalam jaringan yang berbeda

## default gateway
  - default gateway adalah alamat ip router yang digunakan oleh perangkat untuk mengirim lalu lintas ke jaringan luar
  - setiap perangkat dalam jaringan harus di konfigurasikan dengan default gateway yang benar untuk berkomunikasi dengan jaringan di luar
  - contoh
    - misalkan kita memiliki sebuah komputer dengan alamat ip 192.168.1.10 yang terhubung ke router dengan antarmuka 192.168.1.254 router ini berfungsi sebagai default gateway untuk komputer
  - router memungkinkan perangkat dari satu jaringan untuk berkomunikaasi dengan perangkat di jaringan lain.
  - dengan memastikan bahwa perangkat terhubung ke router dengan benar dan mengatur default gateway dengan benar, komunikasi antara jaringan dapat berfungsi
  - contoh
    - kita memilki 2 jaringan yaitu 192.168.1.x dan 192.168.2.x.
      - router berfungsi sebagai perangkat yang menghubungkan keduanya.
      - dengan mengatur antarmuka router 1 ke 192.168.1.1 atau 192.168.1.254 dan 
      - antarmuka router 2 ke 192.168.2.1 atau 192.168.2.254,
      - router memungkinkan perangkat kedua jaringan untuk berkomunikasi satu sama lain