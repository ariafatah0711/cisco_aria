## 🧠 Pengenalan VoIP

Voice over IP (VoIP) adalah teknologi yang memungkinkan transmisi suara melalui jaringan IP, menggantikan sistem telepon tradisional dengan memanfaatkan infrastruktur jaringan data.

---

## 💪 Konfigurasi VoIP

### 1. Konfigurasi DHCP untuk IP Phone

Router dapat berfungsi sebagai DHCP server untuk memberikan alamat IP kepada perangkat IP Phone.

```bash
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10
Router(config)# ip dhcp pool VOICE
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# option 150 ip 192.168.1.1
Router(dhcp-config)# exit
```

**Penjelasan:**

* `ip dhcp excluded-address`: Menghindari pemberian alamat IP tertentu kepada klien.
* `option 150`: Menentukan alamat IP TFTP server yang digunakan oleh IP Phone untuk mengunduh konfigurasi.

---

### 2. Konfigurasi Telephony Service

Mengaktifkan layanan telephony pada router untuk mendukung IP Phone.

```bash
Router(config)# telephony-service
Router(config-telephony)# max-ephones 5
Router(config-telephony)# max-dn 5
Router(config-telephony)# ip source-address 192.168.1.1 port 2000
Router(config-telephony)# auto assign 1 to 5
Router(config-telephony)# exit
```

**Penjelasan:**

* `max-ephones`: Jumlah maksimum perangkat IP Phone yang didukung.
* `max-dn`: Jumlah maksimum directory numbers (DN) atau ekstensi.
* `ip source-address`: Alamat IP dan port yang digunakan untuk komunikasi SCCP.

---

### 3. Konfigurasi VLAN Voice pada Switch

Memisahkan lalu lintas suara dari data untuk kualitas layanan yang lebih baik.

```bash
Switch(config)# vlan 10
Switch(config-vlan)# name VOICE
Switch(config-vlan)# exit
Switch(config)# interface range fa0/1 - 24
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# switchport voice vlan 10
Switch(config-if-range)# spanning-tree portfast
Switch(config-if-range)# exit
```

**Penjelasan:**

* `switchport voice vlan`: Menentukan VLAN khusus untuk lalu lintas suara.
* `spanning-tree portfast`: Mempercepat proses port menjadi aktif, penting untuk perangkat seperti IP Phone.

---

### 4. Konfigurasi ephone dan ephone-dn

Mendaftarkan perangkat IP Phone dan nomor ekstensi pada router.

```bash
Router(config)# ephone-dn 1
Router(config-ephone-dn)# number 1001
Router(config-ephone-dn)# exit

Router(config)# ephone 1
Router(config-ephone)# mac-address 0011.2233.4455
Router(config-ephone)# type 7960
Router(config-ephone)# button 1:1
Router(config-ephone)# exit
```

**Penjelasan:**

* `ephone-dn`: Mendefinisikan nomor ekstensi.
* `ephone`: Mendefinisikan perangkat IP Phone berdasarkan MAC address.
* `button`: Mengaitkan tombol pada IP Phone dengan ekstensi tertentu.

---

### 5. Konfigurasi Dial-Peer Antar-Router

Mengatur rute panggilan antar-router untuk komunikasi antar-cabang.

Contoh pada Router R1:

```bash
Router(config)# dial-peer voice 100 voip
Router(config-dial-peer)# destination-pattern 2...
Router(config-dial-peer)# session target ipv4:192.168.2.1
Router(config-dial-peer)# codec g711ulaw
Router(config-dial-peer)# no shutdown
Router(config-dial-peer)# exit
```

**Penjelasan:**

* `destination-pattern`: Pola nomor tujuan, misalnya 2xxx.
* `session target`: Alamat IP router tujuan untuk panggilan.
* `codec`: Menentukan codec yang digunakan untuk kompresi suara.

---

## 🔄 Contoh Topologi VoIP Antar-Router

Misalnya, terdapat tiga router: R1, R2, dan R3. IP Phone terhubung ke R1 dan R3. Untuk memungkinkan komunikasi antar-IP Phone:

* R1 mengarahkan panggilan ke R3 melalui R2 dengan konfigurasi dial-peer yang sesuai.
* Pastikan routing antar-router dikonfigurasi dengan benar (misalnya, menggunakan OSPF atau static routing).

---

## 📚 Sumber Referensi

* Cisco: Dial Peer Configuration Guide
* Cisco: Configure and Troubleshoot Cisco IOS Telephony Service
* Cisco: Using One DHCP Server for Voice and Data Networks