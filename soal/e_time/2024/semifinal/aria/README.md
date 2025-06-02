## E-Time Network Competition 2024 - Troubleshooting Challenge
### topology

### soal
Anda sebagai network engineer ditugaskan untuk membenahi permasalahan jaringan yang terdapat pada soal troubleshooting ini. Setiap permasalahan sudah dituangkan dalam bentuk laporan ticket. Berusahalah memperbaiki setiap ticket yang ada dan juga berikanlah laporan berupa solusi dari setiap ticket yang berhasil anda kerjakan (PoC) !

#### Ticket 1
Terdapat laporan bahwasanya router backbone untuk koneksi p2p R1 dan R3 tidak bisa saling ping. Segera perbaiki ya!

### Ticket 2
Karena sedang marak issue security, bos minta jaringannya dipasangkan firewall disisi terluar jaringan internet E-Time. Saat ini Firewall ASA baru dipasangkan saja belum ada konfigurasi. Coba kamu bantu setting Kearah interface router dengan nama “outside” dengan security level 0.

### Ticket 3
Urgent!!, jaringan pada Site-A tidak berhasil terkoneksi ke jaringan ospf backbone, sehingga koneksi menjadi terganggu. Segera cari permasalahannya dan perbaiki!

### Ticket 4
Info!!, jaringan pada Site-B menggunakan routing protokol eigrp. Sedangkan pada Site-A menggunakan routing protokol ospf. Bantu agar kedua routing tersebut dapat saling terkoneksi.

### Ticket 5
Pada R1 merupakan router yang berperan menjadi ISP untuk memberikan internet kepada semua client dibawahnya, kamu diminta untuk menambahkan konfigurasi default route kearah upstream!

### Ticket 6
Terjadi gangguan pada layanan etherchannel pada jaringan Site-B yang mengakibatkan jaringan protokol etherchannel tidak dapat berjalan. Mohon dicek dan diperbaiki!

### Ticket 7
Tim support pada instansi etime ingin dapat mengakses perangkat router pada R1, R2 dan R3 secara remote dari laptop Tegar, buatkanlah akses remote tersebut dengan user tegar dan pass 123.

### Ticket 8
Terdapat komplen bahwasanya layanan web pada server http hanya dapat diakses menggunakan alamat ip server. Tolong buatkan domain agar mempermudah akses ke web. Domain yang dibuatkan untuk akses ke web yaitu etime.com dan www.e-time2024.com dengan type A record dan juga CNAME.

### Ticket 9
Karyawan atas nama tegar minta dibuatkan akun email ke tim IT agar bisa mengirimkan berkas berkas kerjaannya ke karyawan atas nama nisa. Saat ini yang sudah memiliki akun email hanya karyawan nisa. Segera buatkan dan setup dilaptopnya dengan nama user tegar dengan password 123.

### Ticket 10
Ada laporan pada IP Phone pada Site-B tidak dapat digunakan untuk menelpon antar pegawai Tria dan Ikhwan, cek kenapa bisa terjadi dan selesaikan agar bisa digunakan untuk menelpon antar pegawai pada Site-B!

### Ticket 11
Bos ingin layanan VoIP pada Site-A dan Site-B bisa terhubung satu sama lain agar komunikasi antar pegawai menjadi lebih mudah untuk dapat kordinasi antar site. coba kamu bantu konfigurasikan masalah ini tersolusikan.

### Ticket 12
Setelah kamu mencoba memperbaiki semua ticket yang ada, kamu diminta bos untuk audit jaringan tersebut dengan menuliskan/mendokumentasikan semua services yang kamu temui kedalam file poc!

## Jawaban
### Ticket 1
### Router R3
```bash
int gig 0/0
 ip add 10.10.10.10 255.255.255.252
```

### Ticket 2
#### ASA
```bash
interface GigabitEthernet1/1
 nameif outside
 security-level 0
 ip address 202.162.200.242 255.255.255.252
```

### Ticket 3
#### 

### Ticket 4
#### Router R5
```bash
router eigrp 10
 redistribute ospf 10 
router ospf 10
 redistribute eigrp 10 
```

### Ticket 5
#### 
```bash
```

### Ticket 8
#### Server DNS & HTTP
- tambahkan record A        : e-time2024.com - A - 192.168.10.10
- tambahkan record CNAME    : www - CNAME - e-time2024.com

### Ticket 9
#### Server EMAIL & DHCP
- 