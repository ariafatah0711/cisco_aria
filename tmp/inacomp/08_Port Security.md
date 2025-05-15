## 🔐 Port Security pada Switch Cisco

### ✅ Ringkasan Poin Penting

#### 🔐 Apa itu Port Security?

Fitur keamanan pada switch Cisco yang:

* Membatasi jumlah dan jenis perangkat berdasarkan MAC Address.
* Mencegah akses ilegal dengan memblokir atau mematikan port jika terjadi pelanggaran.

### 🧩 Metode Pembelajaran MAC Address

| Jenis   | Penjelasan                                          | Persistensi             | Cocok untuk                        |
| ------- | --------------------------------------------------- | ----------------------- | ---------------------------------- |
| Static  | Ditetapkan manual oleh admin.                       | Permanen                | Perangkat tetap (printer, server). |
| Dynamic | Dipelajari otomatis dari perangkat pertama.         | Sementara               | Lingkungan dinamis.                |
| Sticky  | Dipelajari otomatis dan disimpan di running-config. | Persisten jika disimpan | Kombinasi fleksibel & permanen.    |

### 🚨 Mode Pelanggaran

| Mode     | Aksi                     | Log/Notifikasi | Port Aktif |
| -------- | ------------------------ | -------------- | ---------- |
| Protect  | Drop paket tidak dikenal | ❌ Tidak        | ✅ Ya       |
| Restrict | Drop + catat pelanggaran | ✅ Ya           | ✅ Ya       |
| Shutdown | Port err-disabled        | ✅ Ya           | ❌ Tidak    |

> 🔸 Default mode: Shutdown

### 🛠️ Contoh Konfigurasi Port Security

#### 🔹 Fa0/1 – Sticky + Protect

```bash
interface FastEthernet0/1
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address sticky
 switchport port-security violation protect
```

#### 🔹 Fa0/2 – Static + Restrict

```bash
interface FastEthernet0/2
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address 0001.64ca.eb89
 switchport port-security violation restrict
```

#### 🔹 Fa0/3 – Sticky + Shutdown

```bash
interface FastEthernet0/3
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address sticky
 switchport port-security violation shutdown
```

### ⏳ Port Security Aging

Port security aging digunakan untuk mengatur kapan MAC address akan kedaluwarsa dari port tertentu. Ini berguna untuk lingkungan yang perangkatnya sering berganti.

#### 🔧 Mode Aging

| Tipe       | Penjelasan                                                   |
| ---------- | ------------------------------------------------------------ |
| Absolute   | Hapus MAC setelah waktu tertentu, apapun yang terjadi.       |
| Inactivity | Hapus MAC hanya jika tidak ada trafik selama waktu tertentu. |

#### 🔹 Contoh Konfigurasi Aging

```bash
interface FastEthernet0/4
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address sticky
 switchport port-security aging time 5
 switchport port-security aging type inactivity
```

🎯 Di atas: Sticky MAC akan dihapus setelah 5 menit tidak aktif.

### 🔍 Perintah Verifikasi & Recovery

| Perintah                                    | Fungsi                                                     |
| ------------------------------------------- | ---------------------------------------------------------- |
| show mac address-table secure               | Menampilkan MAC yang dianggap "secure"                     |
| show port-security                          | Ringkasan status semua port                                |
| show port-security interface Fa0/x          | Detail port tertentu                                       |
| show mac address-table                      | Lihat MAC address yang terdeteksi                          |
| show errdisable recovery                    | Melihat pengaturan auto-recovery untuk err-disabled        |
| errdisable recovery cause psecure-violation | Aktifkan recovery otomatis untuk pelanggaran port-security |
| errdisable recovery interval <detik>        | Set waktu tunggu recovery otomatis                         |

### 💡 Tips Praktis

* Simpan konfigurasi:

```bash
write memory
```

* Aktifkan kembali port yang err-disabled:

```bash
interface Fa0/x
 shutdown
 no shutdown
```

* Jika port digunakan untuk IP Phone + PC, set maximum 2.