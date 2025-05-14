# urutan
## akses console / akses ssh
```bash
## config
hostname R1
ip domain-name contoh.com

## console
line console 0
 password Konsol123
 login local

## for ssh (opsional)
crypto key generate rsa
ip ssh version 2

## ssh
line vty 0 4
 password Konsol123
 transport input ssh
 login local
```

## client
```sh
ssh -l admin 192.168.1.1
```

## enable secret / password
## 

<!-- # remote access
### 1. **Privilege Level**

**Teori:**
Cisco IOS memiliki 16 level hak akses (privilege level) dari 0 hingga 15:

* **Level 0**: Akses sangat terbatas, hanya beberapa perintah dasar seperti `logout`, `enable`, `disable`, `help`, dan `exit`.
* **Level 1**: User EXEC mode, akses terbatas untuk melihat status sistem.
* **Level 15**: Privileged EXEC mode, akses penuh untuk konfigurasi dan manajemen perangkat.

Privilege level memungkinkan administrator untuk mengontrol akses pengguna terhadap perintah-perintah tertentu. Contohnya:

* Administrator jaringan → Level 15 (akses penuh)
* Teknisi → Level 5 (akses terbatas)

**Konfigurasi:**

```cisco
! User dengan akses penuh
username admin privilege 15 secret AdminPass123

! User dengan akses terbatas
username teknisi privilege 5 secret TeknisiPass123
```

---

### 2. **Line Console**

**Teori:**
Line console digunakan untuk akses langsung ke perangkat melalui kabel konsol. Hanya tersedia satu line console yaitu 0.

**Konfigurasi:**

```cisco
line console 0
 password Konsol123
 login local
 logging synchronous
 exec-timeout 10 0
```

**Penjelasan:**

* `password Konsol123`: Menetapkan password untuk akses konsol.
* `login local`: Menggunakan akun lokal untuk autentikasi.
* `logging synchronous`: Mencegah output mengganggu saat mengetik perintah.
* `exec-timeout 10 0`: Timeout sesi setelah 10 menit tidak aktif.

---

### 3. **Line VTY (Virtual Teletype)**

**Teori:**
Digunakan untuk akses remote (Telnet/SSH). Jumlah line menentukan berapa banyak sesi remote yang bisa aktif bersamaan.

**Konfigurasi:**

```cisco
line vty 0 4
 password VTY123
 login local
 transport input ssh
 exec-timeout 5 0
```

**Penjelasan:**

* `line vty 0 4`: Mengatur 5 jalur akses remote.
* `password VTY123`: Menetapkan password untuk akses VTY.
* `login local`: Menggunakan akun pengguna lokal.
* `transport input ssh`: Hanya izinkan akses SSH (nonaktifkan Telnet).
* `exec-timeout 5 0`: Timeout sesi setelah 5 menit tidak aktif.

---

### 4. **Enkripsi Password**

**Teori:**
Untuk mencegah password tampil sebagai teks biasa dalam konfigurasi, gunakan enkripsi password.

**Konfigurasi:**

```cisco
service password-encryption
```

**Penjelasan:**
Perintah ini mengenkripsi seluruh password dalam file konfigurasi agar tidak terbaca langsung.

---

### 5. **Domain Name**

**Teori:**
Domain name diperlukan untuk pembuatan kunci kriptografi RSA saat mengaktifkan SSH.

**Konfigurasi:**

```cisco
ip domain-name contoh.com
```

**Penjelasan:**
Domain name digunakan sebagai bagian dari identitas perangkat saat membuat kunci SSH.

---

### 6. **Konfigurasi SSH**

**Teori:**
SSH menyediakan akses remote yang aman. Versi 2 lebih aman dibanding versi 1.

**Langkah-langkah:**

```cisco
hostname R1
ip domain-name contoh.com
crypto key generate rsa modulus 2048
ip ssh version 2
ip ssh time-out 60
ip ssh authentication-retries 3
```

**Penjelasan:**

* `crypto key generate rsa`: Membuat kunci RSA.
* `modulus 2048`: Ukuran kunci RSA (semakin besar, semakin aman).
* `ip ssh version 2`: Menggunakan SSH versi 2.
* `ip ssh time-out 60`: Timeout autentikasi selama 60 detik.
* `ip ssh authentication-retries 3`: Maksimal 3 kali percobaan login.

---

### 7. **Membatasi Akses SSH Berdasarkan Subnet**

**Teori:**
Untuk keamanan tambahan, akses SSH bisa dibatasi berdasarkan subnet tertentu.

**Konfigurasi:**

```cisco
access-list 10 permit 192.168.1.0 0.0.0.255
line vty 0 4
 access-class 10 in
```

**Penjelasan:**

* `access-list 10 permit`: Mengizinkan akses dari subnet tertentu.
* `access-class 10 in`: Menerapkan access list ke arah masuk di VTY line.

---

### 8. **Verifikasi Konfigurasi**

**Perintah Verifikasi:**

```cisco
show ip ssh                 ! Melihat status SSH
show users                  ! Pengguna yang sedang terhubung
show running-config | include username   ! Melihat konfigurasi user
show privilege              ! Melihat privilege level saat ini
``` -->