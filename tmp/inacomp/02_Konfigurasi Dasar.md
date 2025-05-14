## 🛠️ Kanvas Konfigurasi Dasar Cisco IOS

### 🔹 1. Identitas Perangkat

```bash
Router(config)# hostname R1
Router(config)# ip domain-name example.com
```

### 🔹 2. Pengaturan Interface & IP

```bash
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown
```

### 🔹 3. Rute Default

```bash
Router(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.254
```

### 🔹 4. Keamanan Akses

```bash
Router(config)# enable secret admin123
Router(config)# service password-encryption

Router(config)# line console 0
Router(config-line)# password cisco
Router(config-line)# login
Router(config-line)# exit

Router(config)# line vty 0 4
Router(config-line)# password cisco
Router(config-line)# login
Router(config-line)# exit
```

### 🔹 5. DNS & Waktu

```bash
Router(config)# ip name-server 8.8.8.8
Router(config)# clock timezone WIB 7
Router# clock set 21:37:00 May 14 2025
```

### 🔹 6. Banner Login

```bash
Router(config)# banner motd #Unauthorized access is prohibited.#
```

### 🔹 7. Menyimpan Konfigurasi

```bash
Router# copy running-config startup-config
```

---

## 🔍 Tips Praktis CLI Cisco

### 🔸 Filter Output dengan Pipe (`|`)

Gunakan pipe untuk memfilter output dari perintah `show`:

**Menampilkan bagian tertentu:**

```bash
Router# show running-config | section interface
```

**Mencari baris spesifik:**

```bash
Router# show running-config | include GigabitEthernet
```

**Mengecualikan baris tertentu:**

```bash
Router# show running-config | exclude shutdown
```

### 🔸 Eksekusi Perintah dari Mode Konfigurasi

Gunakan `do` untuk menjalankan perintah dari mode konfigurasi:

```bash
Router(config)# do show ip interface brief
```

### 🔸 Menampilkan Konfigurasi Startup

```bash
Router# show startup-config
```