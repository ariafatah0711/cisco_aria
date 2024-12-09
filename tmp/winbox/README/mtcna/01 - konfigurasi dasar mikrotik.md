<a href="../../README.md#back">Back README.md...</a>

# Konfigurasi Dasar MikroTik dengan Studi Kasus

## A. Pertama Kali Masuk ke Winbox
- Disarankan untuk menghindari penggunaan port 1, karena itu adalah konfigurasi default yang tidak dapat diubah. Penggunaan MAC address untuk koneksi pertama adalah pendekatan yang umum untuk menghindari masalah dengan IP address yang mungkin sudah digunakan.
- Saat masuk, sebaiknya klik opsi "Connect To" dengan MAC address perangkat yang dimaksudkan, bukan menggunakan IP address.
- Setelah masuk, ada kemungkinan akan ada konfigurasi default dari router. Jika demikian, konfigurasi ini dapat dihapus karena kita akan membuat konfigurasi baru.
- Setelah masuk, konfigurasi dasar dimulai dari awal, sehingga Anda dapat mulai mengatur ulang perangkat.
- Saat konfigurasi dimulai, sebaiknya menggunakan port 1, namun dianjurkan untuk tidak menggunakan port 1 karena biasanya port tersebut digunakan untuk menghubungkan perangkat ke jaringan.

## B. Konfigurasi MikroTik

1. **Mengubah Nama MikroTik**
   - Untuk mengganti nama MikroTik, buka menu "System" dan pilih "Identity." Kemudian ubah nama sesuai keinginan.

2. **Mengubah User dan Menambahkan Password**
   - Untuk meningkatkan keamanan, perlu mengubah pengaturan default. Pergi ke menu "System" dan pilih "Users." Tambahkan user baru, pilih level akses (read, write, atau full), dan tambahkan password yang kuat. Setelah itu, nonaktifkan user admin jika diperlukan.

3. **Konfigurasi Bridge untuk Keamanan**
   - Buat bridge baru untuk menghubungkan interface secara fisik. Ini membantu mempertahankan konektivitas jika salah satu interface rusak.

4. **Konfigurasi DHCP Client**
   - Di menu "IP," pilih "DHCP Client." Tambahkan DHCP client untuk mendapatkan IP dari provider. Verifikasi statusnya menjadi "Bound" yang menandakan pengambilan informasi DHCP berhasil.

5. **Verifikasi Koneksi dan Routing**
   - Verifikasi koneksi dengan memastikan interface DHCP terhubung ke IP default router (biasanya 10.10.10.1). Kemudian, periksa rute default dengan memastikan rute ke 10.10.10.1 ada.

6. **Mengubah DNS untuk Akses Internet**
   - Konfigurasi DNS di menu "IP" > "DNS." Ubah server ke IP DNS provider, seperti 10.10.10.1. Aktifkan juga opsi "Allow Remote Request" untuk mengaktifkan router sebagai server DNS.

7. **Mengaktifkan Akses Internet Penuh**
   - Setelah langkah-langkah di atas, Anda seharusnya sudah bisa mengakses internet dan melakukan browsing.

# membuat koneksi internet dengan menembak wifi
- tambahkan ip address pada ether 1-4 atau bisa gunakan bridge
- tambahkan security profil di wirelless > security profile. dan aktifkan wpa dan wpa2psk dengan kunci dynamix beserta password wifi kita
- jika sudah kita bisa pergi ke wirlkess lalu aktifkan wlan 1, dan ubah mode nya menjadi station untuk koensi koneksi ke wifi.
    - ubah ssid menjadi ssid wifi kita / bisa gunakan fitur scan
    - ubah juga security profile yang kita buat tadi
    - jika sudah nanti seharusnya akan berubah menjadi R si wlan 1 nya. yang menandakan bahwa wlan 1 ini sudah bisa terkoneksi ke wifi kita
    - kita juga bisa lihat di wirlless > registasion untuk melihat wirlless kita
- buat dhcp client untuk mendapatkan ip dhcp dari si wifi kita.
    - pergi ke ip > dhcp client, lalu tambahkan wlan 1 dan jangan lupa centang ntp, dan dns nya
    - Status bound menandakan bahwa wlan1 sudah mendapatkan IP address dari AP
    - Pada IP>address>interface terdapat dynamic IP addres pada wlan 1
- tambahkan nat massquirede agar bisa terkoneksi ke internet
    - pergi ke ip > firewall > nat, lalu tambahkan chain=srcnat out interface=wlan 1, dan action masquerade