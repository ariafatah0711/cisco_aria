## E-Time Network Competition 2023 semifinal (100%) - Troubleshooting Challenge
### Topology
#### Logical View
![alt text](images/README/image.png)

#### Physical View
![alt text](images/README/image-1.png)

### SOAL
#### Description 
Kamu adalah seorang Network Engineer pada instansi E-Time dan memiliki akses masuk ke konsol perangkat jaringan seperti router, switch, firewall dan perangkat host seperti komputer server dan client. \
Jaringan pada instansi tersebut sedang mengalami banyak gangguan yang mengakibatkan proses pekerjaan terhambat, maka kamu diminta untuk  menyelesaikan setiap permasalahan yang terdapat pada jaringan di instansi E-Time dan menuliskan kedalam file POC setiap penyelesaian yang sudah dikerjakan. \
Semua masalah jaringan dapat dilihat pada fila pka  E-Time Troubleshooting Challenge dan juga pada lembar soal berikut. 

#### List Of Ticket
<details>
<summary>List Of Ticket</summary>

##### Ticket1 
Terdapat laporan bahwasanya router backbone di R2 dan R3 yang tidak bisa saling ping. Tolong diperbaiki! 

##### Ticket2 
Urgent!!, jaringan pada Site-A tidak berhasil terkoneksi ke jaringan ospf backbone, sehingga koneksi menjadi terganggung. Segera cari permasalahannya dan perbaiki! 

##### Ticket3 
Info!!, jaringan pada Site-B menggunakan routing protokol eigrp. Sedangkan pada Site-A menggunakan routing protokol ospf. Bantu agar kedua routing tersebut dapat saling terkoneksi. 

##### Ticket4 
Pada R1 merupakan router yang terkoneksi dengan ISP memberikan internet kepada semua client dibawahnya, maka anda sebagai network engineer diminta untuk menambahkan konfigurasi default route kearah internet! 

##### Ticke5 
Terjadi gangguan pada layanan etherchannel pada jaringan Site-B yang mengakibatkan jaringan protokol etherchannel tidak dapat berjalan. Mohon dicek dan diperbaiki! 

##### Ticket6
Tim support pada instansi etime ingin dapat mengakses perangkat router pada R1, R2 dan R3 secara remote dari laptop Tegar, buatkanlah akses remote tersebut dengan user tegar dan pass 123. 

##### Ticket7 
Terdapat komplen bahwasanya layanan web pada server http hanya dapat diakses menggunakan alamat ip server. Tolong buatkan domain agar mempermudah akses ke web. \
Domain yang dibuatkan untuk akses ke web yaitu etime.com dan www.etime.com dengan type A record dan juga CNAME. 

##### Ticket8 
Karyawan atas nama tegar minta dibuatkan akun email ke tim IT agar bisa mengirimkan berkas berkas kerjaannya ke karyawan atas nama nisa. Saat ini yang sudah memiliki akun email hanya karyawan nisa. \
Segera buatkan dan setup dilaptopnya dengan nama user tegar dengan password 123.

##### Ticket9  
Ada laporan pada IP Phone pada Site-B tidak dapat digunakan untuk menelpon antar pegawai Tria dan Ikhwan, cek kenapa bisa terjadi dan selesaikan agar bisa digunakan untuk menelpon antar pegawai pada Site-B! 

##### Ticket10 
Bos ingin layanan VoIP pada Site-A dan Site-B bisa terhubung satu sama lain agar komunikasi antar pegawai menjadi lebih mudah untuk dapat kordinasi antar site. coba kamu bantu konfigurasikan masalah ini tersolusikan. 

##### Ticket11
Lakukan audit jaringan dengan menuliskan semua service yang kamu temui kedalam file poc! 

</details>

#### ADDRESSING TABLE
<details>
<summary>ADDRESSING TABLE</summary>

### Tabel Konfigurasi Jaringan
#### Router dan Loopback
| Device | Interface | IP Address / Prefix | Default Gateway |
| ------ | --------- | ------------------- | --------------- |
| **R1** | GI0/0     | 10.10.10.5/30       | -               |
|        | GI0/1     | 10.10.10.9/30       | -               |
|        | Lo0       | 103.81.134.1/24     | -               |
| **R2** | GI0/0     | 10.10.10.6/30       | -               |
|        | GI0/1     | 10.10.10.13/30      | -               |
|        | GI0/2     | 172.16.0.1/29       | -               |
| **R3** | GI0/0     | 10.10.10.10/30      | -               |
|        | GI0/1     | 10.10.10.14/30      | -               |
|        | GI0/2     | 172.16.1.1/29       | -               |
| **R4** | GI0/0     | 172.16.0.2/29       | -               |
|        | GI0/1     | 100.100.100.1/24    | -               |
| **R5** | Fa0/0     | 172.16.1.2/29       | -               |
|        | Fa0/1     | 200.200.200.1/24    | -               |

#### Switch dan VLAN
| Device  | Interface | VLAN/Subnet     | Gateway      |
| ------- | --------- | --------------- | ------------ |
| **SW1** | Fa/1      | -               | -            |
|         | VLAN 10   | 192.168.1.0/24  | 192.168.1.1  |
|         | VLAN 15   | 192.168.10.0/28 | 192.168.10.1 |
|         | VLAN 30   | 192.168.3.0/24  | 192.168.3.1  |
| **SW2** | Fa/1      | -               | -            |
|         | VLAN 10   | 192.168.2.0/24  | 192.168.2.1  |
|         | VLAN 15   | 192.168.20.0/28 | 192.168.20.1 |
|         | VLAN 30   | 192.168.4.0/24  | 192.168.4.1  |

#### End Devices
| Host   | Interface | IP Address       | Default Gateway |
| ------ | --------- | ---------------- | --------------- |
| SRV-1  | Fa0       | 192.168.10.10/28 | 192.168.10.1    |
| SRV-2  | Fa0       | 192.168.20.10/28 | 192.168.20.1    |
| NISA   | Fa0       | 192.168.1.10/24  | 192.168.1.1     |
| TEGAR  | Fa0       | 192.168.2.10/24  | 192.168.2.1     |
| VoIP-A | Fa0       | 192.168.3.0/24   | 192.168.3.1     |
| VoIP-B | Fa0       | 192.168.4.0/24   | 192.168.4.1     |

</details>

### JAWABAN
#### Ticket 1
##### Router R2
```bash
int gig0/1
 ip add 10.10.10.13 255.255.255.252
```

#### Ticket 2
##### Router R4
```bash
router ospf 10
 area 10 virtual-link 172.16.0.1
```

##### Router R2
```bash
router ospf 10
 area 10 virtual-link 172.16.0.2
```

#### Ticket 3
##### Router R5
```bash
router ospf 10
 redistribute eigrp 10 subnets 
router eigrp 10
 ! redistribute ospf 10
 redistribute ospf 10 metric 10000 100 255 1 1500

! entah kenapa ada bug gitu ketika tegar ping ke R3 dia intermitent 1/2 gitu dan ini test aja tapi masih blm bisa :v
! router ospf 10
 ! passive-interface fa0/1
! router eigrp 10
 ! passive-interface fa0/0
```

#### Ticket 4
##### Router R1
```bash
ip route 0.0.0.0 0.0.0.0 103.81.134.2
router ospf 10
 default-information ORiginate
```

#### Ticket 5 (gak nambah njir persentasenya)
##### SITE A
###### SW1
```bash
int port-channel 1
 sw trunk encap dot1q
 sw mode tr
int port-channel 2
 sw trunk encap dot1q
 sw mode tr
```

###### S1-S2
```bash
int port-channel 1
 sw mode tr
```

- verifikasi client NISA ping ke gateway ```ping 192.168.1.1```, dan ```ping 103.81.134.1```
- jika di port switchnya masih orange bisas lkaukan ```do wr```, lalu ```do reload```

##### SITE B
###### SW2
```bash
int ra fa 0/2-3
 channel-group 1 mode active 
```

###### S3, S4
```bash
int ra fa 0/1-2
 channel-group 1 mode active
 channel-protocol lacp
```

- ubah alamat ip client TEGAR karena ipnya belum sesuai: 192.168.2.10
- verifikasi client NISA ping ke gateway ```ping 192.168.1.1```, dan ```ping 103.81.134.1```

> jika si SW2 belum dpt route ke ospf pastikan di R5 redistribute ospf di route eigrp sudah pake metric

#### Ticket 6
##### Router R1, R2, R3
```bash
ip domain-name etime.com
! if want version 2 use 1024, if version 1 use 512
! ip ssh version 2 only if u alrdey create key rsa with > 768 bit
crypto key generate rsa

ip ssh version 2
username tegar privilege 15 secret 123

line vty 0 15
 transport input ssh
 login local
```

##### verifikasi with PC NISA, TEGAR
```bash
ssh -l tegar 172.16.1.1
ssh -l tegar 172.16.0.1
ssh -l tegar 103.81.134.1
```

#### Ticket 7
##### HTTP & DNS (SERVER)
- add record
  - TYPE: A Record, Address: 192.168.10.10, name: etime.com
  - TYPE: CNAME Record, Host: etime.com, name: www
  - TYPE: CNAME Record, Host: etime.com, name: mail

  - TYPE: A Record, Address: 192.168.20.10, name: mail.etime.com
  - TYPE: CNAME Record, Host: etime.com, name: www.etime.com
  - TYPE: CNAME Record, Host: etime.com, name: mail.etime.com

![alt text](images/README/image-2.png)

#### TIcket 8
##### EMAIL & DHCP (SERVER)
- add email user: tegar, pass: 123

##### PC TEGAR & PC NISA
- configurse email
  - NISA - nisa@mail.etime.com - mail.etime.com - nisa:123
  - TEGAR - tegar@mail.etime.com - mail.etime.com - tegar:123

![alt text](images/README/image-3.png)

#### Ticket 9
##### ROUTER R5
```bash
telephony-service
 ip source-address 200.200.200.1 port 2000
ephone-dn 1
 number 2001
ephone-dn 2
 number 2002
ephone-dn 3
 number 2003
```

![alt text](images/README/image-4.png)

#### Ticket 10
##### ROUTER R5
```bash
dial-peer voice 1 voip
 ! destination-pattern 100*
  destination-pattern 1...
 session target ipv4:100.100.100.1
```

##### ROUTER R4
```bash
dial-peer voice 1 voip
 ! destination-pattern 2...
 session target ipv4:200.200.200.1
```

---

##### debugging

```bash
sh eth sum

# checkthe router id
show ip ospf 

clear ip ospf proc
clear ip route *
```