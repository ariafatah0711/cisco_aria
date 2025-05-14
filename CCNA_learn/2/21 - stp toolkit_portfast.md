# 📘 Panduan Lengkap Spanning Tree Protocol (STP) dan PortFast

## 🔌 Apa Itu Spanning Tree Protocol (STP)?

**Spanning Tree Protocol (STP)** adalah protokol layer 2 yang digunakan untuk mencegah **looping** di jaringan yang memiliki jalur redundan antar switch.

### 🔁 Tujuan STP

* Menghindari loop jaringan
* Menentukan jalur terbaik untuk data
* Menonaktifkan jalur redundan (backup) sampai diperlukan

### 🧭 STP Port States

| State          | Durasi     | Fungsi                                  |
| -------------- | ---------- | --------------------------------------- |
| **Blocking**   | -          | Mencegah loop, tidak kirim/terima frame |
| **Listening**  | \~15 detik | Dengarkan BPDU, belum belajar MAC       |
| **Learning**   | \~15 detik | Mulai belajar MAC address               |
| **Forwarding** | -          | Kirim dan terima data                   |
| **Disabled**   | -          | Port mati/tidak aktif                   |

Total delay sebelum port aktif (tanpa PortFast): **\~30 detik**

## 🚀 Apa Itu STP PortFast?

**PortFast** adalah fitur STP yang:

* **Mem-bypass** tahap Listening dan Learning
* Port langsung masuk ke **Forwarding** state
* Digunakan untuk **host** seperti PC, printer, atau server

### ⚠️ PortFast hanya boleh dipakai di:

* **Access port** ke perangkat akhir
* **Bukan port trunk atau ke switch lain!**

### 💣 Risiko Jika Salah Gunakan

Jika PortFast digunakan di port ke switch lain dan menerima **BPDU**, bisa terjadi **looping jaringan**!

## 📌 Konfigurasi PortFast

### 🔹 Untuk Satu Port

```bash
interface FastEthernet0/1
 spanning-tree portfast
```

### 🔹 Global untuk Semua Access Port

```bash
spanning-tree portfast default
```

## 🧬 Jenis PortFast

### 🟢 **PortFast Edge (Default)**

* Digunakan untuk koneksi ke host
* Port dianggap sebagai "ujung jaringan"
* **Tidak boleh menerima BPDU**
* Cocok untuk access port

### 🟠 **PortFast Network (PortFast Trunk)**

* Digunakan pada **trunk port** di jaringan besar (MST, Rapid PVST+)
* Harus hati-hati! Risiko loop tinggi
* Wajib aktifkan proteksi seperti **BPDU Guard / Filter**

```bash
interface FastEthernet0/2
 spanning-tree portfast trunk
```

## 🔐 Kombinasi dengan Proteksi

### 🛡️ BPDU Guard

Jika port menerima **BPDU**, port langsung **shutdown** untuk mencegah loop

```bash
interface FastEthernet0/1
 spanning-tree portfast
 spanning-tree bpduguard enable
```

### 🛡️ BPDU Filter

Menyembunyikan pengiriman BPDU dari port (tidak mengirim atau menerima)

> ⚠️ Lebih berisiko daripada BPDU Guard

```bash
interface FastEthernet0/1
 spanning-tree bpdufilter enable
```

### 🌍 Root Guard

* Mencegah port menjadi **Root Port** jika menerima superior BPDU
* Digunakan untuk melindungi **Root Bridge** dari perubahan tidak sengaja
* Jika menerima BPDU lebih baik dari Root Bridge saat ini, port masuk ke **Root-Inconsistent state** dan tidak forwarding

```bash
interface FastEthernet0/3
 spanning-tree guard root
```

### ♻️ Loop Guard

* Mencegah port yang seharusnya **blocking** berubah ke **forwarding** karena tidak menerima BPDU
* Menangani kondisi **unidirectional link failure**
* Jika tidak menerima BPDU, port masuk **Loop-Inconsistent state** dan tidak forwarding

```bash
interface FastEthernet0/4
 spanning-tree guard loop
```

## 🧠 Fitur Tambahan STP

### ↺ UplinkFast

* Mempercepat recovery dari port backup (alternate port)
* Cocok di access layer

```bash
spanning-tree uplinkfast
```

### ↳ BackboneFast

* Mempercepat recovery jalur di core/backbone

```bash
spanning-tree backbonefast
```

### ⚡ Rapid Spanning Tree Protocol (RSTP)

* Versi lebih cepat dari STP (IEEE 802.1w)
* Port state disederhanakan:

  * **Discarding** (gabungan blocking & listening)
  * **Learning**
  * **Forwarding**
* Konvergensi lebih cepat (\~1-2 detik)

## 🎯 Kesimpulan

| Fitur              | Fungsi                                       | Digunakan untuk           | Catatan                                                |
| ------------------ | -------------------------------------------- | ------------------------- | ------------------------------------------------------ |
| **STP**            | Mencegah loop di jaringan redundant          | Semua jaringan switch     | Default protokol di banyak switch                      |
| **PortFast**       | Langsung forwarding, skip listening/learning | PC, printer, server       | Hanya di access port                                   |
| **PortFast Edge**  | Default mode PortFast (untuk host)           | Access port               | Aman jika tidak terima BPDU                            |
| **PortFast Trunk** | PortFast di trunk port (advanced use)        | Jaringan besar / backbone | Harus dengan proteksi                                  |
| **BPDU Guard**     | Shutdown port jika terima BPDU               | PortFast port             | Untuk mencegah switch liar                             |
| **BPDU Filter**    | Tidak kirim/terima BPDU                      | Trunk port khusus         | Jangan dipakai sembarangan                             |
| **Root Guard**     | Mencegah perubahan Root Bridge               | Port ke switch non-root   | Port masuk root-inconsistent jika terima superior BPDU |
| **Loop Guard**     | Mencegah forwarding tanpa BPDU               | Blocking port             | Tangani one-way BPDU failure                           |
| **UplinkFast**     | Recovery cepat di access layer               | Port alternate            | Tidak dipakai di RSTP                                  |
| **BackboneFast**   | Recovery cepat di backbone/core              | Port root atau designated | Tidak dipakai di RSTP                                  |
| **RSTP**           | STP cepat (802.1w)                           | Semua jaringan modern     | Recommended over classic STP                           |

---

Jika kamu butuh contoh topologi, simulasi Cisco Packet Tracer, atau konfigurasi lab STP/PortFast lainnya, tinggal bilang aja!
