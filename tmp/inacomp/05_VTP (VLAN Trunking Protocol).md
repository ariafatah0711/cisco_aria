**Kanvas Teori VTP (VLAN Trunking Protocol)**

**🧩 Apa itu VTP?**
VTP adalah protokol Layer 2 milik Cisco yang digunakan untuk menyebarkan dan menyinkronkan informasi VLAN secara otomatis di seluruh jaringan switch dalam satu domain VTP. Tujuannya adalah untuk mempermudah manajemen VLAN dan mengurangi kesalahan konfigurasi manual.

**🔧 Dynamic Trunking Protocol (DTP)**
DTP adalah protokol Cisco yang secara otomatis menegosiasikan status trunk pada port switch. DTP bekerja bersama VTP untuk memastikan bahwa trunk terbentuk dengan benar, memungkinkan pertukaran informasi VLAN antar switch.

**🧭 Mode VTP**
VTP memiliki tiga mode operasi:

* **Server**: Mode default. Switch dapat membuat, mengubah, dan menghapus VLAN. Informasi VLAN disimpan di NVRAM dan disebarkan ke switch lain dalam domain VTP.
* **Client**: Tidak dapat membuat atau mengubah VLAN. Menerima dan menerapkan informasi VLAN dari server. Informasi VLAN disimpan di RAM dan hilang saat reboot.
* **Transparent**: Tidak menyebarkan atau menerima informasi VLAN dari domain VTP, tetapi meneruskan pesan VTP ke switch lain. VLAN dapat dibuat secara lokal dan disimpan di NVRAM.

**🌐 Domain VTP**
Domain VTP adalah kumpulan switch yang berbagi informasi VLAN. Semua switch dalam domain harus memiliki nama domain VTP yang sama agar dapat bertukar informasi VLAN.

**🔐 Password VTP**
Untuk keamanan, VTP dapat dikonfigurasi dengan password. Hanya switch dengan password yang cocok yang dapat bertukar informasi VLAN. Password ini dienkripsi menggunakan algoritma MD5.

**🔢 Versi VTP**
Terdapat tiga versi VTP:

* **Versi 1**: Versi awal, mendukung VLAN 1–1005.
* **Versi 2**: Menambahkan dukungan untuk Token Ring VLAN dan VLAN pruning.
* **Versi 3**: Mendukung VLAN 1–4094 (termasuk extended VLAN), dan fitur tambahan seperti distribusi konfigurasi MSTP dan dukungan untuk peran primary server.

**⚙️ Konfigurasi Cisco VTP**

1. **Konfigurasi VTP Server**

```bash
Switch(config)# vtp domain [nama_domain]
Switch(config)# vtp mode server
Switch(config)# vtp password [password]
Switch(config)# vtp version [1 | 2 | 3]
```

Keterangan:

* `[nama_domain]`: Nama domain VTP yang digunakan.
* `[password]`: Password untuk autentikasi VTP.
* `[1 | 2 | 3]`: Versi VTP yang digunakan.

2. **Konfigurasi VTP Client**

```bash
Switch(config)# vtp domain [nama_domain]
Switch(config)# vtp mode client
Switch(config)# vtp password [password]
```

Pastikan nama domain dan password sama dengan yang dikonfigurasi pada server.

3. **Konfigurasi VTP Transparent**

```bash
Switch(config)# vtp domain [nama_domain]
Switch(config)# vtp mode transparent
Switch(config)# vtp password [password]
```

Meskipun mode transparent tidak berpartisipasi dalam pertukaran informasi VLAN, tetap disarankan untuk menyamakan domain dan password untuk konsistensi.

4. **Konfigurasi Trunk Port**

```bash
Switch(config)# interface [interface_id]
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk encapsulation dot1q
```

* `[interface_id]`: Identifikasi interface yang digunakan (misalnya, GigabitEthernet0/1).

5. **Verifikasi Konfigurasi VTP**

```bash
Switch# show vtp status
```

Perintah ini akan menampilkan informasi seperti:

* Nama domain VTP
* Mode VTP
* Versi VTP
* Nomor revisi konfigurasi
* Jumlah VLAN yang diketahui

**🛡️ Tips Keamanan dan Best Practice**

* **Reset Nomor Revisi**: Sebelum menambahkan switch baru ke jaringan, reset nomor revisi VTP untuk mencegah penyebaran konfigurasi VLAN yang tidak diinginkan.
* **Gunakan Password**: Selalu konfigurasi password VTP untuk mencegah akses tidak sah dan potensi serangan.
* **Simpan Konfigurasi**: Setelah konfigurasi selesai, simpan konfigurasi dengan perintah `write memory` atau `copy running-config startup-config`.

**🧪 Contoh Implementasi**
Misalkan kita memiliki tiga switch: Switch1 (Server), Switch2 (Client), dan Switch3 (Transparent).

**Switch1 (Server)**

```bash
Switch1(config)# vtp domain JaringanKampus
Switch1(config)# vtp mode server
Switch1(config)# vtp password Cisco123
Switch1(config)# vtp version 2
Switch1(config)# vlan 10
Switch1(config-vlan)# name Administrasi
Switch1(config)# vlan 20
Switch1(config-vlan)# name Akademik
```

**Switch2 (Client)**

```bash
Switch2(config)# vtp domain JaringanKampus
Switch2(config)# vtp mode client
Switch2(config)# vtp password Cisco123
```

**Switch3 (Transparent)**

```bash
Switch3(config)# vtp domain JaringanKampus
Switch3(config)# vtp mode transparent
Switch3(config)# vtp password Cisco123
Switch3(config)# vlan 30
Switch3(config-vlan)# name Keuangan
```

Dengan konfigurasi di atas, VLAN 10 dan 20 akan disebarkan dari Switch1 ke Switch2. Switch3 tidak akan menerima atau menyebarkan informasi VLAN dari domain VTP, tetapi dapat memiliki VLAN lokal sendiri.