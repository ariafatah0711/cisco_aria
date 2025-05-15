## 12. Static Routing

### Pengantar

Static Routing adalah metode konfigurasi rute jaringan secara manual oleh administrator jaringan. Dalam metode ini, router tidak menggunakan protokol routing dinamis untuk memahami topologi jaringan, melainkan administrator menentukan jalur lalu lintas ke tujuan tertentu secara eksplisit. Static Routing cocok digunakan pada jaringan kecil atau jaringan dengan topologi yang stabil, karena tidak memerlukan pertukaran informasi routing antar perangkat.

### 1. Konfigurasi Static Route

Untuk menambahkan rute statik pada router Cisco, gunakan perintah berikut:

```bash
Router(config)# ip route <alamat_jaringan_tujuan> <subnet_mask> <alamat_next_hop / antarmuka_keluar>
```

**Contoh:**

Misalkan Router1 memiliki dua antarmuka dengan alamat IP `192.168.1.1/24` dan `192.168.10.1/24`. Untuk mengarahkan lalu lintas menuju jaringan `192.168.2.0/24` melalui next-hop `192.168.10.2`, konfigurasi yang diperlukan adalah:

```bash
Router(config)# ip route 192.168.2.0 255.255.255.0 192.168.10.2
```

### 2. Konfigurasi Default Route (Gateway of Last Resort)

Default Route digunakan untuk mengarahkan lalu lintas ke tujuan yang tidak terdapat dalam tabel routing. Ini berguna untuk mengarahkan semua lalu lintas yang tidak dikenali ke gateway tertentu, seperti akses ke internet.

Untuk mengkonfigurasi default route:

```bash
Router(config)# ip route 0.0.0.0 0.0.0.0 <alamat_next_hop / antarmuka_keluar>
```

**Contoh:**

```bash
Router(config)# ip route 0.0.0.0 0.0.0.0 192.168.10.2
```

Perintah ini mengarahkan semua lalu lintas yang tidak dikenali ke alamat `192.168.10.2` sebagai gateway of last resort.

### 3. Verifikasi Tabel Routing

Untuk memverifikasi konfigurasi routing yang telah dilakukan, gunakan perintah:

```bash
Router# show ip route
```

**Contoh Output:**

```pgsql
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, O - OSPF, IA - OSPF inter area, E1 - OSPF external type 1
       E2 - OSPF external type 2, i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1
       L2 - IS-IS level-2, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP
       a - application route

Gateway of last resort is 192.168.10.2 to network 0.0.0.0

     192.168.1.0/24 is variably subnetted, 2 subnets, 2 masks
C       192.168.1.0/24 is directly connected, FastEthernet0/0
C       192.168.10.0/24 is directly connected, FastEthernet1/0
S*   0.0.0.0/0 [1/0] via 192.168.10.2
S    192.168.2.0/24 [1/0] via 192.168.10.2
```

**Keterangan:**

* **C:** Connected – jaringan yang terhubung langsung ke router.
* **S:** Static – rute yang dikonfigurasi secara manual.
* **S*:*\* Static Default – default route yang dikonfigurasi secara manual.

### 4. Tips Tambahan

* **Administrative Distance (AD):** Nilai AD default untuk static route adalah 1. Anda dapat menyesuaikan nilai ini untuk mengatur prioritas rute jika terdapat beberapa rute menuju tujuan yang sama.

```bash
Router(config)# ip route 192.168.2.0 255.255.255.0 192.168.10.2 5
```

Perintah di atas menetapkan AD sebesar 5 untuk rute tersebut.

* **Menghapus Static Route:**

```bash
Router(config)# no ip route <alamat_jaringan_tujuan> <subnet_mask> <alamat_next_hop / antarmuka_keluar>
```

* **Menyimpan Konfigurasi:**

Setelah melakukan konfigurasi, pastikan untuk menyimpan perubahan agar tetap berlaku setelah router direstart:

```bash
Router# copy running-config startup-config
```