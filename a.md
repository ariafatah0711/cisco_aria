1. Perhatikan gambar diatas. Tak lama setelah SiteA terhubung ke SiteB melalui jalur fiber tunggal, pengguna di SiteA melaporkan masalah konektivitas terjadi intermiten dengan aplikasi yang dihosting di SiteB. Apa penyebab masalah konektivitas yang menyebabkan intermiten?
Gambar Tanpa Teks
A. Kesalahan interface bertambah.
B. Penggunaan yang tinggi menyebabkan latensi yang tinggi.
C. Jenis media SFP yang salah digunakan di SiteA.
D. Situs terhubung dengan jenis kabel yang salah.

2.  Switch megalami kegagalan dalam melakukan Frame Check Sequence atau FCS. Manakah berikut ini perhitungan pada interface yang bertambah dari proses yang dialami? (Pilih Dua.)
A. input errors
B. frame
C. giants
D. CRC
E. runts

3. Bagaimana HSRP menyediakan redundansi hop pertama?
A. Ini memuat lalu lintas penyeimbang dengan menetapkan nilai metrik yang sama ke lebih dari satu rute ke tujuan yang sama pada tabel perutean IP.
B. Ini memuat keseimbangan lalu lintas Layer 2 di sepanjang jalur dengan membanjiri lalu lintas keluar semua interface yang dikonfigurasi dengan yang sama VLAN.
C. Ini meneruskan beberapa paket ke tujuan yang sama melalui link rute yang berbeda di jalur data.
D. Ini menggunakan MAC virtual bersama dan alamat IP virtual ke sekelompok router yang berfungsi sebagai gateway default untuk host di LAN.

4. Sebuah kantor perusahaan menggunakan empat lantai dalam sebuah gedung.
Lantai 1 memiliki 24 pengguna.
Lantai 2 memiliki 29 pengguna.
Lantai 3 memiliki 28 pengguna.
Lantai 4 memiliki 22 pengguna.
Subnet mana yang dapat mensummarize dan memberikan distribusi alamat IP yang paling efisien untuk konfigurasi router?
A. 192.168.0.0/24 sebagai summary network dan 192.168.0.0/28 untuk setiap lantai
B. 192.168.0.0/23 sebagai summary network dan 192.168.0.0/25 untuk setiap lantai
C. 192.168.0.0/25 sebagai summary network dan 192.168.0.0/27 untuk setiap lantai
D. 192.168.0.0/26 sebagai summary network dan 192.168.0.0/29 untuk setiap lantai

5. Perhatikan gambar diatas. Seorang network engineer harus menambahkan subnet untuk kantor baru yang akan menampung sebanyak 20 pengguna ke jaringan. Jaringan IPv4 dan kombinasi subnet mask manakah yang ditetapkan network engineer untuk meminimalkan pemborosan alamat?
Gambar Tanpa Teks
A. 10.10.225.48 255.255.255.240
B. 10.10.225.32 255.255.255.240
C. 10.10.225.48 255.255.255.224
D. 10.10.225.32 255.255.255.224

6.  Lihat gambar diatas. Setelah konfigurasi switch, tes ping gagal antara PC A dan PC B. Berdasarkan output untuk switch 1, kesalahan apa yang harus diperbaiki?
Gambar Tanpa Teks
A. PC berada di VLAN yang salah.
B. Semua VLAN tidak diaktifkan di trunk.
C. Mode akses dikonfigurasi pada port switch.
D. Ada ketidakcocokan pada Native Vlan.

7. Apa perbedaan antara RADIUS dan TACACS+?
A. RADIUS mencatat semua perintah yang dimasukkan oleh administrator, tetapi TACACS+ hanya mencatat perintah start, stop, dan interim command.
B. TACACS+ memisahkan otentikasi dan otorisasi, dan RADIUS menggabungkannya.
C. TACACS+ hanya mengenkripsi informasi sandi, dan RADIUS mengenkripsi seluruh muatan.
D. RADIUS paling sesuai untuk otentikasi dial, tetapi TACACS+ dapat digunakan untuk beberapa jenis otentikasi.

8. Perhatikan gambar berikut. Seluruh isi tabel MAC address ditampilkan. Sales-4 mengirimkan frame data ke Sales-1.
Apa yang dilakukan switch saat menerima frame dari Sales-4?
Gambar Tanpa Teks
A. Memetakan alamat MAC Layer 2 ke alamat IP Layer 3 dan meneruskan frame.
B. Memasukkan alamat MAC sumber dan port ke tabel forwarding dan meneruskan frame ke Sales-1.
C. Melakukan pencarian di tabel alamat MAC dan mendiscard frame karena ada entri yang hilang.
D. Membanjiri frame dari semua port kecuali pada port di mana Sales-1 terhubung.

9. Seorang engineer mengkonfigurasi interface Gi1/0 pada router PE perusahaan untuk terhubung ke ISP. Neighbor Discovery dinonaktifkan.
Tindakan apa yang diperlukan untuk menyelesaikan konfigurasi jika ISP menggunakan perangkat jaringan pihak ketiga?
Gambar Tanpa Teks
A. Nonaktifkan autonegotiation.
B. Aktifkan LLDP secara global.
C. Aktifkan LLDP-MED para perangkat ISP
D. Nonaktifkan Cisco Discovery Protocol pada interface

10. Perhatikan gambar berikut. Apa hasilnya jika Gig1/11 menerima STP BPDU?
Gambar Tanpa Teks
A. Transisi port ke STP blocking.
B. Port segera beralih ke STP forwarding.
C. Port masuk ke status error-disable state.
D. Transisi port ke Root Port

11. Perhatikan gambar berikut. Tindakan apa yang dilakukan switch pada link trunk?
Gambar Tanpa Teks
A. Trunk tidak terbentuk, dan port masuk ke status err-disabled.
B. Trunk terbentuk, tetapi VLAN native yang tidak cocok digabungkan menjadi satu broadcast domain.
C. Trunk terbentuk, tetapi VLAN 99 dan VLAN 999 dalam keadaan mati.
D. Trunk tidak terbentuk, tetapi VLAN 99 dan VLAN 999 diizinkan untuk melintasi link.

12. Seorang engineer jaringan harus mengkonfigurasi dua subnet baru menggunakan blok alamat 10.70.128.0/19 untuk memenuhi persyaratan berikut:
Subnet pertama harus mendukung 24 host.
Subnet kedua harus mendukung 472 host.
Kedua subnet harus menggunakan subnet mask terpanjang dari blok alamat.
Manakah dua konfigurasi yang harus digunakan untuk mengkonfigurasi subnet baru dan memenuhi persyaratan untuk menggunakan alamat pertama yang tersedia di setiap subnet untuk interface router? (Pilih dua.)
A. interface vlan 1148 ip address 10.70.148.1 255.255.254.0
B. interface vlan 3002 ip address 10.70.147.17 255.255.255.224
C. interface vlan 4722 ip address 10.70.133.17 255.255.255.192
D. interface vlan 1234 ip address 10.70.159.1 255.255.254.0
E. interface vlan 155 ip address 10.70.155.65 255.255.255.224

13. Perhatikan gambar berikut. Router R1 Fa0/0 tidak dapat melakukan ping ke router R3 Fa0/1. Tindakan mana yang harus diambil di router R1 untuk membantu menyelesaikan masalah konfigurasi?
Gambar Tanpa Teks
A. atur gateway default sebagai 20.20.20.2
B. konfigurasikan rute statis dengan Fa0/1 sebagai interface jalan keluar untuk mencapai jaringan 20.20.2.0/24
C. mengkonfigurasi rute statis dengan 10.10.10.2 sebagai hop berikutnya untuk mencapai jaringan 20.20.20.0/24
D. atur jaringan default sebagai 20.20.20.0/24

14. Perhatikan gambar berikut. Ke perangkat mana Router1 mengirim paket yang ditujukan ke alamat host 10.10.13.165?
Gambar Tanpa Teks
A. Router2
B. Router3
C. Router4
D. Router5

15. Manakah dua parameter minimum yang harus dikonfigurasi pada interface aktif agar OSPFV2 dapat beroperasi? (Pilih dua.)
A. OSPF process ID
B. OSPF MD5 authentication key
C. OSPF stub flag
D. IPv6 address
E. OSPF area

16. Perhatikan gambar berikut. Perintah apa yang diperlukan untuk menambahkan subinterface ke Ethernet0/0 pada R1 untuk memungkinkan VLAN 20, dengan alamat IP 10.20.20.1/24?
Gambar Tanpa Teks
A. R1(config)#interface ethernet0/0 R1(config-if)#encapsulation dot1q 20 R1(config-if)#ip address 10.20.20.1 255.255.255.0
B. R1(config)#interface ethernet0/0.20 R1(config-if)#encapsulation dot1q 20 R1(config-if)#ip address 10.20.20.1 255.255.255.0
C. R1(config)#interface ethernet0/0.20 R1(config-if)#ip address 10.20.20.1 255.255.255.0
D. R1(config)#interface ethernet0/0 R1(config-if)#ip address 10.20.20.1 255.255.255.0
17. Perhatikan gambar berikut. Apa yang digunakan router R1 sebagai ID router OSPF?
Gambar Tanpa Teks
A. 10.10.1.10
B. 10.10.10.20
C. 172.16.15.10
D. 192.168.0.1

18. Perhatikan gambar berikut. Interface loopback1 dari router Atlanta harus mencapai interface loopback3 dari router Washington. Manakah dua rute host statis yang harus dikonfigurasi pada router New York? (Pilih dua.)
Gambar Tanpa Teks
A. ipv6 route 2000::3/128 s0/0/0
B. ipv6 route 2000::1/128 s0/0/1
C. ipv6 route 2000::1/128 2012::1
D. ipv6 route 2000::1/128 2012::2
E. ipv6 route 2000::3/128 2023::3

19.  Perhatikan gambar berikut. Setelah konfigurasi diterapkan, kedua router gagal membangun hubungan neighbor OSPF. Apa alasan masalahnya?
Gambar Tanpa Teks
A. proses ID OSPF tidak cocok
B. Jaringan pada Router1 salah dikonfigurasi
C. Router2 menggunakan timer hello default
D. ID router OSPF tidak cocok

20. Ketika floating rute statis dikonfigurasi, tindakan mana yang memastikan bahwa rute cadangan digunakan saat rute utama gagal?
A. Administrative distance harus lebih tinggi pada primary route agar backup route menjadi secondary.
B. Perintah asal informasi default harus dikonfigurasi untuk rute yang akan diinstal ke tabel perutean.
C. Floating Rute statis harus memiliki jarak administratif yang lebih rendah dari rute utama sehingga digunakan sebagai cadangan.
D. Floating Rute statis harus memiliki jarak administratif yang lebih tinggi daripada rute utama sehingga digunakan sebagai cadangan

21. Seorang pengguna mengkonfigurasi OSPF dan mengadvertise interface Gigabit Ethernet di OSPF. Secara default, jenis jaringan OSPF mana yang dimiliki interface ini?
A. point-to-multipoint
B. point-to-point
C. broadcast
D. nonbroadcast

22.  Perintah apa yang harus kita masukkan untuk menjamin bahwa router HSRP dengan prioritas lebih tinggi menjadi router utama HSRP setelah dimuat ulang?
A. standby 10 preempt
B. standby 10 version 1
C. standby 10 priority 150
D. standby 10 version 2

23. Perintah apa yang harus kita masukkan untuk memverifikasi prioritas router dalam grup HSRP?
A. show hsrp
B. show sessions
C. show interfaces
D. show standby

24. Perintah apa yang harus kita masukkan untuk melihat log kesalahan di lingkungan EIGRP untuk IPv6?
A. show ipv6 eigrp neighbors
B. show ipv6 eigrp topology
C. show ipv6 eigrp traffic
D. show ipv6 eigrp events

25. Perhatikan gambar berikut. Manakah dua pernyataan yang benar tentang R1? (Pilih dua.)
Gambar Tanpa Teks
A. Jarak administratif EIGRP diubah secara manual dari 90 menjadi 170.
B. Ada 20 subnetmask yang berbeda dalam jaringan 10.0.0.0/8.
C. Sepuluh rute memiliki keseimbangan beban yang sama antara Te0/1/0,100 dan Te0/2/0,100.
D. Jaringan 10.0.0.0/8 dipelajari melalui EIGRP eksternal.
E. Rute default statis ke 10.85.33.14 telah ditentukan.

26. Manakah tiga yang menjelaskan alasan jaringan OSPF menggunakan desain hierarkis? (Pilih tiga.)
A. untuk mempercepat konvergensi
B. untuk mengurangi overhead perutean
C. untuk menurunkan biaya dengan mengganti router dengan switch lapisan distribusi
D. untuk mengurangi latency dengan meningkatkan bandwidth
E. untuk membatasi ketidakstabilan jaringan ke satu area jaringan
F. untuk mengurangi kerumitan konfigurasi router

27. Pernyataan mana yang menjelaskan protokol routing OSPF? (Pilih tiga.)
A. Mendukung penerapan VLSM.
B. Digunakan untuk merutekan antar AS.
C. Membatasi ketidakstabilan jaringan ke satu area jaringan.
D. Meningkatkan routing overhead pada jaringan.
E. Memungkinkan kontrol ekstensif dari pembaruan perutean.
F. Konfigurasi lebih mudah daripada RIP v2.

28.  Perhatikan gambar berikut. Bagaimana router menangani paket yang ditujukan untuk 192.0.2.156?
Gambar Tanpa Teks
A. Router akan meneruskan paket melalui Serial0 atau Serial1.
B. Router akan mengembalikan paket ke sumbernya.
C. Router akan meneruskan paket melalui Serial2.
D. Router akan menjatuhkan paket.

29. Perhatikan gambar berikut. Setelah kita menerapkan konfigurasi yang diberikan ke R1 dan R2 kita melihat bahwa OSPFv3 gagal untuk start.
Gambar Tanpa Teks
A. Nomor area pada R1 dan R2 tidak cocok
B. Alamat jaringan IPv6 pada R1 dan R2 tidak cocok
C. Nomor AS pada R1 dan R2 tidak cocok
D. Router ID pada R1 dan R2 tidak cocok

30. Perintah apa yang digunakan untuk menampilkan kumpulan status link OSPF?
A. show ip ospf link-state
B. show ip ospf lsa database
C. show ip ospf neighbors
D. show ip ospf database

31. Perhatikan gambar berikut. C-router akan digunakan sebagai "router-on-a-stick" untuk merutekan antara VLAN. Semua interface telah dikonfigurasi dengan benar dan IP routing berjalan. Host di VLAN telah dikonfigurasi dengan gateway default yang sesuai. Apa yang sudah benar tentang konfigurasi ini?
Gambar Tanpa Teks
A. Perintah ini perlu ditambahkan ke konfigurasi: C-router(config)# router eigrp 123 C-router(config-router)# network 172.19.0.0
B. Perintah ini perlu ditambahkan ke konfigurasi: C-router(config)# router ospf 1 C-router(config-router)# network 172.19.0.0 0.0.3.255 area 0
C. Perintah ini perlu ditambahkan ke konfigurasi: C-router(config)# router rip C-router(config-router)# network 172.19.0.0
D. Tidak diperlukan konfigurasi perutean lebih lanjut.

32. Perhatikan gambar berikut. Saat menjalankan EIGRP, apa yang diperlukan RouterA untuk bertukar routing update dengan RouterC?
Gambar Tanpa Teks
A. Nomor AS harus diubah agar sesuai dengan semua router
B. interface loopback harus dikonfigurasi sehingga DR dipilih
C. Tidak diperlukan perintah auto-summary pada Router A dan Router C

33. Perhatikan gambar berikut. Manakah dua pernyataan yang benar tentang ip loopback yang dikonfigurasi pada RouterB? (Pilih dua.)
Gambar Tanpa Teks
A. Memastikan bahwa data akan diteruskan oleh RouterB.
B. Ini memberikan stabilitas untuk proses OSPF di RouterB.
C. Ini menetapkan bahwa ID router untuk RouterB harus 10.0.0.1.
D. Mengurangi metrik untuk rute yang diiklankan dari RouterB.
E. Ini menunjukkan bahwa RouterB harus dipilih sebagai DR untuk LAN.

34. Protokol Halo OSPF melakukan tugas-tugas berikut. manakah yang benar? (Pilih dua.)
A. Ini memberikan neighbor discovery yang dinamis.
B. Mendeteksi neighbor yang tidak terjangkau dalam interval 90 detik.
C. Memelihara hubungan neighbor..
D. Menggunakan timer untuk memilih router dengan link tercepat sebagai router yang ditunjuk.
E. Ini menyiarkan paket hello di seluruh internetwork untuk menemukan semua router yang menjalankan OSPF.

35. Perhatikan gambar berikut. Jenis rute mana yang diwakili oleh protokol routing Kode D dalam gambar tersebut?
Gambar Tanpa Teks
A. rute yang ditetapkan secara statis
B. rute yang digunakan EIGRP
C. /24 rute dari IP yang dikonfigurasi secara lokal
D. rute BGP internal

36.  Seorang engineer harus mengkonfigurasi hubungan neighbor OSPF antara router R1 dan R3. Konfigurasi otentikasi telah dikonfigurasi dan interface penghubung berada di subnet 192.168.1.0/30 yang sama. Apa dua langkah selanjutnya untuk menyelesaikan konfigurasi? (Pilih dua.)
A. konfigurasikan interface sebagai OSPF aktif di kedua sisi
B. konfigurasikan kedua interface dengan area ID yang sama
C. konfigurasikan timer waktu halo dan mati agar cocok di kedua sisi
D. konfigurasikan proses ID yang sama untuk proses OSPF router
E. konfigurasikan router ID yang sama pada kedua proses perutean

37. Perhatikan gambar berikut. Router R2 dikonfigurasi dengan beberapa rute untuk mencapai jaringan 10.1.1.0/24 dari router R1. Jalur mana yang dipilih oleh router R2 untuk mencapai jaringan tujuan 10.1.1.0/24?
Gambar Tanpa Teks
A. Static
B. EIGRP
C. eBGP
D. OSPF

38. Perhatikan gambar berikut. Administrator jaringan mengasumsikan tugas untuk menyelesaikan konektivitas antara PC A dan File Server. Switch A dan Switch B telah dikonfigurasi sebagian dengan VLAN 10, 11, 12, dan 13. Apa langkah konfigurasi selanjutnya?
A. Tambahkan PC A ke VLAN 10 dan File Server ke VLAN 11 untuk segmentasi VLAN
B. Tambahkan VLAN 13 ke link trunk pada Switch A dan Switch B untuk propagasi VLAN
C. Tambahkan router on stick antara Switch A dan Switch B yang memungkinkan untuk perutean Inter-VLAN
D. Tambahkan PC A ke subnet yang sama dengan File Server yang memungkinkan komunikasi intra-VLAN

39. Perhatikan gambar berikut. Perintah asal informasi default dikonfigurasi di bawah konfigurasi R1 OSPF. Setelah pengujian, workstation pada VLAN 20 di Site B tidak dapat menjangkau server DNS di Internet. Tindakan apa yang dapat memperbaiki masalah konfigurasi?
A. Tambahkan perintah default-information originate command pada R2.
B. Tambahkan perintah default-information originate command pada R1.
C. Konfigurasikan ip route 0.0.0.0 0.0.0.0 10.10.10.18 perintah pada R1.
D. Konfigurasi ip route 0.0.0.0 0.0.0.0 10.10.10.2 perintah pada R2.

40. Perhatikan gambar berikut. Dua konfigurasi mana yang akan digunakan untuk membuat dan menerapkan standar access list pada R1, sehingga hanya perangkat jaringan 10.0.70.0/25 yang diizinkan mengakses server database internal? (Pilh
dua.)
Gambar Tanpa Teks
A. R1(config)# interface GigabitEthernet0/0 : R1(config-if)# ip access-group 5 out
B. R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255
C. R1(config)# interface Serial0/0/0 : R1(config-if)# ip access-group 5 in
D. R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127
E. R1(config)# access-list 5 permit any

41. Apa tujuan utama dari First Hop Redundancy Protocol?
A. Memungkinkan neighbor yang terhubung langsung untuk berbagi informasi konfigurasi.
B. Memungkinkan router untuk menggunakan prioritas bridge untuk membuat beberapa jalur loop-free ke satu tujuan.
C. Ini mengurangi kegagalan perutean dengan memungkinkan penyeimbangan beban Layer 3 antara neighbor OSPF yang memiliki kesamaan metrik link.
D. Ini mengurangi kegagalan perutean dengan mengizinkan lebih dari satu router untuk mewakili dirinya sendiri, sebagai gateway default.

42. Perhatikan gambar berikut. Seorang engineer membawa sirkuit baru ke penyedia MPLS pada interface Gi0/1 Router 1. Sirkuit baru menggunakan eBGP dan mempelajari rute ke VLAN25 dari jalur BGP. Apa perilaku yang diharapkan untuk arus lalu lintas untuk rute ke 10.10.13.0/25?
Gambar Tanpa Teks
A. Lalu lintas ke 10.10.13.0/25 adalah load balanced dari beberapa interface.
B. Lalu lintas ke 10.10.13.0/25 tidak simetris.
C. Rute 10.10.13.0/25 diperbarui dalam tabel perutean seperti yang dipelajari dari interface Gi0/1.
D. Rute 10.10.13.0/25 yang dipelajari melalui interface Gi0/0 tetap ada di tabel perutean.

43. Perhatikan gambar berikut. Dua perintah mana yang harus ditambahkan untuk memperbarui konfigurasi router R1 sehingga hanya menerima koneksi terenkripsi? (Pilih dua.)
Gambar Tanpa Teks
A. transport input ssh
B. username CNAC secret R!41!3705926@
C. crypto key generate rsa 1024
D. line vty 0 4
E. ip ssh version 2

44. Administrator jaringan mengaktifkan keamanan port pada interface switch yang terhubung ke printer. Apa tindakan konfigurasi selanjutnya untuk memungkinkan port mempelajari alamat MAC printer dan memasukkannya ke dalam tabel secara otomatis?
A. megaktifkan dynamic MAC address learning
B. mengimplementasikan static MAC addressing
C. mengaktifkan sticky MAC addressing
D. mengimplementasikan auto MAC address learning

45. Apa dua perbedaan antara RIB dan FIB? (Pilih dua.)
A. FIB adalah database dari prefix routing, dan RIB adalah informasi yang digunakan untuk memilih interface keluar untuk setiap paket.
B. FIB berasal dari data plane, dan RIB berasal dari FIB.
C. FIB berasal dari control plane, dan RIB berasal dari FIB.
D. RIB adalah database dari prefix routing, dan FIB adalah informasi yang digunakan untuk memilih interface keluar untuk setiap paket.
E. RIB berasal dari control plane, dan FIB berasal dari RIB.

46.  Solusi apa yang digunakan oleh penyedia layanan laaS untuk memperluas segmen Layer 2 di seluruh jaringan Layer 3?
A. VRF
B. VTEP
C. VXLAN
D. VLAN

47. Apa yang terjadi jika versi HSRP diubah dari 1 menjadi 2?
A. Setiap grup HSRP menginisialisasi ulang karena alamat MAC virtual telah berubah.
B. Tidak ada perubahan yang terjadi karena standby router ditingkatkan sebelum router aktif.
C. Setiap grup HSRP menginisialisasi ulang karena alamat multicast telah berubah.
D. Tidak ada perubahan yang terjadi karena versi 1 dan 2 menggunakan MAC OUl virtual yang sama.

48. Jenis jaringan OSPF apa yang kompatibel dan memungkingkan komunikasi melalui dua perangkat yang terhubung ?
A. broadcast to point-to-point
B. point-to-multipoint to nonbroadcast
C. broadcast to nonbroadcast
D. point-to-multipoint to broadcast

49. Perhatikan gambar diatas. Attacker dapat menyebarkan routing OSPF palsu dari jaringan 172.16.20.0 ke domain OSPF dan black hole traffic. Tindakan apa yang harus diambil untuk menghindari serangan ini dan tetap dapat menyebarkan subnet ini ke OSPF?
Gambar Tanpa Teks
A. Konfigurasikan 172.16.0.20.0 sebagai stub network.
B. Konfigurasikan graceful restart pada interface 172.16.20.0
C. Konfigurasikan pasif interface pada R2 menuju 172.16.20.0
D. Terapkan kebijakan untuk memfilter paket OSPF di R2

50. Perhatikan gambar diatas. Apa dua efek yang terjadi dari konfigurasi tersebut?
Gambar Tanpa Teks
A. Jika R1 Down, R2 menjadi aktif tetapi akan beralih ke standby saat R1 kembali up.
B. Jika R2 Down, R1 menjadi aktif tetapi akan beralih ke standby saat R2 kembali up.
C. R1 menjadi router aktif
D. R1 menjadi router standby
E. Jika R1 Down, R2 menjadi aktif dan tetap aktif saat R1 kembali up

51. Perhatikan gambar diatas. Bagaimana spanning-tree dikonfigurasi pada interface ini ?
Gambar Tanpa Teks
A. Dengan memasukan perintah spanning-tree portfast
B. Dengan memasukan perintah spanning-tree vlan 10,20,30,40 root primary
C. Dengan memasukan perintah spanning-tree mst1 vlan 10, 20,30,40
D. Dengan memasukan perintah spanning-tree portfast trunk

52.  Perhatikan gambar diatas. Network Engineer melakukan troubleshooting dengan masalah port channel antara SW1 dan SW2. Perintah mana yang menyelesaikan masalah tersebut?
Gambar Tanpa Teks
A. SW2(config-if)#switchport mode trunk
B. SW1(config-if)#channel-group 10 mode desirable
C. SW2(config-if)#channel-group 10 mode on
D. SW1(config-if)#channel-group 10 mode active

53.  Perhatikan gambar diatas. Konfigurasi mana yang harus diterapkan untuk membuat peering eBGP antara R1 dan R2?
Gambar Tanpa Teks
A. R2: bgp 320 neighbor 131.108.1.11 remote-as 300 | R1: bgp 300 neighbor 131.108.1.2 remote-as 320
B. R2: bgp 320 neighbor 131.108.1.1 remote-as 300 | R1: bgp 300 neighbor 131.108.1.2 remote-as 320
C. R2: bgp 300 neighbor 131.108.1.1 remote-as 320 | R1: bgp 320 neighbor 131.108.1.2 remote-as 300
D. R2: bgp 320 neighbor 1.1.1.1 remote-as 300 | R1: bgp 300 neighbor 2.2.2.2 remote-as 320

54. Perhatikan gambar diatas. Konfigurasi mana yang diperlukan untuk summarize jaringan area 2 yang di advertise ke area 0 ?
Gambar Tanpa Teks
A. router ospf 1 | network 192.168.38.0 255.255.255.0
B. router ospf 1 | area 2 range 192.168.36.0 255.255.252.0
C. router ospf 1 | area 2 range 192.168.38.0 255.255.255.0
D. router ospf 1 | network 192.168.38.0 255.255.252.0

55. Perhatikan gambar diatas. PC-1 harus mengakses server web pada port 8080. Untuk mengizinkan lalu lintas ini, statement mana yang harus ditambahkan ke daftar kontrol akses yang diterapkan pada port SW2 G0/0 ke arah inbound ?
Gambar Tanpa Teks
A. permit tcp host 192.168.0.5 host 172.16.0.2 eq 8080
B. permit tcp host 192.168.0.5 lt 8080 host 172.16.0.2
C. permit tcp host 172.16.9.2 host 192.168.0.5 eq 8080
D. permit tcp host 192.168.0.5 eq 8080 host 172.16.0.2

56. Perhatikan gambar diatas. perintah mana yang harus diterapkan ke R2 untuk membentuk OSPF neighborship?
Gambar Tanpa Teks
A. network 20.0.0.2 0.0.0.0 area 0
B. network 20.0.0.2 0.0.0.3 area 0
C. network 20.1.1.0 0.0.0.0 area 0
D. network 20.1.1.2 0.0.0.0 area 0

57.  Perhatikan gambar diatas. OSPF neighborship gagal diantara dia router. Apakah penyebab dari masalah ini?
Gambar Tanpa Teks
A. Router ID OSPF tidak ada pada router ini
B. Ada ketidaksesuaian MTU antara kedua router
C. Proses OSPF dihentikan pada neighbor router
D. Proses OSPF tidak ada pada neighbor router

58.  Perhatikan gambar diatas. Seorang engineer sedang mengkonfigurasi EtherChannel antara Switch1 dan Switch2 dan memperhatikan pesan konsol di Switch2. Berdasarkan output, tindakan apa yang menyelesaikan masalah ini?
Gambar Tanpa Teks
A. Konfigurasikan nomor interface port channel yang sama di kedua switch
B. Konfigurasikan protokol etherchannel yang sama di kedua switch
C. Konfigurasikan beberapa member port di switch1
D. Konfigurasikan port member yang kurang di switch2

59.  Perhatikan gambar diatas. Seorang engineer harus mengatur konektivitas antara lapisan agregasi kampus dan lapisan akses kantor cabang. Engineer menggunakan dtp untuk membuat koneksi ini; namun, management traffic pada vlan1 tidak lewat. Tindakan mana yang menyelesaikan masalah dan mengizinkan komunikasi untuk semua vlan yang dikonfigurasi?
A. Ubah kedua interface untuk mengakses port.
B. Izinkan semua vlan di link trunk.
C. Konfigurasikan native VLAN yang benar pada interface remote.
D. Nonaktifkan spanning tree untuk native VLAN.



---


1. Sebuah kantor perusahaan menggunakan empat lantai dalam sebuah gedung.
Lantai 1 memiliki 24 pengguna.
Lantai 2 memiliki 29 pengguna.
Lantai 3 memiliki 28 pengguna.
Lantai 4 memiliki 22 pengguna.
Dari ketentuan jumlah pengguna dari setiap lantai diatas, berapakah subnet yang cocok untuk dapat mensummarize kebetuhan tersebut dengan ketentuan network 192.168.0.0. Serta tuliskanlah subnet network dari setiap lantainya!

2. Konversikan alamat ip berikut ini ke dalam bilangan biner: - 192.168.10.10 - 172.16.10.1 - 10.10.10.10

3. Konversikan bilangan biner berikut ke bentuk desimal
- 11101
- 111
- 11111001111

4. Konversikan bilangan hexadecimal ke bentuk decimal - c0 - a8 - 7e7

5. Hitunglah penjumlahan, pengurangan, dan perkalian biner berikut! - 10110 + 11011 - 11101 - 10011 - 110 * 11