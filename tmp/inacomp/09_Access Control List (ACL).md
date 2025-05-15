## 🛡️ Pengertian Access Control List (ACL)

Access Control List (ACL) adalah sekumpulan aturan yang digunakan pada perangkat jaringan seperti router atau switch untuk mengontrol lalu lintas jaringan. Dengan ACL, administrator jaringan dapat menentukan apakah suatu paket data diizinkan atau ditolak berdasarkan kriteria tertentu, seperti alamat IP sumber atau tujuan, jenis protokol, dan nomor port. ACL berfungsi sebagai mekanisme keamanan dasar untuk melindungi jaringan dari akses tidak sah dan mengatur lalu lintas data sesuai kebijakan yang ditetapkan.

## 🔢 Jenis-Jenis ACL

### 1. Standard ACL

**Fungsi:** Menyaring lalu lintas berdasarkan alamat IP sumber saja.

**Nomor ACL:** 1–99 dan 1300–1999 (rentang yang diperluas).

**Penempatan:** Dekat dengan tujuan (destination) untuk menghindari pemblokiran lalu lintas yang sah.

**Contoh:**

```bash
access-list 10 deny 192.168.1.0 0.0.0.255
access-list 10 permit any
interface FastEthernet0/1
ip access-group 10 out
```

### 2. Extended ACL

**Fungsi:** Menyaring lalu lintas berdasarkan alamat IP sumber dan tujuan, jenis protokol, serta nomor port.

**Nomor ACL:** 100–199 dan 2000–2699 (rentang yang diperluas).

**Penempatan:** Dekat dengan sumber (source) untuk memblokir lalu lintas yang tidak diinginkan sejak awal.

**Contoh:**

```bash
access-list 100 deny icmp 192.168.1.0 0.0.0.255 host 20.20.20.2 echo
access-list 100 permit ip any any
interface FastEthernet0/1
ip access-group 100 out
```

### 3. Named ACL

**Fungsi:** Menggunakan nama untuk ACL agar lebih mudah diidentifikasi dan dikelola.

**Keuntungan:** Lebih fleksibel dan mudah dibaca. Entri dapat ditambahkan atau dihapus tanpa menghapus seluruh ACL.

**Contoh:**

```bash
ip access-list standard ALLOW_HOST
 permit host 192.168.10.7
interface FastEthernet0/1
ip access-group ALLOW_HOST in
```

## ⟲ Penempatan ACL pada Interface

ACL dapat diterapkan pada interface router dalam dua arah:

* **Inbound:** Menyaring lalu lintas yang masuk ke interface sebelum diproses oleh router.
* **Outbound:** Menyaring lalu lintas yang keluar dari interface setelah diproses oleh router.

**Catatan:**

* Extended ACL sebaiknya ditempatkan sedekat mungkin dengan sumber lalu lintas.
* Standard ACL sebaiknya ditempatkan dekat dengan tujuan.

## 🔐 ACL pada VTY (Virtual Teletype)

ACL juga bisa digunakan untuk mengontrol akses remote (misal: Telnet atau SSH) melalui VTY lines.

**Contoh:**

```bash
access-list 50 permit 192.168.10.0 0.0.0.255
line vty 0 4
 access-class 50 in
```

Konfigurasi di atas hanya mengizinkan jaringan 192.168.10.0/24 untuk mengakses perangkat melalui VTY.

## 🧪 Contoh Konfigurasi ACL

### ▪ Standard ACL: Blokir Akses dari Subnet Tertentu

**Tujuan:** Memblokir lalu lintas dari subnet 192.168.1.0/24.

```bash
access-list 10 deny 192.168.1.0 0.0.0.255
access-list 10 permit any
interface FastEthernet0/1
ip access-group 10 out
```

### ▪ Extended ACL: Kontrol Akses Berdasarkan Protokol dan Port

**Tujuan:** Mengizinkan akses FTP dari host 192.168.10.1 dan HTTP dari host 192.168.10.2 ke host 20.20.20.1.

```bash
access-list 101 permit tcp host 192.168.10.1 host 20.20.20.1 eq ftp
access-list 101 permit tcp host 192.168.10.2 host 20.20.20.1 eq www
access-list 101 deny ip any any
interface FastEthernet0/0
ip access-group 101 in
```

### ▪ Named ACL: Izin Akses untuk Host Tertentu

**Tujuan:** Mengizinkan hanya host 192.168.10.7 untuk mengakses jaringan.

```bash
ip access-list standard ALLOW_HOST
 permit host 192.168.10.7
interface FastEthernet0/1
ip access-group ALLOW_HOST in
```

## 🔍 Verifikasi dan Monitoring ACL

Gunakan perintah berikut untuk memverifikasi dan memonitor ACL:

```bash
show access-lists
show ip access-lists
show ip access-lists interface <interface>
show ip interface <interface>
```

Perintah-perintah ini membantu memastikan ACL berfungsi sesuai yang diinginkan dan membantu troubleshooting.