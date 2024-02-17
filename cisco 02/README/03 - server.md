<a href="../../README.md#back">Back README.md...</a>

# server
## pengenalan
- sistem komputer yang menyediakan sumber daya untuk penyimpanan data.
- melayani permintaan dari komputer client. Contohnya, saat komputer client ingin mengakses suatu data yang disimpan di server jaringan, komputer server akan merespon permintaan itu dengan memberikan data.

## fungsi
- Penyimpanan Data Terpusat: File server berfungsi sebagai tempat penyimpanan pusat untuk semua jenis data di dalam jaringan.
- Berbagi dan Kolaborasi: File server memfasilitasi file sharing ke seluruh pengguna yang memiliki akses, sehingga mendorong kolaborasi tim dengan memungkinkan pengguna untuk bekerja bersama pada proyek tertentu.
- Manajemen Akses: Dalam mengelola file server, dapat ditentukan administrator yang mengatur  izin akses dan hak pengguna terhadap file dan folder.
- Pemantauan Aktivitas: Melalui file server, aktivitas pengguna terhadap data di dalam server dapat diperhatikan.

## 2 macam server
- Dedicated file server
    - server yang khusus dirancang dan diatur untuk menyediakan fungsi penyimpanan dan berbagi file dalam jaringan. Fokus utamanya adalah pada tugas penyimpanan data. File server jenis ini biasanya terpasang pada LAN yang spesifik. Server ini dilengkapi dengan kapasitas penyimpanan yang besar dan sumber daya komputasi yang kuat.
- non Dedicated file server
    - server yang dapat memiliki fungsi lain selain fungsi file server itu sendiri. Misalnya, server ini mungkin juga menjalankan aplikasi lain atau fungsi jaringan lainnya.

## jenis
- web server
- dhcp server
- dns server
- database server
- file server
- proxy server
- application server
- streaming server
- game server

# configuration
## server
- dns server
  - DNS merupakan Domain Name System
  - yang fungsinya untuk menerjemahkan suatu alamat ip numerik menjadi domain
  - contoh: "www.example.com" alih alih harus mengingat alamat ip numerik yang rumit seperti "192.168.1.1" atau "203.0.113.45"
- langkah melakukan setting dns server
  - langkah pertama menyeting ip server yang bertujuan untuk menjadi domain servernya
    - ip server: 192.168.1.100
  - lalu klik services dan pilih DNS lalu centang tanda DNS service
  - masukan nama domain dan ip addreasnya
    - name: www.example.com
    - address: 192.168.1.100 (ip server)
  - klik http pada server dan edit file html yang ingin tampil nanti
  - jika sudah masukan dns pada pc yang ingin terhubung
  - untuk menampilkan web hanya perlu pilih PC dan klik web browser dan ketik nama domainya ex: www.index.com

- jangan lupa di port fa 0/6 tiap switch aktifkan mode trunk agar switch dapat saling terhubung
  <img src="../../notes cisco/image/2_3.png">