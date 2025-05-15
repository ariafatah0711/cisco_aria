## 🧠 Pengantar DHCP

DHCP adalah protokol jaringan yang memungkinkan server untuk secara otomatis mendistribusikan informasi konfigurasi jaringan kepada perangkat klien, seperti alamat IP, subnet mask, default gateway, dan DNS server.

---

## 🔧 Port yang Digunakan

* **UDP port 67**: Digunakan oleh server DHCP.
* **UDP port 68**: Digunakan oleh klien DHCP.

---

## 🔄 Proses DORA (Discover, Offer, Request, Acknowledge)

Proses DORA adalah tahapan komunikasi antara klien dan server DHCP:

1. **Discover**: Klien mengirimkan pesan `DHCPDISCOVER` untuk mencari server DHCP yang tersedia.
2. **Offer**: Server DHCP merespons dengan `DHCPOFFER`, menawarkan konfigurasi jaringan kepada klien.
3. **Request**: Klien mengirimkan `DHCPREQUEST` untuk menerima tawaran dari server tertentu.
4. **Acknowledge**: Server mengirimkan `DHCPACK`, mengonfirmasi alokasi alamat IP dan konfigurasi lainnya kepada klien.

---

## ⚙️ Konfigurasi DHCP pada Router Cisco

### 1. Mengonfigurasi Antarmuka

```bash
Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown
```

### 2. Mengecualikan Alamat IP Tertentu

```bash
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10
```

Perintah ini mencegah DHCP memberikan alamat IP dari `192.168.1.1` hingga `192.168.1.10` kepada klien.

### 3. Membuat DHCP Pool

```bash
Router(config)# ip dhcp pool NAMA_POOL
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8
```

* `network`: Menentukan jaringan dan subnet mask.
* `default-router`: Menentukan gateway default untuk klien.
* `dns-server`: Menentukan server DNS yang akan digunakan oleh klien.

### 4. Mengonfigurasi Klien (PC)

Atur pengaturan IP pada PC ke mode otomatis (DHCP).

Setelah konfigurasi berhasil, PC akan menerima:

* **IP Address**: 192.168.1.11 (misalnya)
* **Subnet Mask**: 255.255.255.0
* **Default Gateway**: 192.168.1.1
* **DNS Server**: 8.8.8.8

---

## 🧩 Konfigurasi DHCP Option pada Cisco Router

DHCP Options digunakan untuk memberikan informasi tambahan kepada klien, seperti alamat server TFTP, NTP, atau informasi vendor-specific.

### 📞 DHCP Option untuk IP Phone

* **Option 66**: Menentukan alamat IP atau hostname dari server TFTP tunggal.

```bash
Router(dhcp-config)# option 66 ascii "tftp.example.com"
```

* **Option 150**: Cisco proprietary; digunakan untuk menentukan satu atau dua alamat IP server TFTP.

```bash
Router(dhcp-config)# option 150 ip 192.168.1.100 192.168.1.101
```

Option 150 sering digunakan dalam lingkungan Cisco untuk IP Phone, sedangkan Option 66 lebih umum dan digunakan oleh berbagai vendor.

### 📡 DHCP Option 43 untuk Lightweight Access Point (LAP)

Digunakan untuk memberikan informasi tentang Wireless LAN Controller (WLC) kepada LAP.

Contoh konfigurasi:

```bash
Router(dhcp-config)# option 43 hex f108c0a80a05c0a80a14
```

Penjelasan:

* `f1`: Sub-option code untuk Cisco AP.
* `08`: Panjang data (2 IP x 4 byte = 8 byte).
* `c0a80a05`: 192.168.10.5 dalam hexadecimal.
* `c0a80a14`: 192.168.10.20 dalam hexadecimal.

Konfigurasi ini memungkinkan LAP untuk menemukan dan terhubung ke WLC yang sesuai.

### ⏰ DHCP Option Lainnya

* **Option 3**: Default Gateway.
* **Option 6**: DNS Server.
* **Option 15**: Domain Name.
* **Option 42**: NTP Server.
* **Option 120**: SIP Server.

Contoh konfigurasi Option 42:

```bash
Router(dhcp-config)# option 42 ip 192.168.1.200
```

Option ini digunakan untuk menyinkronkan waktu pada perangkat klien menggunakan NTP server.

---

Dengan konfigurasi di atas, router Cisco Anda dapat berfungsi sebagai DHCP server yang tidak hanya memberikan alamat IP, tetapi juga informasi tambahan yang dibutuhkan oleh perangkat klien untuk beroperasi dengan optimal.