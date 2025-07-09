## E-Time Network Competition 2023 Final (85%) - Full Configuration
### Topology

### SOAL
#### Description 
Kamu adalah seorang Network Engineer pada instansi E-Time. Pada pekerjaan ini kamu ditugaskan untuk membangun jaringan beserta layanan jaringan untuk mendukung proses pekerjaan di instansi E-Time. \
Semua rancangan jaringan yang diminta sudah diberikan pada soal pka berikut ini. \
Selesaikan semua tugasmu agar instansi E-Time dapat segera beroperasi dengan jaringan yang memadai untuk semua pegawainya. \
Dalam melakukan konfigurasi kamu diberikan satu laptop config untuk dapat mengkonsol setiap perangkat jaringan.

#### Instructions
<details>
<summary>Instructions</summary>

1. Konfigurasikan alamat ip address sesuai yang tertera pada gambar soal topologi dan diperjelas
pada gambar file pka untuk menentukan alamat host id disetiap perangkat. Konfigurasikan pula
masing-masing nama hostname perangkat.
2. Konfigurasikan routing eBGP pada R8 dan R1. R1 menggunakan AS 100 dan R8 adalah 200.
3. Konfigurasikan ospf sesuai dengan yang diminta soal, diantaranya:
  - proses id 10
  - area yang digunakan adalah 0,10,20,30, dan 100
  - pada jaringan disisi Site-A dan Site-B dibuat untuk tidak perlu mendapatkan update database routing ospf untuk kearah client
  - konfigurasikan virtual link pada bagian router yang memiliki area 100
  - lakukan redistribute routing pada R1 menuju R8 begitu sebaliknya, dan R8 menuju R9 dan juga sebaliknya.
  - Pada saat konfigurasi routing ospf, router-id diset menggunakan ip loopback router masing masing dengan format angka yang berulang pada device name router, contoh R1: maka ip loopaback 1.1.1.1. Namun untuk Switch L3 ditambahkan satu angka dibelakang setelah nama device name. contoh SW1: maka ip loopback 11.11.11.11
  - advertise setiap network yang ada
4. Konfigurasikan etherchannel sesuai mode yang tertera pada gambar topologi, pada SW2 LACP menggunakan channel-group1 dan PAGP menggunakan channel-group 2
5. Konfigurasikan routing eigrp pada router R8, R9 hingga R10 dengan menggunakan as 10. Sama seperti ospf, routing eigrp menggunakan router-id dengan ketentuan yang sama.
6. Konfigurasikan vlan sesuai yang terdapat pada gambar topologi
7. Konfigurasikan stp rapid pvst pada jaringan switch bagian branch dimana S3 merupakan root primary dari vlan 90 dan root secondary dari vlan 91. Pada S4 sebaliknya, root primary vlan 91 dan secondari vlan 90.
8. Konfigurasikan HSRP pada bagian HQ SW1 dan SW2 dengan ketentuan sebagai berikut:
  - standby group number 110 yang menggunakan ip virtual 192.168.100.1 pada interface vlan100, nilai prioritas pada SW1 adalah 110 dan SW2 adalah 105, dan tambahkan command preempt.
  - standby group number 120 yang menggunakan ip virtual 192.168.120.1 pada interface vlan200, nilai prioritas pada SW1 adalah 110 dan SW2 adalah 105, dan tambahkan command preempt.
  - standby group number 130 yang menggunakan ip virtual 192.168.130.1 pada interface vlan300, nilai prioritas pada SW1 adalah 105 dan SW2 adalah 110, dan tambahkan command preempt.
  - standby group number 140 yang menggunakan ip virtual 192.168.140.1 pada interface vlan400, nilai prioritas pada SW1 adalah 105 dan SW2 adalah 110, dan tambahkan command preempt.
9. Konfigurasikan semua layanan server yang ada dengan benar, untuk layanan dns menggunakan type A record dengan 3 domain, yaitu: web1.etime.com, web2.etime.com dan mail.etime.com, untuk layanan email dibuat akun sebanyak seluruh client pc yang terdapat pada jaringan etime tersebut dengan pass 123, Untuk layanan dhcp diberikan untuk semua client host disetiap vlan, terkecuali perangkat server yang cukup diberikan ip static. Nama dhcp disesuaikan dengan nama vlan, dan untuk ip dhcp semua dimulai dengan angka 5. Layanan VoIP memiliku dua server, untuk Site A menggunakan R7 dan Site B menggunakan R5. Number yang digunakan adalah 001-005 pada R5 dan 2001-2005 pada R7, konfigurasikan sampai semua pegawai dapat saling call antar site.
10. Pada L2 Trunk SW1 memiliki 3 link, yang mengarah ke SW2 diperkenankan untuk melewati semua vlan, yang mengarah port fa0/2 hanya diperkenankan melewati vlan 100,200 dan yang mengarah port fa0/3 hanya diperkenankan melewati vlan 300, 400. Begitupun sebaliknya pada SW2.

</details>

---

### Jawaban 