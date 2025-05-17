# 🌐 Pengantar WAN (Wide Area Network)

WAN (Wide Area Network) adalah jaringan yang mencakup area geografis luas, menghubungkan beberapa LAN (Local Area Network) yang tersebar di berbagai lokasi. WAN memungkinkan komunikasi dan pertukaran data antar kantor cabang, pusat data, dan lokasi lainnya dalam suatu organisasi.

---

## 🔗 Leased Line

Leased line adalah sambungan jaringan khusus yang disewa dari penyedia layanan untuk menghubungkan dua lokasi secara langsung.

### Karakteristik Utama:

* **Koneksi Privat**: Tidak berbagi bandwidth dengan pengguna lain, memberikan keamanan dan stabilitas tinggi.
* **Koneksi Simetris**: Kecepatan unggah dan unduh yang sama.
* **Ketersediaan Tinggi**: Cocok untuk aplikasi bisnis kritis yang memerlukan koneksi stabil dan andal.

Leased line sering digunakan untuk membentuk WAN karena menyediakan jalur komunikasi yang konsisten dan aman antar lokasi.

---

## 🧭 MPLS VPN (Multiprotocol Label Switching Virtual Private Network)

MPLS VPN adalah teknologi yang digunakan oleh penyedia layanan untuk mengarahkan data melalui jaringan mereka menggunakan label, bukan alamat IP. Ini meningkatkan efisiensi dan kecepatan routing.

### Komponen Utama:

* **P (Provider Router)**: Router inti dalam jaringan penyedia layanan yang hanya menangani label MPLS.
* **PE (Provider Edge Router)**: Router di tepi jaringan penyedia yang berinteraksi dengan router pelanggan (CE).
* **CE (Customer Edge Router)**: Router milik pelanggan yang terhubung ke PE dan tidak mengetahui tentang MPLS.

### Jenis MPLS VPN:

* **MPLS Layer 2 VPN (L2VPN)**: Menyediakan koneksi layer 2 antara situs pelanggan. Cocok untuk pelanggan yang ingin kontrol penuh atas routing.
* **MPLS Layer 3 VPN (L3VPN)**: Penyedia layanan mengelola routing antar situs pelanggan. Cocok untuk pelanggan yang ingin manajemen jaringan lebih sederhana.

Pemilihan antara L2VPN dan L3VPN tergantung pada kebutuhan kontrol dan kompleksitas jaringan pelanggan.

---

## 🌐 Konektivitas Internet

Beberapa metode umum untuk konektivitas internet:

* **DSL (Digital Subscriber Line)**: Menggunakan saluran telepon. Cocok untuk pengguna rumahan atau bisnis kecil.
* **Kabel Internet**: Menggunakan jaringan TV kabel. Umumnya memiliki kecepatan lebih tinggi dibandingkan DSL.

---

## 🔐 Site-to-Site VPN vs Remote Access VPN

### Site-to-Site VPN

* **Tujuan**: Menghubungkan dua atau lebih jaringan lokal (LAN) di lokasi berbeda melalui internet secara aman.
* **Protokol Umum**: IPsec.
* **Kelebihan**: Mengamankan komunikasi antar kantor cabang dan pusat data.

### Remote Access VPN

* **Tujuan**: Menghubungkan individu pengguna ke jaringan perusahaan dari lokasi mana pun.
* **Protokol Umum**: SSL/TLS.
* **Kelebihan**: Memberikan fleksibilitas bagi karyawan untuk bekerja jarak jauh dengan akses aman.

---

## 🔐 IPsec

IPsec (Internet Protocol Security) adalah protokol keamanan yang mengenkripsi dan mengautentikasi paket IP.

### Karakteristik Utama:

* **Keamanan Tinggi**: Enkripsi end-to-end.
* **Unicast**: Hanya mendukung komunikasi satu-ke-satu.

---

## 🔄 GRE (Generic Routing Encapsulation)

GRE adalah protokol tunneling yang memungkinkan pengiriman berbagai jenis paket data melalui koneksi point-to-point.

### Karakteristik Utama:

* **Mendukung Multicast dan Broadcast**: Cocok untuk protokol routing dinamis.
* **Tidak Mengenkripsi Data**: Harus digunakan bersama protokol lain (misalnya IPsec) untuk keamanan.

---

## 🔐 GRE over IPsec

Menggabungkan GRE dan IPsec untuk mendapatkan manfaat keduanya:

* **GRE**: Mendukung berbagai jenis lalu lintas (termasuk multicast).
* **IPsec**: Menyediakan enkripsi dan keamanan.

Gabungan ini memungkinkan pengiriman data yang aman dan fleksibel melalui jaringan publik.

---

## 🌐 DMVPN (Dynamic Multipoint VPN)

DMVPN adalah solusi VPN yang memungkinkan koneksi dinamis antara beberapa situs tanpa konfigurasi statis yang kompleks.

### Karakteristik Utama:

* **Skalabilitas Tinggi**: Mudah menambahkan situs baru.
* **Efisiensi**: Situs dapat berkomunikasi langsung tanpa melalui hub pusat.
* **Keamanan**: Menggunakan IPsec untuk enkripsi data.

DMVPN sangat cocok untuk organisasi dengan banyak kantor cabang yang memerlukan komunikasi langsung dan aman antar situs.