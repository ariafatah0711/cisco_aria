**GRE over IPsec**

GRE (Generic Routing Encapsulation) adalah protokol tunneling yang memungkinkan encapsulasi berbagai protokol layer 3. Namun, GRE sendiri tidak menyediakan enkripsi. Untuk meningkatkan keamanan, GRE sering dikombinasikan dengan IPsec, yang menyediakan enkripsi dan autentikasi. Dengan menggabungkan keduanya, kita mendapatkan fleksibilitas GRE dan keamanan dari IPsec.

---

**Konfigurasi GRE over IPsec**

tidak bisa digunakan di cisco packet tracer karena keterbatasan

**R1**

```bash
crypto isakmp policy 10
 encryption 3des
 authentication pre-share
 hash md5
 group 2
crypto isakmp key Ammin address 200.0.0.2

crypto ipsec transform-set Ammin123 esp-sha-hmac esp-des
 mode transport

crypto ipsec profile SEC_GRE
 set transform-set Ammin123

interface Tunnel0
 ip address 192.168.1.1 255.255.255.252
 tunnel source GigabitEthernet0/0/0
 tunnel destination 200.0.0.2
 tunnel protection ipsec profile SEC_GRE
```

**R2**

```bash
crypto isakmp policy 10
 encryption 3des
 authentication pre-share
 hash md5
 group 2
crypto isakmp key Ammin address 100.0.0.2

crypto ipsec transform-set Ammin123 esp-sha-hmac esp-des
 mode transport

crypto ipsec profile SEC_GRE
 set transform-set Ammin123

interface Tunnel0
 ip address 192.168.1.2 255.255.255.252
 tunnel source GigabitEthernet0/0/0
 tunnel destination 100.0.0.2
 tunnel protection ipsec profile SEC_GRE
```

---

**Penjelasan Konfigurasi:**

* **ISAKMP Policy**: Menentukan parameter untuk fase 1 IKE, termasuk algoritma enkripsi, autentikasi, metode hash, dan grup Diffie-Hellman.
* **Pre-shared Key**: Digunakan untuk autentikasi antar perangkat dalam fase IKE.
* **Transform Set**: Menentukan protokol dan algoritma yang digunakan IPsec untuk enkripsi dan autentikasi data.
* **IPsec Profile**: Menggabungkan transform set yang akan digunakan untuk melindungi interface tunnel.
* **Interface Tunnel**: Konfigurasi IP address, sumber (source), tujuan (destination), serta penerapan profil IPsec sebagai proteksi tunnel.

Dengan konfigurasi di atas, GRE tunnel yang dibentuk akan dienkripsi menggunakan IPsec, sehingga data yang dikirimkan melalui tunnel akan lebih aman dari penyadapan.
