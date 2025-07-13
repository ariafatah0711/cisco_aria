# Cisco ASA (Adaptive Security Appliance) Configuration Guide

## Tujuan

Dokumen ini menjelaskan cara konfigurasi dasar Cisco ASA yang mencakup:

* Pengenalan antarmuka dan NAT (PAT)
* Penggunaan objek jaringan
* Penerapan MPF (Modular Policy Framework) untuk mengizinkan inspeksi ICMP

---

## Step 1: Akses Awal ke ASA

Setelah terhubung ke ASA:

```bash
en
<tekan Enter> # tanpa pass
configure terminal
```

Perintah awal untuk memeriksa sistem:

```bash
show version
show file system
show disk0
show flash
show run
```

Konfigurasi dasar:

```bash
hostname CCNAS-ASA
 domain-name ccnasecurity.com
 enable password ciscoenpa55
 clock set HH:MM:SS MONTH DAY YEAR
```

> Contoh:

```bash
clock set 10:30:00 Jul 13 2025
```

---

## Step 2: Konfigurasi Interface VLAN (Inside dan Outside)

```bash
interface vlan 1
 nameif inside
 ip address 192.168.1.1 255.255.255.0
 security-level 100

interface vlan 2
 nameif outside
 ip address 209.165.200.226 255.255.255.248
 security-level 0
```

Verifikasi:

```bash
show ip interface brief
show ip address
show switch vlan
```

---

## Step 3: Konfigurasi NAT (PAT) Menggunakan Objek Jaringan

### a. Membuat objek jaringan dan menerapkan NAT dinamis

```bash
object network inside-net
 subnet 192.168.1.0 255.255.255.0
 nat (inside,outside) dynamic interface
```

> Penjelasan:

* `object network inside-net`: Membuat objek jaringan untuk subnet internal.
* `nat (inside,outside) dynamic interface`: Menerapkan PAT menggunakan IP interface outside (masquerade).

Lihat hasilnya dengan:

```bash
show run object
show run nat
```

### b. Uji NAT dari PC-B

* Ping dari PC-B ke IP luar, misalnya:

```bash
ping 209.165.200.225
```

* Akan **gagal**, karena hanya request ICMP (echo) yang keluar, reply-nya diblokir oleh firewall.

Lihat hasil NAT:

```bash
show nat
```

> Penjelasan: ASA menterjemahkan outgoing echo, tetapi reply-nya diblok karena belum ada rule inspeksi ICMP.

---

## Step 4: Konfigurasi MPF (Modular Policy Framework) untuk ICMP

Untuk memperbolehkan lalu lintas return ICMP (echo-reply), kita perlu menambahkan aturan inspeksi ke dalam global policy.

### a. Buat class-map dan policy-map untuk inspeksi ICMP

```bash
class-map inspection_default
 match default-inspection-traffic
exit

policy-map global_policy
 class inspection_default
  inspect icmp
exit

service-policy global_policy global
```

> Penjelasan:

* `class-map inspection_default`: Menentukan class traffic yang akan diinspeksi.
* `policy-map global_policy`: Menetapkan tindakan terhadap traffic tersebut.
* `inspect icmp`: Mengizinkan reply ICMP jika sebelumnya ada echo dari dalam.
* `service-policy global_policy global`: Terapkan policy secara global.

### b. Uji Kembali

* Ping ulang dari PC-B ke 209.165.200.225

```bash
ping 209.165.200.225
```

* Sekarang **berhasil**, karena ASA membolehkan reply ICMP melalui inspeksi.

---

## Verifikasi Akhir

```bash
show service-policy
show policy-map global_policy
show run policy-map
show run class-map
```

---

## Ringkasan

* **Interface** dikonfigurasi dengan `nameif`, `ip address`, dan `security-level`.
* **NAT** diterapkan dengan object network + PAT dinamis.
* **MPF** digunakan untuk mengizinkan trafik ICMP kembali dari luar.

Konfigurasi ini penting untuk:

* Menghubungkan jaringan internal ke internet via PAT
* Mengelola akses keluar dan kembali dengan lebih aman melalui inspeksi stateful

---

## Tips Tambahan

* Simpan konfigurasi:

```bash
write memory
```

* Cek log/inspeksi:

```bash
show conn
show access-list
show xlate
```

Selesai! Konfigurasi dasar ASA sekarang siap digunakan untuk pengujian NAT dan firewall ICMP.

--- 

## Konfigurasi DHCP, AAA, dan SSH pada Cisco ASA

Dokumen ini menjelaskan langkah-langkah konfigurasi fitur DHCP Server, otentikasi AAA, dan akses remote SSH pada perangkat Cisco ASA menggunakan bahasa Indonesia yang mudah dipahami.

---

### **Bagian 1: Konfigurasi ASA sebagai DHCP Server**

#### **Langkah 1a: Atur Rentang Alamat IP untuk DHCP**

Perintah berikut digunakan untuk menentukan alamat IP yang akan diberikan ke klien oleh ASA:

```bash
CCNAS-ASA(config)# dhcpd address 192.168.1.5-192.168.1.36 inside
```

#### **Langkah 1b: Atur Alamat DNS (Opsional)**

Alamat DNS juga bisa diberikan ke klien menggunakan perintah ini:

```bash
CCNAS-ASA(config)# dhcpd dns 209.165.201.2 interface inside
```

#### **Langkah 1c: Aktifkan DHCP Daemon di Interface Inside**

Agar ASA merespons permintaan DHCP dari klien:

```bash
CCNAS-ASA(config)# dhcpd enable inside
```

#### **Langkah 1d: Uji Konfigurasi DHCP**

1. Ubah konfigurasi IP PC-B dari static menjadi DHCP.
2. Periksa apakah PC-B mendapatkan IP dari rentang yang telah dikonfigurasi.
3. Gunakan perintah `ipconfig` (di PC) untuk memverifikasi alamat IP.

---

### **Bagian 2: Konfigurasi AAA (Authentication, Authorization, Accounting)**

#### **Langkah 2a: Tambah User Lokal**

Buat user lokal bernama `admin` dengan password `adminpa55`:

```bash
CCNAS-ASA(config)# username admin password adminpa55
```

#### **Langkah 2b: Gunakan Database Lokal untuk SSH**

Konfigurasikan agar otentikasi SSH menggunakan user lokal di ASA:

```bash
CCNAS-ASA(config)# aaa authentication ssh console LOCAL
```

---

### **Bagian 3: Konfigurasi Akses SSH ke ASA**

#### **Langkah 3a: Generate RSA Key (jika belum ada)**

RSA key diperlukan agar SSH bisa berjalan. Jalankan perintah berikut:

```bash
CCNAS-ASA(config)# crypto key generate rsa modulus 1024
```

Jika muncul peringatan:

```
WARNING: You have a RSA keypair already defined named <Default-RSA-Key>
Do you really want to replace them? [yes/no]: no
```

Jawab `no` jika sudah ada key sebelumnya.

#### **Langkah 3b: Ijinkan Akses SSH**

1. Dari jaringan dalam (inside):

```bash
CCNAS-ASA(config)# ssh 192.168.1.0 255.255.255.0 inside
```

2. Dari host manajemen di luar (outside):

```bash
CCNAS-ASA(config)# ssh 172.16.3.3 255.255.255.255 outside
```

3. Atur waktu timeout sesi SSH menjadi 10 menit:

```bash
CCNAS-ASA(config)# ssh timeout 10
```

#### **Langkah 3c: Uji Koneksi SSH dari PC-C (Jaringan Outside)**

Masukkan perintah di terminal PC-C:

```bash
PC> ssh -l admin 209.165.200.226
```

Masukkan password: `adminpa55`

#### **Langkah 3d: Uji Koneksi SSH dari PC-B (Jaringan Inside)**

Masukkan perintah di terminal PC-B:

```bash
PC> ssh -l admin 192.168.1.1
```

Masukkan password: `adminpa55`

---

### **Tips Troubleshooting**

* Pastikan firewall atau ACL tidak memblokir koneksi SSH.
* Pastikan IP PC sudah sesuai subnet dan gateway.
* Gunakan `show dhcpd binding` untuk melihat klien DHCP yang aktif.
* Gunakan `show ssh sessions` di ASA untuk memantau sesi SSH.

---

Dokumen ini selesai. Semoga membantu dalam konfigurasi dasar Cisco ASA!

---

## Part 5: Konfigurasi DMZ, Static NAT, dan ACL pada ASA Firewall

### **Langkah 1: Konfigurasi Interface DMZ VLAN 3 di ASA**

#### a. Konfigurasi interface VLAN 3 sebagai DMZ:

```
CCNAS-ASA(config)# interface vlan 3
CCNAS-ASA(config-if)# ip address 192.168.2.1 255.255.255.0
CCNAS-ASA(config-if)# no forward interface vlan 1
CCNAS-ASA(config-if)# nameif dmz
CCNAS-ASA(config-if)# security-level 70
```

**Penjelasan:**

* `interface vlan 3`: Membuat interface virtual VLAN 3.
* `ip address 192.168.2.1 255.255.255.0`: Memberikan IP untuk interface VLAN 3.
* `no forward interface vlan 1`: Menonaktifkan komunikasi langsung dari VLAN 3 ke VLAN 1 (inside).
* `nameif dmz`: Memberi nama interface "dmz".
* `security-level 70`: Menetapkan tingkat keamanan 70 (lebih rendah dari inside \[100], lebih tinggi dari outside \[0]).

#### b. Menghubungkan interface fisik ke VLAN 3:

```
CCNAS-ASA(config)# interface Ethernet0/2
CCNAS-ASA(config-if)# switchport access vlan 3
```

**Penjelasan:**

* `interface Ethernet0/2`: Memilih port fisik yang akan digunakan untuk DMZ.
* `switchport access vlan 3`: Menetapkan port E0/2 ke VLAN 3.

### **Langkah Verifikasi:**

```
CCNAS-ASA# show interface ip brief
CCNAS-ASA# show ip address
CCNAS-ASA# show switch vlan
```

**Penjelasan:**

* `show interface ip brief`: Menampilkan status semua interface dan alamat IP-nya.
* `show ip address`: Menampilkan alamat IP dari semua interface Layer 3.
* `show switch vlan`: Menampilkan VLAN dan port yang terkait.

---

### **Langkah 2: Konfigurasi Static NAT ke Server di DMZ**

```
CCNAS-ASA(config)# object network dmz-server
CCNAS-ASA(config-network-object)# host 192.168.2.3
CCNAS-ASA(config-network-object)# nat (dmz,outside) static 209.165.200.227
CCNAS-ASA(config-network-object)# exit
```

**Penjelasan:**

* `object network dmz-server`: Membuat objek jaringan bernama dmz-server.
* `host 192.168.2.3`: Menetapkan alamat internal server di DMZ.
* `nat (dmz,outside) static 209.165.200.227`: Melakukan NAT statik dari alamat internal (192.168.2.3) ke alamat publik (209.165.200.227) jika akses berasal dari luar.

---

### **Langkah 3: Konfigurasi ACL untuk Akses dari Internet ke Server di DMZ**

```
CCNAS-ASA(config)# access-list OUTSIDE-DMZ permit icmp any host 192.168.2.3
CCNAS-ASA(config)# access-list OUTSIDE-DMZ permit tcp any host 192.168.2.3 eq 80
CCNAS-ASA(config)# access-group OUTSIDE-DMZ in interface outside
```

**Penjelasan:**

* `access-list OUTSIDE-DMZ permit icmp any host 192.168.2.3`: Mengizinkan ping (ICMP) ke server.
* `access-list OUTSIDE-DMZ permit tcp any host 192.168.2.3 eq 80`: Mengizinkan akses HTTP (port 80) ke server dari internet.
* `access-group OUTSIDE-DMZ in interface outside`: Menerapkan ACL ke arah inbound di interface outside.

**Catatan:** Di ASA, ACL ditulis berdasarkan alamat *private internal*, bukan IP publik, karena NAT terjadi terlebih dahulu.

---

### **Langkah 4: Uji Akses ke Server DMZ**

Pada Packet Tracer versi tertentu, pengujian akses dari luar ke server DMZ mungkin tidak berfungsi karena keterbatasan simulasi. Oleh karena itu, pengujian tidak wajib.

---

### **Langkah 5: Cek Hasil**

Klik **Check Results** di Packet Tracer untuk melihat persentase penyelesaian. Jika semua konfigurasi benar, maka persentase akan menunjukkan **100%**.

---

### **Ringkasan Tujuan Konfigurasi Ini**

* Membuat zona DMZ terpisah di firewall.
* Menghubungkan server DMZ ke internet secara terbatas dan aman.
* Melindungi jaringan internal (inside) dari akses langsung.
* Menggunakan NAT statik agar server DMZ dapat diakses menggunakan IP publik.
* Mengatur ACL agar hanya layanan tertentu (HTTP, ICMP) yang bisa diakses dari luar.
