## 13. Dynamic Routing Protocols

Dynamic Routing memungkinkan router untuk berbagi informasi jaringan secara otomatis dan memilih jalur terbaik berdasarkan kondisi terkini.

---

### 1. RIP (Routing Information Protocol)

**Deskripsi**

* Distance-vector protocol dengan metric hop count (maksimal 15 hop).

**Konfigurasi Dasar**

```
router rip
 network <network>
 no auto-summary      ! (jika menggunakan versi 2 untuk menonaktifkan summary otomatis)
```

**Redistribute**

* Redistribusi dari protokol lain:

```
router rip
 redistribute <protocol> metric <hop_count>
```

Contoh: `redistribute ospf metric 2`.

**Contoh**

* Router A

  * Fa0/0: 192.168.1.1/24
  * Fa0/1: 192.168.10.1/24

```
router rip
 network 192.168.1.0
 network 192.168.10.0
```

Setelah konfigurasi, gunakan `show ip route` untuk verifikasi:

```
C    192.168.1.0/24 is directly connected, FastEthernet0/0
R    192.168.2.0/24 [120/1] via 192.168.10.2, 00:00:23, FastEthernet0/1
C    192.168.10.0/24 is directly connected, FastEthernet0/1
```

---

### 2. OSPF (Open Shortest Path First)

**Deskripsi**

* Link-state IGP yang menggunakan Algoritma Dijkstra.
* Protokol IP 89.
* Skalabel untuk jaringan besar dengan konsep Area dan Backbone (Area 0).

**Konsep Penting**

* **Backbone (Area 0):** Area pusat tempat semua area lain terhubung.
* **Multiple Area:** Memisahkan jaringan menjadi area-area terpisah untuk efisiensi.
* **Virtual Link:** Menghubungkan area yang terpisah dari backbone.
* **Router ID:** IP unik yang mewakili router dalam OSPF.
* **Redistribute:** Mengimpor rute dari protokol lain.

**Wildcard Mask**

* Menentukan rentang IP pada perintah `network`.

```bash
0.0.0.255  # untuk /24
0.0.0.3    # untuk /30
```

**Konfigurasi Dasar**

```bash
router ospf <process-id>
 network <ip> <wildcard-mask> area <area-id>
 router-id <A.B.C.D>
 no auto-summary   ! (jika diperlukan)
```

**Redistribute**

```bash
router ospf <process-id>
 redistribute <protocol> subnets
```

**Virtual Link**

```bash
router ospf <process-id>
 area <transit-area> virtual-link <router-id> [<neighbor-router-id>]
```

**Contoh**

* Router A:

  * Fa0/0: 10.10.10.1/24
  * Fa0/1: 20.20.20.1/24
  * Fa0/2: 1.1.1.2/30

```bash
router ospf 10
 network 10.10.10.0 0.0.0.255 area 0
 network 20.20.20.0 0.0.0.255 area 0
 network 1.1.1.0 0.0.0.3 area 0
 router-id 10.10.10.1
```

---

### 2. OSPF (Open Shortest Path First)

**Deskripsi**

* Link-state IGP yang menggunakan Algoritma Dijkstra.
* Protokol IP 89.
* Skalabel untuk jaringan besar dengan konsep Area dan Backbone (Area 0).

**Konsep Penting**

* **Backbone (Area 0):** Area pusat tempat semua area lain terhubung.
* **Multiple Area:** Memisahkan jaringan menjadi area-area terpisah untuk efisiensi.
* **Virtual Link:** Koneksi logis untuk menghubungkan non-backbone area yang tidak kontigu ke Area 0.
* **Router ID:** IP unik yang mewakili router dalam OSPF.
* **Redistribute:** Mengimpor rute dari protokol lain.

**Wildcard Mask**

* Menentukan rentang IP pada perintah `network`.

```bash
0.0.0.255  # untuk /24
0.0.0.3    # untuk /30
```

**Konfigurasi Dasar**

```bash
router ospf <process-id>
 network <ip> <wildcard-mask> area <area-id>
 router-id <A.B.C.D>
 no auto-summary   ! (jika diperlukan)
```

**Redistribute**

```bash
router ospf <process-id>
 redistribute <protocol> subnets
 default-information originate # default route 
```

**Virtual Link**
Virtual Link digunakan untuk area yang tidak memiliki koneksi fisik langsung ke backbone (Area 0). Virtual Link menciptakan jalur logis melalui area transit (harus area yang sudah terhubung kontigu ke Area 0 dan kedua ABR).

**Langkah Konfigurasi:**

1. Pastikan ada area transit yang menghubungkan ABR-A dan ABR-B ke Area 0.
2. Pada kedua router ABR yang ingin dihubungkan:

   ```bash
   router ospf <process-id>
    area <transit-area> virtual-link <neighbor-router-id>
   ```

   * `<transit-area>`: ID area transit tempat virtual link dilewati
   * `<neighbor-router-id>`: Router ID ABR lain
3. Verifikasi status:

   ```bash
   show ip ospf virtual-links
   ```

**Contoh Kasus:**
* Topologi:
  ```
           [R1]
             |
         (Area 0 - Backbone)
             |
           [R2]
             |
         (Area 2 - Transit)
         /           \
     [R3]           [R4]
   (Area 1)       (Area 0)
  ```

  * Area 1 (non-backbone) hanya terkoneksi ke Area 2.
  * Area 2 (transit) terkoneksi ke Area 0.
  * ABR1 (Router ID 1.1.1.1) menghubungkan Area 1 & Area 2.
  * ABR2 (Router ID 2.2.2.2) menghubungkan Area 2 & Area 0.

* Konfigurasi pada ABR1 R3 (Router ID: 1.1.1.1):
  ```bash
  router ospf 10
   router-id 1.1.1.1
   network 10.0.1.0 0.0.0.255 area 1
   network 192.168.2.0 0.0.0.255 area 2
   area 2 virtual-link 2.2.2.2
  ```

* Konfigurasi pada ABR1 R2 (Router ID: 2.2.2.2.):
  ```
  router ospf 10
   router-id 2.2.2.2
   network 192.168.2.0 0.0.0.255 area 2
   network 10.0.0.0 0.0.0.255 area 0
   area 2 virtual-link 1.1.1.1
  ```

* Hasil verifikasi:

  ```bash
  Router# show ip ospf virtual-links
  Virtual Link OSPF_VL_1 is up
    Transit area 2, Neighbors 1
    TTL pointer, Hello 10, Dead 40, Wait 40, Retransmit 5
    Eclipse time 00:10:23
  ```

---

### 3. EIGRP (Enhanced Interior Gateway Routing Protocol) (Enhanced Interior Gateway Routing Protocol)

**Deskripsi**

* Hybrid protocol (Distance-vector + advanced metrics).
* Metric dasar: bandwidth, delay, reliability, load.

**Konfigurasi Dasar**

```bash
router eigrp <autonomous-system>
 network <network> [<wildcard-mask>]
 network <network> # without wildcard juga bisa
 no auto-summary    ! untuk menonaktifkan summarization otomatis
```

**Redistribute**

```bash
router eigrp <AS>
 redistribute <protocol> metric <bandwidth> <delay> <reliability> <load> <mtu>
 redistribute static # for static routes and default route
```

**Passive Interface**

* Mencegah update EIGRP pada interface tertentu:

```bash
router eigrp <AS>
 passive-interface <interface>
```

**Contoh**

* Loopback:

```bash
interface Loopback1
 ip address 1.1.1.1 255.255.255.255
!
router eigrp 10
 network 1.1.1.0 0.0.0.255
 network 192.168.10.0
 no auto-summary
 passive-interface Serial0/0
```
