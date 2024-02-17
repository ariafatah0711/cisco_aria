<a href="../../README.md#back">Back README.md...</a>

# pengenalan
## perangkat
- router
    - Router adalah perangkat jaringan yang bertindak sebagai gerbang atau penghubung antara dua atau lebih jaringan yang berbeda. Router berfungsi untuk mengarahkan paket data antara jaringan dan memutuskan jalur terbaik untuk pengiriman data. router bekerja pada (layer 3).
- Switch
    - Switch adalah perangkat jaringan yang menghubungkan beberapa perangkat dalam satu jaringan local(LAN). switch bekerja di lapisan data link (layer 2) dalam model referensi OSI dan mampu mengarahkan lalu lintas data diperangkat yang terhubung langsung padanya
- PC, laptop
 
## osi layer
- 7> Application Layer (END User Layer)
    - Application layer pada OSI adalah pusat terjadinya suatu interaksi antara user dengan aplikasi yang bekerja menggunakan fungsionalitas sebuah jaringan. Lapisan ini menjadi layer paling atas dari model OSI
        - Menyajikan interface antara aplikasi dengan jaringan
        - Mengatur bagaimana sebuah aplikasi mampu untuk mengakses jaringan
    - example port: **HTTP, FTP, SMTP, IRC, DNS, dll**
- 6> Presentation Layer
    - Lapisan Presentation berfungsi untuk mengidentifikasi sintaks yang di pakai suatu host jaringan untuk berkomunikasi. Layer ini perlu memberi enkripsi serta deskripsi data yang nantinya akan di pakai dalam layer application.
        - Pada layer presentation, data akan ter-enkripsi dan dekripsi otomatis melalui sistem.
    - example port: **SSH, MIME, TLS, SSL, dll**
- 4> Session Layer (Synch, send to port)
    - Layer session memiliki fungsi untuk mengendalikan dialog maupun melakukan pengelolaan terhadap koneksi suatu komputer. Bahkan layer ini juga bisa melakukan pemutusan koneksi internet pada suatu komputer.
    - example port: **API`s Sockets, NFS, RTP, SMB, dll**
- 4> Transport Layer
    - Transport layer mempunyai fungsi untuk memecah data menjadi paket-paket data, serta memberikan nomor urut untuk setiap paketnya. Sehingga, nantinya dapat disusun kembali saat sampai pada tujuan.
        - Protokol tersebut akan mengirimkan paket data, sekaligus memastikan bahwa setiap paket telah diterima dengan sukses dan tepat sasaran. Selain itu, juga dapat mentransmisikan ulang terhadap paket yang hilang atau rusak ketika proses pengiriman.
        - Transport layer data dapat menyediakan transfer yang transparan dan reliable antara kedua titik akhir. Lapisan ini juga menyediakan proses multiplexing, kendali aliran (flow control), serta proses pemeriksaan error dan perbaikannya.
    - example port: **TCP, UDP**
- 3> Network Layer (packets)
    - Layer network pada OSI ini bertugas untuk mendefinisikan alamat IP sehingga setiap komputer dapat saling terkoneksi dalam satu jaringan. Fungsi lainnya adalah melaksanakan proses routing dan membuat header untuk setiap paket data yang ada.
        - Membuat header pada paket – paket data
        - Melakukan proses routing (membuat routing table)
    - example: **IP, ICMP, IPSec, IGMP**
    - device : **ROUTER**
- 2> Data Link Layer (frames)
    - Pada data-link layer memiliki tugas untuk menentukan setiap bit data dikelompokkan menjadi format yang disebut dengan frame. Pada level ini juga terjadi koreksi kesalahan, flow control, pengalamatan hardware atau perangkat keras (seperti halnya pada MAC Address (Media Access Control Address)). 
        - Serta, menentukan bagaimana perangkat jaringan seperti hub, repeater, bridge, dan switch pada layer 2 dapat beroperasi. Untuk spesifikasi IEEE 802, dapat membagi tingkatan menjadi 2 level, yaitu lapisan Media Access Control (MAC) dan lapisan Logical Link Control (LLC).
        - membuat arp table (address resolution protocol)
    - example: **MAC ADDRESS, ARP**
    - device : **router, switch**
- 1> Physical Layer
    - Fungsinya adalah untuk mendefinisikan media transmisi jaringan, sinkronisasi bit, metode pensinyalan, serta membangun arsitektur jaringan seperti Ethernet, pengkabelan, dan topologi jaringan.
        - Pada tahapan atau level ini juga mendefinisikan mengenai bagaimana sebuah NIC (Network Interface Card) dapat berinteraksi secara langsung dengan media kabel dan perangkat radio. Untuk setiap pengiriman data melalui tiap layer, dapat dianalogikan seperti anda mengirim surat.
        - example: **fiber, coax, wireless, HUB, Repeaters**

## protocol
- TCP (Transmission Control Protocol) => http, ftp, ssh, dns
    - TCP memberikan setiap paket data nomor urut dan tanda pengenal yang unik. Sehingga penerima dapat mengidentifikasi paket yang sedang diterima dan yang akan datang berikutnya.
    - Setelah paket diterima sesuai dengan nomor urut yang benar, penerima akan mengirimkan pemberitahuan kepada pengirim.
    - Sekarang, pengirim dapat mengirimkan paket lainnya.
    - Apabila paket hilang atau dikirim dengan urutan yang salah, penerima tidak akan mengirimkan pemberitahuan agar paket data dikirim ulang.
- UDP (User Datagram Protocol) => dns, voip
    - UDP menyelesaikan pekerjaan yang sama tanpa membutuhkan tanda pengenal atau nomor urut.
    - UDP mengirimkan data dalam aliran dan hanya memeriksa jumlah untuk memastikan bahwa data diterima tanpa kerusakan.
    - UDP hampir tidak mengoreksi kesalahan pengiriman dan tidak peduli apabila paket hilang.

## port
- http (80, 443) => web server
- dns (53)
- ftp (21)
- ssh (22)
- SMTP (Simple Mail Transfer Protocol.) => just process send, receiver server
    - port **25, 465(ssl)**
    - protokol standar yang ada di mail server dan mempunyai fungsi utama untuk mengirimkan email dari local email dan diteruskan ke server melalui internet. Proses pengiriman email yang dilakukan oleh SMTP ini akan dikontrol dengan MTA.
    - MTA atau dikenal dengan Mail Transfer Agent berada didalam server email. Tugas utamanya adalah untuk mengatur pengiriman email dari lokal email menuju server.
- POP (Post Office Protocol) => not save in server: wa
    - port **110, 995(ssl)**
    - protokol standar yang ada di mail server dan mempunyai fungsi utama untuk menerima email dari server dan diteruskan ke email lokal. Proses kerjanya dimulai dari POP3 akan menerima pesan yang telah diunduh oleh penyimpanan lokal.
    - jadi, email tersebut akan terhapus otomatis dari server mail.
- IMAP (Internet Massage Acsess Protocol) => save in server: email
    - port **143, 993(ssl)**
    - protokol standar yang ada di mail server dan mempunyai fungsi utama untuk mencegah tersimpannya pesan pada lokal device sehingga pesan bisa tersimpan pada server.

## kabel
- UTP
    - straight(diference device) = po - o - ph - b - pb - h - pc - c
    - cross(same device) = ph - h - po - b - pb - o - pc - c
- coaxial
- fiber optic

# ip address
## ipv4
-  versi IP address yang menggunakan 32 bit. Ia terdiri dari 4 kumpulan angka / octet 

### class ipv4
- class A
    - 0.0.0.0 – 127.255.255.255
- class B
    - 128.0.0.0 – 191.255.255.255
- class C
    - 192.0.0.0 – 223.255.255.255
- class D
    - 224.0.0.0 – 239.255.255.255

### ip loopback
- Alamat IP loopback ditetapkan pada antarmuka loopback di perangkat jaringan dan tidak terhubung ke antarmuka fisik manapun.
    - 127.0.0.1
    - localhost

### ipprivate
- jenis IP yang hanya bisa dikenali dan dapat diakses dari jaringan lokal saja dan tidak dapat diakses lewat jaringan internet secara langsung tanpa bantuan router yang memiliki fitur NAT. 
    - 192.168.x.x
    - 172.13.x.x - 172.31.x.x

### ip public
- IP public adalah alamat IP yang digunakan dalam jaringan global Internet, dimana penggunaan dan alokasinya diatur oleh IANA (Internet Assigned Numbers Authority) dan untuk kawasan Asia Pasifik dibawah APNIC (Asia-Pacific Network Information Centre).
- IP public bisa didapatkan jika komputer/perangkat dikoneksikan dengan jaringan internet dari ISP (Internet Service Provider).
    - 192.183.12.4
    - 213.131.42.123
    - 132.214.23.53

### experimental ip
- ip setelah class D
    - 240.x.x.x - x.x.x.x
    - 240.2.6.255

## ipv6
-  versi IP address yang menggunakan 128 bit. Ia terdiri dari delapan kumpulan angka dan huruf yang masing-masing merupakan representasi desimal 16 angka biner. 
    - terdapat 8 octet
    - jika ada 0 di depanya akan dianggap kosong
        - 0db2 = db2
        - 0002 = 2
        - 0101 = 101
    - memiliki salah satu setidaknya ::
        - 0000:0000:0000 atau bisa juga di tulis ::
        - semisal jika 0000:0000:00000:00000 (terdapat lebih dari 3) maka ttp ::
    - 2001:DB8:0000:1111:0000:0000:0000:0200 = 2001:DB8:0:1111::200
    - fe80:0000:0000:0000:0000:0000:0101:1111 = fe80::101:1111

## mac address
- MAC Address adalah singkatan dari Media Access Control. MAC Address bersifat unik (tidak ada yang sama), permanen (tidak dapat diubah), dan digunakan sebagai identitas perangkat saat berkomunikasi dalam jaringan. 
    - Pembuatan MAC Address ditentukan oleh NIC (Network Interface Card). Selanjutnya, informasi ini disimpan didalam ROM (Read Only Memory) pada perangkat.
    - Alamat MAC Address terdiri atas 12 karakter heksadesimal, menggunakan kombinasi angka (0-9) dan huruf (A-F). MAC Address dibagi menjadi dua block. Masing-masing block terdiri atas 6 karakter, dengan pemisah tanda titik dua (:) atau tanda hubung (-) tanpa disertai spasi.
- fungsi:
    - MAC Address digunakan untuk mengidentifikasi perangkat dan memberi tahu di mana perangkat jaringan tersebut berada.
    - Pengidentifikasian Perangkat
    - ARP (Address Resolution Protocol)

# metode pengiriman
## unicast
- merupakan suatu metode pengiriman (transmisi) data dalam jaringan dengan mekanisme 1 : 1 atau PTP (Point-to-Point).
    - Dengan kata lain pengiriman data dilakukan antara satu alamat pengirim dan satu alamat penerima. Ketika data berhasil diterima maupun gagal diterima, maka si-pengirim akan memberikan informasi ke pengirim. 
    - Untuk topologi jaringan dengan komunikasi ‘Connection-Oriented’ (TCP), jika data gagal diterima maka akan dilakukan pengiriman ulang sampai data dapat dikirim secara lengkap.
- Contoh dari transmisi data menggunakan tipe alamat Unicast sering dilakukan dalam komunikasi perngakt sehari-hari. Misal, file sharing antar komputer, browsing, akses file server, dan lain-lain.

## broadcast
- Pengiriman data dengan tujuan semua alamat yang berada dalam 1 jaringan, metode pengiriman data seperti ini disebut Broadcast. Aplikasi yang menggunakan metode pengiriman data ini akan mengirimkan ke alamat broadcast.
    - Broadcast merupakan metode pengiriman (transmisi) data ke banyak perangkat sekaligus atau PTMP (Point to MultiPoint). Dalam pengiriman ke banyak titik (Point) dengan metode ini tidak perlu memperhatikan apakah data tersebut sampai ke penerima atau tidak.
    -  Dan juga tidak melihat apakah perangkat penerima pada setiap titik tersebut sedang aktif siap menerima paket data atau tidak.
- Contoh 192.168.0.255, apabila mengirimkan data ke alamat ini maka semua host yang berada dalam jaringan tersebut akan menerima data.
- example: **dhcp, arp, dns, TV, radio**
    - arp : FFFF.FFFF.FFFF
    - dhcp : 255.255.255.255

## multicast
- Metode pengiriman data dengan tujuan alamat group dalam 1 jaringan, mode pengiriman data ini disebut Multicast. Alamat ini menggunakan kelas D, sehingga beberapa host akan didaftarkan dengan menggunakan alamat kelas D ini. Apabila ada pengirim yang mengirimkan data ke alamat kelas D ini akan diteruskan menuju ke host-host yang sudah terdaftar di IP kelas D ini.
    - Multicast metode yang digunakan juga hampir sama dengan broadcast. Namun perbedaannya untuk multicast ini akan melakukan transmisi data ke banyak titik (point) yang tergabung ke group alamat yang sama.
    - Jadi jika ada perangkat yang tidak tergabung ke dalam group maka tidak akan mendapatkan transmisi data. Dan alamat yang digunakan disini adalah biasa disebut dengan alamat multicast.
- 224.0.0.18 : VRRP
- 224.0.0.5-224.0.0.6 : OSPF LSA/DR
- 224.2.0.0-224.2.127.253 : Multimedia Conference Call

## anycast
- Apabila suatu pelayanan menggunakan beberapa IP address yang berbeda, kemudian apabila ada pengirim mengirimkan data menuju ke pelayanan tersebut maka akan diteruskan ke salah satu alamat IP tersebut, mode pengiriman ini disebut Anycast.
    - Contoh: Apabila ada 5 server dengan aplikasi FTP yang sama, maka apabila ada user mengakses pelayanan FTP tersebut akan diarahkan ke salah satu dari 5 server tersebut.
    - Anycast merupakan sebuah metode transmisi (pengiriman) data Point-to-Point-Nearest. Bisa dibilang untuk mekanisme dari anycast ini gabungan antara unicast dengan multicast. Di dalam transmisi Anycast antara si-pengirim dan si-penerima mempunyai alamat yang jelas, namun untuk menuju ke penerima akan menggunakan titik (point) sebuah group yang memiliki jalur terdekat.
