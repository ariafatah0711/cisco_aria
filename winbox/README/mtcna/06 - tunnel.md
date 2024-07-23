# Static Routing

![alt text](img2/image.png)

# Tunnel
- Tunnel adalah sebuah metode penyelubungan (encapsulation) paket data di jaringan.
- Sebelum dikirim, paket data mengalami sedikit pengubahan atau modifikasi, yaitu penambahan header dari tunnel
- Ketika data sudah melewati tunnel dan sampai di tujuan (ujung) tunnel, maka header dari paket data akan dikembalikan seperti semula (header tunnel dilepas).

# VPN
- VPN dibentuk dari beberapa tunnel yang digabung
- VPN adalah sebuah cara aman untuk mengakses local area network dengan menggunakan internet atau jaringan publik.
- Tunnel atau terowongan merupakan kunci utama pada VPN, koneksi pribadi dalam VPN dapat terjadi dimana saja selama terdapat tunnel.
![alt text](img2/image-1.png)

## vpn in mikrotik
- EoIP => Tunnel yang paling sederhana di MikroTik adalah EoIP (Ethetnet over IP)
- PPTP => PPTP melakukan membentuk tunnel PPP antar IP mengunakan protocol TCP dan GRE (Generic Routing Encapsulation).
- L2TP
- PPPoE
- SSTP
- OpenVPN

- PPP => (Point to Point Protocol) adalah protocol layer 2 yang digunakan untuk komunikasi secara serial

# EOIP
- EOIP merupakan protocol proprietary untuk membangun bridge dan tunnel antar router Mikrotik, dimana interface EOIP akan dianggap sebagai ethernet
- Tunnel yang paling sederhana di MikroTik adalah EoIP (Ethetnet over IP)
- EoIP menggunakan encapsulation Generic Routing Encapsulation (IP Protocol No 47)
- EoIP tidak menggunakan ekripsi, jadi tidak disarankan digunakan untuk transmisi data yang membutuhkan tingkat keamanan yang tinggi
- Identifikasi tunnel menggunakan Tunnel ID
- MAC Address diantara interface EOIP harus berbeda
![alt text](img2/image-2.png)
![alt text](img2/image-3.png)
![alt text](img2/image-4.png)

# PPP
- PPP (Point to Point Protocol) adalah protocol layer 2 yang digunakan untuk komunikasi secara serial.
- Untuk menjalankan koneksi PPP, mikrotik RouterOS harus memiliki port/interface serial, line telephone port berupa RJ11 (PSTN), atau modem seluler (PCI atau PCMCIA)
- Untuk terbentuk koneksi PPP dilakukan melalui dial up nomer telepon tertentu ke ISP (misal nomor *99***1#).
- Kemudian ppp baru mendapatkan IP address untuk koneksi internet
- MikroTik dapat digunakan sebagai PPP server dan atau PPP client
![alt text](img2/image-5.png)

## PPTP
- PPTP melakukan membentuk tunnel PPP antar IP mengunakan protocol TCP dan GRE (Generic Routing Encapsulation).
- PPTP secure, karena menggunakan enkripsi MPPE (Microsoft Point-to-Point Encryption) panjang 40 dan 128 bit encrypts
- PPTP menggunakan port TCP 1723
- PPTP banyak digunakan karena hampir semua OS dapat menjalankan PPTP client
- PPTP adalah tunnel tipe client server, dimana PPTP server lebih banyak melalukan konfgurasi untuk setiap client yang ingin konek
![alt text](img2/image-6.png)

### PPP Secret
- Semua koneksi yang menggunkan protocol PPP selalu melibatkan authentikasi username dan password
- Secara local, username dan password ini disimpan dan diatur dalam bagian PPP secret
- Username dan password ini juga dapat disimpan dalam RADIUS server terpisah.
- PPP Secret (database local PPP) menyimpan username dan password yang akan digunakan oleh semua pptp clientnya
- Selain dipakai untuk PPTP client, PPP secret juga dipakai untuk protocol ppp lainya seperti; **async, l2tp, openvpn, pppoe, pptp dan sstp**
![alt text](img2/image-7.png)
![alt text](img2/image-8.png)
![alt text](img2/image-9.png)

### pptp in windows
![alt text](img2/image-12.png)
![alt text](img2/image-10.png)
![alt text](img2/image-11.png)
![alt text](img2/image-13.png)

# L2TP