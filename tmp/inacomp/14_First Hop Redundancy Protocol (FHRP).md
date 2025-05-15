## 1. HSRP (Hot Standby Router Protocol)

### Skenario

Dalam jaringan LAN dengan dua router Cisco, R1 dan R2, kita ingin memastikan ketersediaan gateway default untuk host.

### Konfigurasi

**Pada Router R1:**

```bash
interface FastEthernet0/1
  ip address 192.168.10.2 255.255.255.0
  standby 10 ip 192.168.10.1
  standby 10 priority 110
  standby 10 preempt
  standby 10 track FastEthernet0/0 50
```

**Pada Router R2:**

```bash
interface FastEthernet0/1
  ip address 192.168.10.3 255.255.255.0
  standby 10 ip 192.168.10.1
  standby 10 priority 100
  standby 10 preempt
```

### Penjelasan

* **Virtual IP:** 192.168.10.1 digunakan sebagai gateway default oleh host.
* **Prioritas:** R1 memiliki prioritas lebih tinggi (110) dibanding R2 (100), sehingga R1 menjadi router aktif.
* **Preempt:** Memungkinkan R1 mengambil kembali peran aktif jika sebelumnya sempat down.
* **Tracking:** Jika FastEthernet0/0 R1 down, prioritasnya dikurangi 50, memungkinkan R2 mengambil alih.

### Verifikasi

```bash
show standby brief
show track
```

---

## 2. VRRP (Virtual Router Redundancy Protocol)

### Skenario

Dalam jaringan dengan dua router (bisa dari vendor berbeda), kita ingin menyediakan redundansi gateway default menggunakan protokol standar terbuka.

### Konfigurasi

**Pada Router R1:**

```bash
interface FastEthernet0/0
  ip address 192.168.1.2 255.255.255.0
  vrrp 1 ip 192.168.1.1
  vrrp 1 priority 120
  vrrp 1 preempt
  vrrp 1 track 1 decrement 50

track 1 interface FastEthernet0/1 line-protocol
```

**Pada Router R2:**

```bash
interface FastEthernet0/0
  ip address 192.168.1.3 255.255.255.0
  vrrp 1 ip 192.168.1.1
  vrrp 1 priority 100
  vrrp 1 preempt
```

### Penjelasan

* **Virtual IP:** 192.168.1.1 digunakan sebagai gateway default oleh host.
* **Prioritas:** R1 memiliki prioritas lebih tinggi (120) dibanding R2 (100).
* **Preempt:** Memungkinkan R1 merebut kembali peran master saat pulih.
* **Tracking:** Jika FastEthernet0/1 R1 down, prioritas turun 50, memungkinkan R2 mengambil alih.

### Verifikasi

```bash
show vrrp brief
show track
```

---

## 3. GLBP (Gateway Load Balancing Protocol)

### Skenario

Dalam jaringan dengan tiga router Cisco, kita ingin menyediakan redundansi gateway default sekaligus melakukan load balancing trafik keluar.

### Konfigurasi

**Pada Router R1:**

```bash
interface FastEthernet0/0
  ip address 10.0.1.2 255.255.255.0
  glbp 1 ip 10.0.1.1
  glbp 1 priority 120
  glbp 1 preempt
  glbp 1 load-balancing round-robin
  glbp 1 weighting 100 lower 70 upper 90
  glbp 1 weighting track 1 decrement 20

track 1 interface FastEthernet0/1 line-protocol
```

**Pada Router R2 dan R3:**
Konfigurasi serupa dengan penyesuaian IP dan prioritas sesuai kebutuhan.

### Penjelasan

* **Virtual IP:** 10.0.1.1 digunakan sebagai gateway default oleh host.
* **AVG (Active Virtual Gateway):** R1 mengelola distribusi trafik berdasarkan prioritas tertinggi.
* **AVF (Active Virtual Forwarder):** R1, R2, dan R3 masing-masing bertugas meneruskan paket.
* **Load Balancing:** Metode round-robin mendistribusikan trafik secara merata.
* **Weighting & Tracking:** Menentukan partisipasi router berdasarkan status interface dan nilai weighting.

### Verifikasi

```bash
show glbp brief
show track
```