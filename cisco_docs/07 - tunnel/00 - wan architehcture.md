# 🧩 Protokol WAN: HDLC, PPP, dan Frame Relay

## 🔹 1. HDLC (High-Level Data Link Control)

### Fungsi

Protokol dasar untuk koneksi point-to-point antar perangkat jaringan.

### Ciri Khas

* Sederhana dan stabil.
* Default pada router Cisco.
* Versi Cisco (cHDLC) hanya kompatibel dengan perangkat Cisco.

### Kelebihan

* Mudah dikonfigurasi.
* Cocok untuk koneksi langsung antar dua titik.

### Kekurangan

* Tidak mendukung otentikasi atau deteksi kualitas link.

### 🔧 Konfigurasi HDLC di Cisco

```bash
Router> enable
Router# configure terminal
Router(config)# interface serial 0/0
Router(config-if)# encapsulation hdlc
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit
Router(config)# exit
Router# write memory
```

**Catatan:** HDLC hanya kompatibel antar perangkat Cisco karena versi cHDLC.

---

## 🔐 2. PPP (Point-to-Point Protocol)

### Fungsi

Protokol point-to-point yang lebih fleksibel dan mendukung berbagai fitur.

### Ciri Khas

* Mendukung otentikasi (PAP, CHAP).
* Kompatibel dengan berbagai vendor perangkat.
* Dapat digunakan pada koneksi sinkron dan asinkron.

### Kelebihan

* Fitur lengkap: otentikasi, deteksi kualitas link, dukungan multi-protokol.

### Kekurangan

* Konfigurasi lebih kompleks dibanding HDLC.

### 🔧 Konfigurasi PPP dengan CHAP

```bash
Router> enable
Router# configure terminal
Router(config)# hostname RouterA
RouterA(config)# username RouterB password cisco123
RouterA(config)# interface serial 0/0
RouterA(config-if)# encapsulation ppp
RouterA(config-if)# ppp authentication chap
RouterA(config-if)# ip address 192.168.2.1 255.255.255.0
RouterA(config-if)# no shutdown
RouterA(config-if)# exit
RouterA(config)# exit
RouterA# write memory
```

**Catatan:** Pastikan kedua router memiliki konfigurasi username dan password yang sesuai untuk CHAP.

---

## ☁️ 3. Frame Relay

### Fungsi

Protokol untuk menghubungkan banyak lokasi melalui jaringan carrier dengan virtual circuits.

### Ciri Khas

* Menggunakan Permanent Virtual Circuits (PVC).
* Efisien untuk menghubungkan banyak situs dengan satu koneksi fisik.
* Fitur pengendalian kemacetan: FECN dan BECN.

### Kelebihan

* Biaya lebih rendah dibanding leased line point-to-point.

### Kekurangan

* Kurang cocok untuk aplikasi dengan kebutuhan latensi rendah seperti VoIP atau video.

### 🔧 Konfigurasi Frame Relay (Subinterface Point-to-Point)

```bash
Router> enable
Router# configure terminal
Router(config)# interface serial 0/0
Router(config-if)# encapsulation frame-relay
Router(config-if)# no shutdown
Router(config-if)# exit
Router(config)# interface serial 0/0.1 point-to-point
Router(config-subif)# ip address 10.10.10.1 255.255.255.252
Router(config-subif)# frame-relay interface-dlci 100
Router(config-subif)# exit
Router(config)# exit
Router# write memory
```

**Catatan:** Pastikan mengetahui DLCI yang diberikan oleh penyedia layanan.

---

## 🔁 Perbandingan dengan Ethernet Biasa

| Fitur            | WAN (HDLC/PPP/Frame Relay)     | Ethernet Biasa (LAN)            |
| ---------------- | ------------------------------ | ------------------------------- |
| Lingkup          | WAN (Wide Area Network)        | LAN (Local Area Network)        |
| Topologi         | Point-to-point atau multipoint | Biasanya star atau bus          |
| Media            | Kabel serial, leased line      | Kabel twisted pair, fiber optic |
| Protokol Layer 2 | HDLC, PPP, Frame Relay         | Ethernet (IEEE 802.3)           |
| Kecepatan        | Tergantung jenis koneksi       | 10 Mbps hingga 100 Gbps         |
| Penggunaan       | Koneksi antar lokasi geografis | Koneksi dalam satu gedung       |

---

## ✅ Kesimpulan

* **HDLC:** Cocok untuk koneksi sederhana antar dua titik dengan perangkat Cisco.
* **PPP:** Pilihan tepat jika memerlukan fitur otentikasi dan interoperabilitas antar vendor.
* **Frame Relay:** Efisien untuk topologi banyak lokasi lewat satu link fisik.
* **Ethernet:** Solusi ideal untuk LAN dengan kecepatan tinggi dan biaya rendah.
