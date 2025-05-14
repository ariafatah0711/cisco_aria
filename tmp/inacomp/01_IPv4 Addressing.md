## 1. Pengaturan Alamat IP (IPv4 Addressing)

### a. Pengertian

IPv4 (Internet Protocol version 4) adalah sistem pengalamatan 32-bit yang digunakan untuk mengidentifikasi perangkat dalam jaringan komputer. Ditulis dalam notasi desimal bertitik, misalnya: `192.168.1.1`.

### b. Struktur Alamat IP

Alamat IP terbagi menjadi dua bagian:

* **Network ID**: Menentukan jaringan tempat perangkat berada.
* **Host ID**: Menentukan perangkat spesifik dalam jaringan tersebut.

**Contoh:**

* Alamat IP: `192.168.1.10`
* Subnet Mask: `255.255.255.0`
* Network ID: `192.168.1.0`
* Host ID: `0.0.0.10`

---

## 2. Subnetting

### a. Pengertian

Subnetting adalah teknik membagi jaringan besar menjadi jaringan-jaringan kecil untuk efisiensi, keamanan, dan pengelolaan jaringan.

### b. Tujuan

* **Efisiensi**: Mengurangi pemborosan alamat IP.
* **Keamanan**: Memisahkan segmen jaringan.
* **Manajemen**: Mengurangi lalu lintas broadcast.

### c. Cara Menghitung

1. Tentukan jumlah subnet/host yang dibutuhkan.
2. Hitung bit yang diperlukan:

   * Subnet: `2^n ≥ jumlah subnet`
   * Host: `2^n - 2 ≥ jumlah host`
3. Tambahkan bit subnet ke subnet mask default.
4. Hitung rentang IP tiap subnet.

### d. Contoh

* Jaringan: `192.168.1.0/24`
* Ingin: 4 subnet → butuh 2 bit (`2^2 = 4`)
* Subnet mask baru: `255.255.255.192` (/26)
* Tiap subnet: 64 alamat, 62 bisa digunakan (2 untuk network dan broadcast).

---

## 3. CIDR (Classless Inter-Domain Routing)

### a. Pengertian

CIDR adalah metode pengalamatan fleksibel yang menggantikan sistem kelas IP tradisional untuk efisiensi alokasi IP.

### b. Notasi CIDR

Menggunakan format: `alamat IP/prefix`

**Contoh:** `192.168.1.0/24` → 24 bit untuk network, 8 bit untuk host.

### c. Keuntungan

* Efisiensi alokasi alamat
* Subnet lebih fleksibel
* Pengelompokan jaringan untuk routing

---

## 4. Penggunaan Subnet Mask

### a. Pengertian

Subnet mask adalah angka 32-bit untuk membedakan Network ID dan Host ID dalam alamat IP.

### b. Fungsi

Digunakan perangkat untuk menentukan apakah tujuan IP ada di jaringan lokal atau harus diarahkan melalui router.

### c. Contoh Umum

* `255.0.0.0` (/8)
* `255.255.0.0` (/16)
* `255.255.255.0` (/24)
* `255.255.255.192` (/26)

### d. Konversi ke CIDR

Hitung jumlah bit "1" dalam format biner:

* `255.255.255.0` = `11111111.11111111.11111111.00000000` → 24 bit → `/24`

---

## 5. Alat Bantu Subnet

* [MxToolbox Subnet Calculator](https://mxtoolbox.com/subnetcalculator.aspx)
* [Calculator.net Subnet Calculator](https://www.calculator.net/ip-subnet-calculator.html)