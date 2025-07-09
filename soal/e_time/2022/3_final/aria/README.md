## E-Time Network Competition 2022 Final (87%) - Full Configuration
### Topology
![alt text](images/README/image.png)

<details>
<summary>Topologi Sawangan</summary>

![Sawangan](images/README/image-1.png)
</details>

<details>
<summary>Topologi Bojongsari</summary>

![Bojongsari](images/README/image-2.png)
</details>

<details>
<summary>Topologi Cinere</summary>

![Cinere](images/README/image-3.png)
</details>

<details>
<summary>Topologi Cipayung</summary>

![Cipayung](images/README/image-4.png)
</details>

<details>
<summary>Topologi Cimanggis</summary>

![Cimanggis](images/README/image-5.png)
</details>

<details>
<summary>Topologi Tapos</summary>

![Tapos](images/README/image-6.png)
</details>

---

### Soal

<details>
<summary>1 IP Address Loopback</summary>

#### 1. IP Address Loopback
| Node       | IP Address | Subnet Mask     |
| ---------- | ---------- | --------------- |
| DS1        | 1.1.1.1    | 255.255.255.255 |
| DS2        | 2.2.2.2    | 255.255.255.255 |
| SAWANGAN   | 3.3.3.3    | 255.255.255.255 |
| BOJONGSARI | 4.4.4.4    | 255.255.255.255 |
| CINERE     | 5.5.5.5    | 255.255.255.255 |
| CIPAYUNG   | 6.6.6.6    | 255.255.255.255 |
| CIMANGGIS  | 7.7.7.7    | 255.255.255.255 |
| TAPOS1     | 8.8.8.8    | 255.255.255.255 |
| TAPOS2     | 9.9.9.9    | 255.255.255.255 |

</details>

<details>
<summary>2. Konfigurasi Router & Switch</summary>

#### 2. Konfigurasi Router & Switch
##### Router SAWANGAN
| IP Address     | Interface | Routing | ID | Area |
| -------------- | --------- | ------- | -- | ---- |
| 10.10.10.1/30  | Se0/0/0   | OSPF    | 10 | 0    |
| 172.16.10.1/30 | Gig0/0    | OSPF    | 10 | 0    |
| 172.16.20.1/30 | Gig0/1    | OSPF    | 10 | 0    |

##### SW L3 DS1
| IP Address     | Interface | Routing | ID | Area |
| -------------- | --------- | ------- | -- | ---- |
| 172.16.10.2/30 | Fa0/1     | OSPF    | 10 | 0    |
| 192.168.10.10  | VLAN10    | OSPF    | 10 | 0    |
| 192.168.20.20  | VLAN20    | OSPF    | 10 | 0    |

##### SW L3 DS2
| IP Address     | Interface | Routing | ID | Area |
| -------------- | --------- | ------- | -- | ---- |
| 172.16.20.2/30 | Fa0/1     | OSPF    | 10 | 0    |
| 192.168.10.11  | VLAN10    | OSPF    | 10 | 0    |
| 192.168.20.21  | VLAN20    | OSPF    | 10 | 0    |

##### Router BOJONGSARI
| IP Address    | Interface | Routing | AS | Area |
| ------------- | --------- | ------- | -- | ---- |
| 10.10.10.2/30 | Se0/0/0   | OSPF    | 10 | 0    |
| 10.10.10.5/30 | Se0/0/1   | OSPF    | 10 | 0    |
| 172.16.1.1/24 | Gig0/0    | OSPF    | 10 | 0    |

##### Router CINERE
| IP Address     | Interface | Routing | AS | Area |
| -------------- | --------- | ------- | -- | ---- |
| 10.10.10.6/30  | Se0/0/0   | OSPF    | 10 | 0    |
| 10.10.10.9/30  | Se0/0/1   | OSPF    | 10 | 0    |
| 192.168.1.1/24 | Gig0/1    | OSPF    | 10 | 0    |

##### Router CIPAYUNG
| IP Address       | Interface  | Routing | ID | Area | AS  |
| ---------------- | ---------- | ------- | -- | ---- | --- |
| 10.10.10.10/30   | Se0/0/0    | OSPF    | 10 | 0    | -   |
| 192.168.40.1/24  | Gig0/0.40  | OSPF    | 10 | 0    | -   |
| 200.200.200.1/24 | Gig0/0.200 | OSPF    | 10 | 0    | -   |
| 10.10.10.13/30   | Se0/0/1    | EIGRP   | -  | -    | 100 |

##### Router CIMANGGIS
| IP Address       | Interface  | Routing | AS  |
| ---------------- | ---------- | ------- | --- |
| 10.10.10.14/30   | Se0/0/0    | EIGRP   | 100 |
| 10.10.10.17/30   | Se0/0/1    | EIGRP   | 100 |
| 192.168.50.1/24  | Gig0/0.50  | EIGRP   | 100 |
| 100.100.100.1/24 | Gig0/0.100 | EIGRP   | 100 |

##### Router TAPOS
| IP Address     | Interface  | Routing | AS  |
| -------------- | ---------- | ------- | --- |
| 10.10.10.18/30 | Se0/0/0    | EIGRP   | 100 |
| 172.16.2.1/24  | Gig0/0     | EIGRP   | 100 |
| 80.80.80.1/24  | Gig0/0.100 | EIGRP   | 100 |

</details>

<details>
<summary>3. Konfigurasi IP dan Layanan</summary>

#### 3. Konfigurasi IP dan Layanan
##### Tabel IP Wilayah dan Fungsional
| No | Wilayah   | Fungsional | IP Address        |
| -- | --------- | ---------- | ----------------- |
| 1  | SAWANGAN  | HTTP       | 192.168.10.100/24 |
| 2  | SAWANGAN  | DNS        | 192.168.20.200/24 |
| 3  | CINERE    | NTP        | 192.168.30.30/24  |
| 4  | CIPAYUNG  | EMAIL      | 192.168.40.40/24  |
| 5  | CIMANGGIS | DHCP       | 192.168.50.50/24  |
| 6  | TAPOS     | FTP        | 192.168.60.60/24  |

##### List IP DHCP
| No | Name             | Start IP        | DNS            | TFTP       |
| -- | ---------------- | --------------- | -------------- | ---------- |
| 1  | Helpdesk1        | 100.100.100.100 | 192.168.20.200 | -          |
| 2  | Helpdesk2        | 200.200.200.200 | 192.168.20.200 | -          |
| 3  | VOIP\_TAPOS      | 172.16.2.2      | 192.168.20.200 | 172.16.2.1 |
| 4  | VOIP\_BOJONGSARI | 172.16.1.2      | 192.168.20.200 | 172.16.1.1 |
| 5  | CINERE           | 192.168.1.10    | 192.168.20.200 | -          |

##### List DNS
| No | DNS            | Type     | IP Address     |
| -- | -------------- | -------- | -------------- |
| 1  | etime.pnj      | A Record | 192.168.10.100 |
| 2  | mail.etime.pnj | A Record | 192.168.40.40  |

##### List E-Mail
| No | User  | Password | E-Mail                                              | PC            |
| -- | ----- | -------- | --------------------------------------------------- | ------------- |
| 1  | NISA  | 123      | [nisa@mail.etime.pnj](mailto:nisa@mail.etime.pnj)   | IT Helpdesk 1 |
| 2  | TEGAR | 123      | [tegar@mail.etime.pnj](mailto:tegar@mail.etime.pnj) | IT Helpdesk 2 |

##### VoIP BOJONGSARI
| No | User   | Type          | Number |
| -- | ------ | ------------- | ------ |
| 1  | ALI    | IP PHONE 7960 | 1001   |
| 2  | ATHAYA | IP PHONE 7960 | 1002   |
| 3  | NISA   | IP PHONE 7960 | 1003   |

##### VoIP TAPOS
| No | User  | Type          | Number |
| -- | ----- | ------------- | ------ |
| 1  | TEGAR | IP PHONE 7960 | 2001   |
| 2  | ZETA  | IP PHONE 7960 | 2002   |
| 3  | DETA  | IP PHONE 7960 | 2003   |

##### Access List FTP (Hanya Helpdesk Akses FTP)
| No | Wilayah | Protocol | Status | Source    | Destination |
| -- | ------- | -------- | ------ | --------- | ----------- |
| 1  | TAPOS2  | IP       | PERMIT | Helpdesk1 | Server FTP  |
| 2  | TAPOS2  | IP       | PERMIT | Helpdesk2 | Server FTP  |
| 3  | TAPOS2  | EIGRP    | PERMIT | ANY       | ANY         |
| 4  | TAPOS2  | IP       | DENY   | ANY       | ANY         |

</details>

<details>
<summary>4. Berikut Point Point Pengerjaan</summary>

#### 4. Berikut Point Point Pengerjaan
1. Setiap Server Disetting IP Secara Statik
2. SW L3 DS1 Menjalankan HSRP Pada VLAN 10 dengan group number 110 dan nilai priority 110 dan DS2 Menjadi Backup dengan group number 105
3. SW L3 DS2 Menjalankan HSRP Pada VLAN 20 dengan group number 120 dan nilai priority 110 dan DS2 Menjadi Backup dengan group number 105
4. Gateway yang digunakan oleh server HTTP ialah 192.168.10.1
5. Gateway yang digunakan oleh server DNS ialah 192.168.20.1
6. Setiap Router di setting untuk syncron time dan calendar ke NTP Server
7. Pada Server FTP di Tapos dibuatkan user dengan nama ali dan password 123 yang memiliki permission RWNL
8. Pada switch cipayung menjalankan spanning tree mode rapid pvst+ dengan ketentuan root bridge berada di SW_CIPAYUNG_1 baik vlan 40 dan 200
9. SW_CIPAYUNG_1 terdapat po1 mengarah SW_CIPAYUNG_2 dengan mode active
10. SW_CIPAYUNG_1 terdapat po2 mengarah SW_CIPAYUNG_3 dengan mode auto
11. SW_CIPAYUNG_2 terdapat po1 mengarah SW_CIPAYUNG_1 dengan mode passive
12. SW_CIPAYUNG_3 terdapat po1 mengarah SW_CIPAYUNG_1 dengan mode dessireble
13. Pada SW_CIMANGGIS_1 menjalankan spanning tree mode pvst dengan ketentuan root bridge berada di SW_CIMANGGIS_1 baik vlan 50 dan 100
14. SW_CIMANGGIS_1 terdapat po1 mengarah SW_CIMANGGIS_2 dengan mode active
15. SW_CIMANGGIS_1 terdapat po2 mengarah SW_CIMANGGIS_3 dengan mode auto
16. SW_CIMANGGIS_2 terdapat po1 mengarah SW_CIMANGGIS_1 dengan mode active
17. SW_CIMANGGIS_3 terdapat po1 mengarah SW_CIMANGGIS_1 dengan mode dessireble
18. Pada layanan VOIP Baik Bojongsari dan juga Tapos dapat berkomunikasi antar server VOIP
19. Pada layanan VOIP Baik Bojongsari dan juga Tapos ephone-dn berjumlah 5
20. Pada Router CIPAYUNG merupakan backbone router yang menjalankan resdistribusi routing

</details>

---

### Jawaban
#### A. Sawangan
##### SAWANGAN (ROUTER)
```bash
hostname SAWANGAN
ntp server 192.168.30.30
int lo0
 ip add 3.3.3.3 255.255.255.255
int se0/0/0
 ip add 10.10.10.1 255.255.255.252
 no sh
int gig 0/0
 ip add 172.16.10.1 255.255.255.252
 no sh
int gig 0/1
 ip add 172.16.20.1 255.255.255.252
 no sh

router ospf 10
 network 10.10.10.0 0.0.0.3 area 0
 network 172.16.10.0 0.0.0.3 area 0
 network 172.16.20.0 0.0.0.3 area 0
```

##### DS1 (MLS)
```bash
hostname DS1
ntp server 192.168.30.30
ip routing
vlan 10
vlan 20

int lo0
 ip add 1.1.1.1 255.255.255.255
int fa 0/1
 no sw
 ip add 172.16.10.2 255.255.255.252
int vlan 10
 ip add 192.168.10.10 255.255.255.0
int vlan 20
 ip add 192.168.20.20 255.255.255.0
int ra fa 0/2-4
 sw trunk encapsulation dot1q 
 sw mode tr

router ospf 10
 network 172.16.10.0 0.0.0.3 area 0
 network 192.168.10.0 0.0.0.255 area 0
 network 192.168.20.0 0.0.0.255 area 0

int vlan 10
 standby 110 priority 110
 standby 110 preempt 
 standby 110 ip 192.168.10.1
int vlan 20
 standby 105 preempt 
 standby 105 ip 192.168.20.1
```

##### DS2 (MLS)
```bash
hostname DS2
ntp server 192.168.30.30
ip routing
vlan 10
vlan 20

int lo0
 ip add 2.2.2.2 255.255.255.255
int fa 0/1
 no sw
 ip add 172.16.20.2 255.255.255.252
int vlan 10
 ip add 192.168.10.11 255.255.255.0
int vlan 20
 ip add 192.168.20.21 255.255.255.0
int ra fa 0/2-4
 sw trunk encapsulation dot1q 
 sw mode tr

router ospf 10
 network 172.16.10.0 0.0.0.3 area 0
 network 192.168.10.0 0.0.0.255 area 0
 network 192.168.20.0 0.0.0.255 area 0

int vlan 20
 standby 120 priority 110
 standby 120 preempt 
 standby 120 ip 192.168.20.1
int vlan 10
 standby 105 preempt 
 standby 105 ip 192.168.10.1
```

##### SW_SAWANGAN_1
```bash
hostname SW_SAWANGAN_1
vlan 10
vlan 20

int ra fa 0/1-2
 sw mode tr
int fa 0/3
 sw acc vl 10
```

##### SW_SAWANGAN_2
```bash
hostname SW_SAWANGAN_2
vlan 10
vlan 20

int ra fa 0/1-2
 sw mode tr
int fa 0/3
 sw acc vl 20
```

##### HTTP (SERVER)
- enable http, and https in services
- setting ip
  - ipv4            : 192.168.10.100/24
  - default gateway : 192.168.10.1
  - dns             : 192.168.20.200

##### DNS (SERVER)
- enable dns in serivices
  - add record
    | No | DNS            | Type     | IP Address     |
    | -- | -------------- | -------- | -------------- |
    | 1  | etime.pnj      | A Record | 192.168.10.100 |
    | 2  | mail.etime.pnj | A Record | 192.168.40.40  |
- setting ip
  - ipv4            : 192.168.20.200/24
  - default gateway : 192.168.20.1

---

#### B. Bojongsari
##### BOJONGSARI (ROUTER)
```bash
hostname BOJONGSARI
ntp server 192.168.30.30
int lo0
 ip add 4.4.4.4 255.255.255.255
int se0/0/0
 ip add 10.10.10.2 255.255.255.252
 no sh
int se0/0/1
 ip add 10.10.10.5 255.255.255.252
 no sh
int gig0/0
 ip add 172.16.1.1 255.255.255.0
 no sh

router ospf 10
 network 10.10.10.0 0.0.0.3 area 0
 network 10.10.10.4 0.0.0.3 area 0
 network 172.16.1.0 0.0.0.255 area 0

! config telepony service dilakukan ketika sudah mengconfigurasi ip seluruh router dan ospf, dan buat dhcp di cimanggis
telephony-service 
 max-ephones 5
 max-dn 5
 ip source-address 172.16.1.1 port 2000
 auto assign 1 to 5
int gig0/0
 ip helper-address 192.168.50.50

ephone-dn 1
 number 1001
ephone-dn 2
 number 1002
ephone-dn 3
 number 1003

dial-peer voice 1 voip 
 destination-pattern 200*
 session target ipv4:172.16.2.1
```

##### SW_BOJONGSARI
```bash
hostname SW_BOJONGSARI
ntp server 192.168.30.30
int fa 0/1
 sw mode tr
int ra fa 0/2-3
 sw voice vlan 1
 sw mode acc
```

#### C. CINERE
##### CINERE (ROUTER)
````bash
hostname CINERE
ntp server 192.168.30.30
int lo0
 ip add 5.5.5.5 255.255.255.255
int se0/0/0
 ip add 10.10.10.6 255.255.255.252
 no sh
int se0/0/1
 ip add 10.10.10.9 255.255.255.252
 no sh
int gig0/0
 ip add 192.168.30.1 255.255.255.0
 no sh
int gig0/1
 ip add 192.168.1.1 255.255.255.0
 no sh
 ip helper-address 192.168.50.50

router ospf 10
 network 10.10.10.4 0.0.0.3 area 0
 network 10.10.10.8 0.0.0.3 area 0
 network 192.168.1.0 0.0.0.255 area 0
 network 192.168.30.0 0.0.0.255 area 0
````

##### SW_CINERE
```bash
hostname SW_CINERE
int fa 0/1
 sw mode tr
```

##### NTP (SERVER)
- setting ip
  - ipv4: 192.168.30.30/24
  - gateway: 192.168.30.1
  - dns: 192.168.20.200
- seting service ntp, enable ntp

##### WIDI, TRIA, ZHAFIA
- enable ipv4 ip dhcp

#### D. CIPAYUNG
##### CIPAYUNG (ROUTER)
```bash
hostname CIPAYUNG
ntp server 192.168.30.30
int lo0
 ip add 6.6.6.6 255.255.255.255
int se0/0/0
 ip add 10.10.10.10 255.255.255.252
 no sh
int se0/0/1
 ip add 10.10.10.13 255.255.255.252
 no sh
int gig0/0
 no sh
int gig0/0.40
 encapsulation dot1Q 40
 ip add 192.168.40.1 255.255.255.0
int gig0/0.200
 encapsulation dot1Q 200
 ip add 200.200.200.1 255.255.255.0
 ip helper-address 192.168.50.50

router ospf 10
 network 10.10.10.8 0.0.0.3 area 0
 network 192.168.40.0 0.0.0.255 area 0
 network 200.200.200.0 0.0.0.255 area 0
 ! redistribute eigrp 100 
 redistribute eigrp 100 subnets
router eigrp 100
 no auto-summary
 network 10.10.10.12 0.0.0.3
 ! redistribute ospf 10
 redistribute ospf 10 metric 10000 100 255 1 1500
```

##### SW_CIPAYUNG_1
```bash
hostname SW_CIPAYUNG_1
vlan 40
vlan 200
spanning-tree mode rapid-pvst
spanning-tree vlan 40 root primary 
spanning-tree vlan 200 root primary

int fa0/1
 sw mode tr
int ra fa 0/2-3
 channel-group 1 mode active
 channel-protocol lacp
int ra fa 0/4-5
 channel-group 1 mode auto
 channel-protocol pagp
int port-channel 1
 sw mode tr
int port-channel 2
 sw mode tr
```

##### SW_CIPAYUNG_2
```bash
hostname SW_CIPAYUNG_2
vlan 40
vlan 200
spanning-tree mode rapid-pvst
spanning-tree vlan 40 root secondary 

int ra fa 0/1-2
 channel-group 1 mode passive
 channel-protocol lacp
int fa 0/3
 sw mode tr
int fa 0/4
 sw acc vlan 40
int port-channel 1
 sw mode tr
 spanning-tree vlan 200 cost 100
```

##### SW_CIPAYUNG_3
```bash
hostname SW_CIPAYUNG_3
vlan 40
vlan 200
spanning-tree mode rapid-pvst
spanning-tree vlan 200 root secondary 

int ra fa 0/1-2
 channel-group 1 mode desirable
 channel-protocol pagp
int fa 0/3
 sw mode tr
int fa 0/4
 sw acc vlan 200
int port-channel 1
 sw mode tr
 spanning-tree vlan 40 cost 100
```

##### EMAIL (SERVER)
- setting ip
  - ipv4: 192.168.40.40/24
  - gateway: 192.168.40.1
  - dns: 192.168.20.200
- setting mail server
  - enable the mail server, SMTP, and POP3 service enable
  - setting domain name with: **mail.etime.pnj**
  - add the user
    | No | User  | Password | E-Mail                                              | PC            |
    | -- | ----- | -------- | --------------------------------------------------- | ------------- |
    | 1  | NISA  | 123      | [nisa@mail.etime.pnj](mailto:nisa@mail.etime.pnj)   | IT Helpdesk 1 |
    | 2  | TEGAR | 123      | [tegar@mail.etime.pnj](mailto:tegar@mail.etime.pnj) | IT Helpdesk 2 |

##### IT Helpdesk 2 (PC)
- enable ipv4 ip dhcp
- setting name=tegar, email=tegar@mail.etime.pnj, server=mail.etime.pnj cred=tegar:123

#### E. CIMANGGIS
##### CIMANGGIS (ROUTER)
```bash
hostname CIMANGGIS
ntp server 192.168.30.30
int lo0
 ip add 7.7.7.7 255.255.255.255
int se0/0/0
 ip add 10.10.10.14 255.255.255.252
 no sh
int se0/0/1
 ip add 10.10.10.17 255.255.255.252
 no sh
int gig0/0
 no sh
int gig0/0.50
 encapsulation dot1Q 50
 ip add 192.168.50.1 255.255.255.0
int gig0/0.100
 encapsulation dot1Q 100
 ip add 100.100.100.1 255.255.255.0
 ip helper-address 192.168.50.50

router eigrp 100
 no auto-summary
 network 10.10.10.12 0.0.0.3
 network 10.10.10.16 0.0.0.3
 network 192.168.50.0 0.0.0.255
 network 100.100.100.0 0.0.0.255
```

##### SW_CIMANGGIS_1
```bash
hostname SW_CIMANGGIS_1
vlan 50
vlan 100
spanning-tree mode pvst
spanning-tree vlan 50 root primary 
spanning-tree vlan 100 root primary

int fa 0/1
 sw mode tr
int ra fa 0/2-3
 channel-group 1 mode active 
 channel-protocol lacp
int ra fa 0/4-5
 channel-group 2 mode auto
 channel-protocol pagp
int port-channel 1
 sw mode tr
int port-channel 2
 sw mode tr
```

##### SW_CIMANGGIS_2
```bash
hostname SW_CIMANGGIS_2
vlan 50
vlan 100
spanning-tree mode pvst 
spanning-tree vlan 50 root secondary 

int ra fa 0/1-2
 channel-group 1 mode active 
 channel-protocol lacp
int fa 0/3
 sw mode tr
int fa 0/4
 sw acc vlan 50
int port-channel 1
 sw mode tr
 spanning-tree vlan 100 cost 100
```

##### SW_CIMANGGIS_3
```bash
hostname SW_CIMANGGIS_3
vlan 50
vlan 100
spanning-tree mode pvst 
spanning-tree vlan 100 root secondary 

int ra fa 0/1-2
 channel-group 1 mode desirable
 channel-protocol pagp
int fa 0/3
 sw mode tr
int fa 0/4
 sw acc vlan 100
int port-channel 1
 sw mode tr
 spanning-tree vlan 50 cost 100
```

##### DHCP (SERVER)
- setting ip
  - ipv4: 192.168.50.50/24
  - gateway: 192.168.50.1
  - dns: 192.168.20.200
- setting service dhcp, dan enable servicenya
  | No | Name             | Start IP        | DNS            | TFTP       |
  | -- | ---------------- | --------------- | -------------- | ---------- |
  | 1  | Helpdesk1        | 100.100.100.100 | 192.168.20.200 | -          |
  | 2  | Helpdesk2        | 200.200.200.200 | 192.168.20.200 | -          |
  | 3  | VOIP\_TAPOS      | 172.16.2.2      | 192.168.20.200 | 172.16.2.1 |
  | 4  | VOIP\_BOJONGSARI | 172.16.1.2      | 192.168.20.200 | 172.16.1.1 |
  | 5  | CINERE           | 192.168.1.10    | 192.168.20.200 | -          |
- jangan lupa subnetmasknya soalnya sering lupa :v

##### IT Helpdesk 1 (PC)
- enable ipv4 ip dhcp
- setting name=nisa, email=nisa@mail.etime.pnj, server=mail.etime.pnj cred=nisa:123

#### F. TAPOS (BELUM CONFIG)
##### TAPOS1 (ROUTER)
```bash
hostname TAPOS1
ntp server 192.168.30.30

int lo0
 ip add 8.8.8.8 255.255.255.255
int se0/0/0
 ip add 10.10.10.18 255.255.255.252
 no sh
int gig0/0
 ip add 172.16.2.1 255.255.255.0
 no sh
! int gig0/0.100
 ! encapsulation dot1Q 100
 ! ip add 80.80.80.1 255.255.255.0
int gig0/1
 ip add 80.80.80.1 255.255.255.0
 no sh

router eigrp 100
 no auto-summary 
 network 10.10.10.16 0.0.0.3
 network 172.16.2.0 0.0.0.255
 network 80.80.80.0 0.0.0.255

! config telepony service dilakukan ketika sudah mengconfigurasi ip seluruh router dan ospf, dan buat dhcp di cimanggis
telephony-service 
 max-ephones 5
 max-dn 5
 ip source-address 172.16.2.1 port 2000
 auto assign 1 to 5
int gig0/0
 ip helper-address 192.168.50.50

ephone-dn 1
 number 2001
ephone-dn 2
 number 2002
ephone-dn 3
 number 2003

dial-peer voice 1 voip 
 destination-pattern 100*
 session target ipv4:172.16.1.1
```

##### TAPOS2
```bash
hostname TAPOS2
ntp server 192.168.30.30

int lo0
 ip add 9.9.9.9 255.255.255.255
int gig0/0
 ip add 80.80.80.2 255.255.255.0
 no sh
int gig0/1
 ip add 192.168.60.1 255.255.255.0
 no sh

router eigrp 100
 no auto-summary 
 network 80.80.80.80 0.0.0.255
 network 192.168.60.0 0.0.0.255

ip access-list extended ACL_FTP
 permit ip 100.100.100.100 0.0.0.0 192.168.60.60 0.0.0.0
 permit ip 200.200.200.200 0.0.0.0 192.168.60.60 0.0.0.0
 permit eigrp any any
 deny ip any any

int gig0/1
 ip access-group ACL_FTP out
```

##### SW_TAPOS
```bash
hostname SW_TAPOS
int fa0/1
 sw mode tr
int ra fa 0/2-4
 sw mode acc
 sw voice vlan 1
```

##### FTP (SERVER)
- setting ip
  - ipv4: 192.168.60.60/24
  - gateway: 192.168.60.1
  - dns: 192.168.20.200
- enable ftp server
  - add user: ali, pass: 123, perm: RWNL

---

##### debugging

```bash
show ip route
show ip proto
clear ip route
```