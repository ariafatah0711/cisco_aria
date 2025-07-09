## Redistribusi OSPF ↔ EIGRP: Konfigurasi dan Penjelasan

### 🎯 Tujuan

Menjelaskan kenapa redistribusi antara OSPF dan EIGRP perlu konfigurasi tambahan seperti `metric`, dan kenapa route dari OSPF bisa tidak muncul di switch/router lain walau sudah di-redistribute.

---

### 📌 Konfigurasi Redistribusi di R5

```bash
router ospf 10
 redistribute eigrp 10 subnets

router eigrp 10
 redistribute ospf 10 metric 10000 100 255 1 1500
 network 200.200.200.0
 network 192.168.4.0
 network 192.168.2.0
 network 192.168.20.0 0.0.0.15
 auto-summary
```

### 🧠 Kenapa Perlu `metric` Saat Redistribusi ke EIGRP?

EIGRP membutuhkan **5 parameter metric** agar bisa menerima route dari protokol lain:

| Parameter   | Penjelasan                                |
| ----------- | ----------------------------------------- |
| Bandwidth   | Dalam kbps (semakin kecil = metric besar) |
| Delay       | Dalam 10 mikrodetik                       |
| Reliability | Skor 0–255 (255 = terbaik)                |
| Load        | Skor 0–255 (1 = ringan)                   |
| MTU         | Umumnya 1500 (opsional)                   |

Contoh:

```bash
redistribute ospf 10 metric 10000 100 255 1 1500
```

Tanpa `metric`, redistribusi **tidak akan berjalan** karena OSPF tidak menyuplai nilai-nilai ini.

### 🔁 Redistribusi ke OSPF

Tidak perlu `metric`, tapi **perlu `subnets`** agar OSPF mengiklan seluruh subnet:

```bash
redistribute eigrp 10 subnets
```

Tanpa `subnets`, hanya network classful yang dikirimkan.

---

### 🔍 Masalah: SW2 Tidak Dapat Route OSPF dari R5

**Gejala:**

* SW2 hanya menerima summary `D 192.168.20.0/24` dari EIGRP
* Tidak menerima route OSPF seperti `10.10.10.0/30`, `172.16.x.x`

**Kemungkinan Penyebab:**

1. `auto-summary` aktif → hanya mengirimkan summary, bukan subnet
2. `network` statement di router antara tidak mencakup semua subnet
3. Redistribusi OSPF ↔ EIGRP **tidak dilakukan dua arah**
4. Ada ACL / filter yang menghambat

**Solusi:**

* Matikan `auto-summary`:

  ```bash
  router eigrp 10
   no auto-summary
  ```
* Redistribusi dua arah di semua router penghubung:

  ```bash
  router eigrp 10
   redistribute ospf 10 metric 10000 100 255 1 1500

  router ospf 10
   redistribute eigrp 10 subnets
  ```
* Pastikan `network` statement mencakup semua subnet yang relevan

---

### 🧪 Verifikasi

```bash
show ip route
```

Pastikan route dari OSPF muncul sebagai `D EX` (EIGRP External) di router EIGRP seperti SW2:

```bash
D EX 10.10.10.4/30 [170/...] via ...
D EX 172.16.0.0/29 [170/...] via ...
```

---

### ✅ Ringkasan

| Arah Redistribusi | Perlu Metric? | Penjelasan                                     |
| ----------------- | ------------- | ---------------------------------------------- |
| OSPF → EIGRP      | ✅ Ya          | Karena EIGRP butuh 5 parameter metric          |
| EIGRP → OSPF      | ❌ Tidak       | Cukup pakai `subnets` untuk iklan subnet penuh |

Jika ingin praktis:

```bash
router eigrp 10
 default-metric 10000 100 255 1 1500
```

Agar tidak perlu nulis metric berulang kali.

---

### 📖 Catatan Tambahan

* Angka metric **tidak bisa sembarangan**, harus realistis:

  * Bandwidth: sesuai tipe link (misal 10000 untuk 10 Mbps)
  * Delay: jangan terlalu tinggi
  * Reliability: ideal 255
  * Load: ideal 1
* Kalau terlalu ekstrem, route bisa ditolak atau tidak dipilih sebagai best path.
