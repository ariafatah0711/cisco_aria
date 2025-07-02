## 🌐 1. Interior vs Exterior Gateway Protocols

| **Aspek**                 | **IGP (Interior Gateway Protocol)**           | **EGP (Exterior Gateway Protocol)**             |
| ------------------------- | --------------------------------------------- | ----------------------------------------------- |
| **Fungsi**                | Routing **dalam satu Autonomous System (AS)** | Routing **antar-AS**, seperti antar ISP         |
| **Contoh**                | RIP, EIGRP, OSPF, IS-IS                       | BGP (Border Gateway Protocol)                   |
| **Lingkup**               | Internal jaringan organisasi                  | Edge jaringan ke Internet atau antar organisasi |
| **Ruang lingkup routing** | Dinamis untuk LAN/MAN                         | Digunakan untuk WAN skala global (Internet)     |

🪰 Intinya:

* **IGP** = dipakai di dalam organisasi/jaringan sendiri.
* **EGP** = dipakai untuk pertukaran rute antar organisasi (antar AS di Internet).
* Protokol **EGP saat ini hanya BGP** yang digunakan.

---

## 🔁 2. RIP – *Routing Information Protocol*

* **Tipe**: Distance-vector, termasuk dalam IGP
* **Metrik**: Hop count

  * Maks. 15 hop (lebih dari itu dianggap **unreachable**)
* **Update**: Periodik tiap 30 detik melalui **UDP port 520**
* **Loop prevention**:

  * *Split horizon*, *route poisoning*, *hold-down timer*
* **Administrative Distance (AD)**: 120 (cukup rendah, prioritas kecil)

### ⚙️ Konfigurasi RIP v2 (Cisco IOS)

```bash
router rip
 version 2
 no auto-summary
 network 10.0.0.0
 network 172.16.0.0
```

### 📌 Penjelasan:

* `version 2`: menggunakan RIP versi 2 (support subnetting, multicast)
* `no auto-summary`: agar subnet dikirimkan **utuh** sesuai interface
* Tidak memakai wildcard → cukup `network x.x.x.x`, router akan memilih interface yang cocok.

### ✔️ Kelebihan:

* Sangat mudah dikonfigurasi
* Cocok untuk topologi **kecil & sederhana**

### ❌ Kekurangan:

* Konvergensi lambat
* **Tidak scalable** (maks 15 hop)
* Overhead tinggi (update rutin)

---

## ⚡ 3. EIGRP – *Enhanced Interior Gateway Routing Protocol*

* **Tipe**: Hybrid protocol (gabungan distance-vector + elemen link-state)
* **Algoritma**: DUAL (Diffusing Update Algorithm)
* **Metrik komposit**: bandwidth + delay (default), opsional reliability, load, MTU
* **Update**: Hanya saat terjadi perubahan (bukan periodik)
* **Administrative Distance**:

  * 90 (internal)
  * 170 (eksternal/redistribusi)

### ⚙️ Konfigurasi EIGRP (Cisco IOS)

```bash
router eigrp 100
 network 10.0.0.0 0.0.255.255
 network 172.16.0.0 0.0.255.255
 no auto-summary
```

### 🧠 Penjelasan:

* `network ...` + **wildcard mask**: memilih interface yang **ikut EIGRP**
* `no auto-summary`: agar tidak merangkum network classful seperti 10.0.0.0/8

### 🔧 Optional Summarization (manual):

```bash
interface Serial0/0
 ip summary-address eigrp 100 192.168.0.0 255.255.252.0
```

### ✔️ Kelebihan:

* Konvergensi cepat
* Skalabilitas tinggi
* Load balancing unequal-cost

### ❌ Kekurangan:

* Cisco proprietary (sekarang terbuka)
* Konsumsi CPU/mem lebih tinggi

---

## 📚 4. Summary vs No Summary (auto-summary)

| **Fitur**        | **auto-summary (default)**                              | **no auto-summary**                           |
| ---------------- | ------------------------------------------------------- | --------------------------------------------- |
| **Efek**         | Router merangkum iklan route berdasarkan classful       | Router mengirim **subnet mask lengkap**       |
| **Masalah umum** | **Discontiguous network** bisa bikin loop/koneksi error | Tidak terjadi karena informasi subnet lengkap |
| **Contoh**       | `network 10.1.1.0/24` bisa diringkas jadi `10.0.0.0/8`  | Tetap dikirim sebagai `10.1.1.0/24`           |

---

## 🔄 5. Simulasi 2 Router – RIP + EIGRP

### 📍 Topologi:

* R1: 10.0.0.0/16, R2: 10.1.0.0/16 (via RIP)
* Koneksi antar router: 172.16.0.0/24 (via EIGRP)

### 💻 Router A

```bash
router rip
 version 2
 no auto-summary
 network 10.0.0.0

router eigrp 100
 network 172.16.0.0 0.0.0.255
 no auto-summary

interface Serial0/0
 ip address 172.16.0.1 255.255.255.0
```

### 💻 Router B

```bash
router rip
 version 2
 no auto-summary
 network 10.1.0.0

router eigrp 100
 network 172.16.0.0 0.0.0.255
 no auto-summary

interface Serial0/0
 ip address 172.16.0.2 255.255.255.0
```

---

## 🔹 6. Distance-Vector vs Link-State

| Aspek                 | Distance-Vector (RIP, EIGRP\*)   | Link-State (OSPF, IS-IS)       |
| --------------------- | -------------------------------- | ------------------------------ |
| **Informasi dikirim** | Ke tetangga, hanya tahu next hop | Flooding peta topologi lengkap |
| **Algoritma**         | Bellman-Ford / DUAL              | Dijkstra (SPF)                 |
| **Update**            | Berkala / Triggered              | Triggered (flooding)           |
| **Kelebihan**         | Mudah, overhead kecil            | Cepat, stabil, anti-loop       |
| **Kekurangan**        | Lambat, rawan loop (RIP)         | Kompleks, CPU tinggi           |

> *EIGRP bersifat **hybrid*** karena memakai **DUAL** dan memiliki kelebihan dari kedua pendekatan.

---

## ✅ Kesimpulan Akhir

| Protokol  | Cocok untuk    | Tipe            | AD     | Skala   | Konvergensi | Kelebihan          |
| --------- | -------------- | --------------- | ------ | ------- | ----------- | ------------------ |
| **RIP**   | Kecil          | Distance-Vector | 120    | ≤15 hop | Lambat      | Mudah & ringan     |
| **EIGRP** | Menengah–besar | Hybrid          | 90/170 | Besar   | Cepat       | Skalabel & efisien |
