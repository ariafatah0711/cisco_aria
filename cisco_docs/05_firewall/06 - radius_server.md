# radius server
![alt text](<images/06 - radius_server/image.png>)

# Konfigurasi AAA dan RADIUS Server pada Cisco (Lengkap)

## 1. **Konsep Dasar AAA dan RADIUS**

* **AAA**: Authentication, Authorization, Accounting.
* **RADIUS**: Remote Authentication Dial-In User Service.
* AAA digunakan untuk mengamankan akses ke perangkat jaringan.
* RADIUS adalah salah satu protokol AAA yang umum digunakan.

## 2. **Langkah-langkah Konfigurasi AAA dan RADIUS pada Router Cisco**

### A. **Aktifkan AAA**

```bash
conf t
 aaa new-model
```

### B. **Konfigurasi Server RADIUS**

```bash
radius-server host <IP_SERVER> auth-port 1812 acct-port 1813 key <SECRET_KEY>
```

Contoh:

```bash
radius-server host 192.168.1.10 key cisco123
```

> Catatan:
>
> * Bisa menggunakan multiple RADIUS server untuk redundansi:

```bash
radius-server host 192.168.1.11 key cadangan123
```

### C. **Membuat AAA Method List**

```bash
aaa authentication login default group radius local
aaa authorization exec default group radius local
aaa accounting exec default start-stop group radius
aaa accounting commands 15 default start-stop group radius
```

### D. **Menerapkan AAA ke Line VTY (akses Telnet/SSH)**

```bash
line vty 0 4
 login authentication default
 authorization exec default
 accounting commands 15 default
 transport input ssh
```

### E. **Konfigurasi SSH (jika dibutuhkan)**

```bash
hostname R1
ip domain-name cisco.local
crypto key generate rsa
ip ssh version 2
username admin privilege 15 secret cisco123
```

## 3. **(Opsional) Konfigurasi Tambahan untuk Redundansi dan Timeout**

```bash
radius-server retransmit 3
radius-server timeout 5
radius-server key cisco123
```

## 4. **(Opsional) Konfigurasi Local Fallback jika RADIUS Gagal**

```bash
aaa authentication login default group radius local
```

> Jika server RADIUS tidak merespons, login akan menggunakan user lokal yang telah dikonfigurasi sebelumnya.

## 5. **(Opsional) Debugging dan Verifikasi**

```bash
debug radius
show aaa servers
show run | include radius
show aaa authentication
```

## 6. **Konfigurasi di Server RADIUS (Linux/Freeradius/Cisco ISE)**

> Tidak dilakukan di router, tetapi diperlukan:

* Tambahkan perangkat Cisco sebagai NAS client.
* Pastikan shared secret cocok.
* Konfigurasi user di `users` file (Freeradius) atau via GUI (ISE).

Contoh entri Freeradius:

```bash
ciscouser Cleartext-Password := "cisco123"
    Service-Type = NAS-Prompt-User,
    Cisco-AVPair = "shell:priv-lvl=15"
```

---

## Ringkasan

| Tahapan       | Perintah Penting               |
| ------------- | ------------------------------ |
| Aktifkan AAA  | `aaa new-model`                |
| Tambah RADIUS | `radius-server host <IP>`      |
| Auth Method   | `aaa authentication login`     |
| VTY           | `login authentication default` |
| Debug         | `debug radius`                 |

---

## Catatan Lanjutan

* RADIUS tidak mengenkripsi semua isi payload seperti TACACS+.
* Pastikan firewall tidak memblokir UDP port 1812 dan 1813.
* Untuk Cisco ISE, konfigurasi dilakukan di GUI.

---

Dokumen ini mencakup konfigurasi dasar hingga lanjutan untuk mengimplementasikan AAA dan RADIUS pada perangkat Cisco. Konfigurasi dapat disesuaikan dengan topologi dan kebijakan jaringan masing-masing.

---

## setup
### R1
```bash
hostname R1
ip domain-name r1.local
crypto key generate rsa
line vty 0 15
 transport in
 transport input ssh
 exit
int gig 0/0
 ip add 10.0.0.1 255.0.0.0
 no sh
```

### SW1
```bash
hostname SW1
ip domain-name sw1.local
crypto key generate rsa
line vty 0 15
 transport input ssh
 exit
int vlan 1
 ip add 10.0.0.4 255.0.0.0
 no sh

do ping 10.0.0.1
```

### PC
- ip: 10.0.0.3/8
- gate: 10.0.0.1
- dns: 10.0.0.2

### server
- ip: 10.0.0.2/8
- gate: 10.0.0.1

## configuration
### Radius
- service: on, port: 1645 (default)
- add client name, client ip, secret, server type
  - R1, 10.0.0.1, aria, Radius
  - SW1, 10.0.0.4, aria, Radius
- add user setup
  - admin - password
  - aria - 123

### SW1
```bash
aaa new-model
radius-server host 10.0.0.2 key aria
! radius-server host 10.0.0.2 auth-port 1000 key aria

aaa authentication login default group radius
aaa authentication enable default group radius
```

### R1
```bash
aaa new-model 
radius server MAIN
 address ipv4 10.0.0.2
 key aria
 ex
aaa authentication login default group radius
aaa authentication enable default group radius
```