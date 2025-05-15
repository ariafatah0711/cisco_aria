## 🔍 Pengenalan Network Address Translation (NAT)

Network Address Translation (NAT) adalah metode yang digunakan oleh router atau firewall untuk mengubah alamat IP pada paket data saat melewati perangkat jaringan. Dengan NAT, perangkat di jaringan privat (yang menggunakan alamat IP privat) dapat berkomunikasi dengan jaringan publik (internet) melalui satu atau beberapa alamat IP publik.

**Kategori Interface NAT**

* **Inside**: Interface yang terhubung ke jaringan lokal (privat).
* **Outside**: Interface yang terhubung ke jaringan publik (internet).

---

## 🔁 Jenis-Jenis NAT

### 1. Static NAT

**Deskripsi**: Pemetaan satu-ke-satu yang permanen antara alamat IP privat dan alamat IP publik. Cocok untuk server yang harus diakses dari internet (misal: web server, email server).

**Konfigurasi**:

```bash
ip nat inside source static <ip_private> <ip_public>

interface <interface_inside>
 ip nat inside

interface <interface_outside>
 ip nat outside
```

**Contoh**:

```bash
ip nat inside source static 192.168.10.2 203.0.113.2

interface FastEthernet0/0
 ip address 192.168.10.1 255.255.255.0
 ip nat inside

interface Serial0/0
 ip address 203.0.113.1 255.255.255.0
 ip nat outside
```

---

### 2. Dynamic NAT

**Deskripsi**: Menggunakan pool alamat IP publik. Alamat privat dipetakan ke alamat publik saat sesi aktif, kemudian dilepaskan setelah sesi selesai.

**Konfigurasi**:

```bash
ip nat pool <nama_pool> <ip_awal> <ip_akhir> netmask <subnet_mask>
access-list <nomor_acl> permit <network_priv> <wildcard_mask>
ip nat inside source list <nomor_acl> pool <nama_pool>

interface <interface_inside>
 ip nat inside

interface <interface_outside>
 ip nat outside
```

**Contoh**:

```bash
ip nat pool NAT_POOL 203.0.113.10 203.0.113.20 netmask 255.255.255.0
access-list 1 permit 192.168.10.0 0.0.0.255
ip nat inside source list 1 pool NAT_POOL

interface FastEthernet0/0
 ip address 192.168.10.1 255.255.255.0
 ip nat inside

interface Serial0/0
 ip address 203.0.113.1 255.255.255.0
 ip nat outside
```

---

### 3. PAT (Port Address Translation) / NAT Overload

**Deskripsi**: Banyak alamat IP privat diterjemahkan ke satu alamat IP publik dengan pembeda berdasarkan nomor port. Umum digunakan untuk koneksi rumah atau kantor kecil.

**Konfigurasi**:

```bash
access-list <nomor_acl> permit <network_priv> <wildcard_mask>
ip nat inside source list <nomor_acl> interface <interface_outside> overload

interface <interface_inside>
 ip nat inside

interface <interface_outside>
 ip nat outside
```

**Contoh**:

```bash
access-list 1 permit 192.168.10.0 0.0.0.255
ip nat inside source list 1 interface Serial0/0 overload

interface FastEthernet0/0
 ip address 192.168.10.1 255.255.255.0
 ip nat inside

interface Serial0/0
 ip address 203.0.113.1 255.255.255.0
 ip nat outside
```

---

## 🛡️ Penggunaan ACL untuk NAT

Access Control List (ACL) menentukan trafik mana yang akan dikenai NAT, memberikan kontrol granular.

**Contoh**:

```bash
access-list 1 permit 192.168.10.0 0.0.0.255
ip nat inside source list 1 interface Serial0/0 overload
```

Hanya trafik dari jaringan 192.168.10.0/24 yang diterjemahkan.

---

## 🧭 Penggunaan `ip route` dalam NAT

Perintah `ip route` menambahkan rute statis ke tabel routing. Dalam NAT, memastikan trafik privat menuju internet melalui gateway yang benar.

**Format**:

```bash
ip route <DESTINATION_NETWORK> <SUBNET_MASK> <NEXT_HOP_IP_ADDRESS>
```

Untuk default route (semua lalu lintas) ke internet:

```bash
ip route 0.0.0.0 0.0.0.0 <NEXT_HOP_IP_ADDRESS>
```

**Contoh Gabungan Konfigurasi**:

```bash
! Rute default ke internet via gateway 203.0.113.1
ip route 0.0.0.0 0.0.0.0 203.0.113.1

! Static NAT mapping
ip nat inside source static 192.168.10.2 203.0.113.2

! Interface NAT
interface FastEthernet0/0
 ip address 192.168.10.1 255.255.255.0
 ip nat inside

interface Serial0/0
 ip address 203.0.113.1 255.255.255.0
 ip nat outside
```

---

## 🔍 Verifikasi Konfigurasi NAT & Routing

Setelah konfigurasi, verifikasi dengan:

* `show ip nat translations`
  Menampilkan tabel NAT aktif (alamat IP & port).

* `show ip nat statistics`
  Menampilkan statistik NAT (jumlah translasi & paket).

* `show ip route`
  Menampilkan tabel routing, termasuk default route.

---