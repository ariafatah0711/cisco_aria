# tugas akhir jarvis
<details open>
<summary>Soal</summary>

JARVISCAMP-NETWORKING
KERJAKAN DENGAN MANDIRI & TELITI.

1. Pastikan hostname tiap perangkat benar.
2. Konfigurasi IP address sesuai dengan topologi.
3. Pada Router ISP gunakan OSPF process id 11.
4. Pada masing-masing vlan, gateway berada di SW-CORE.
5. Jalankan NAT overload menggunakan access-list 1, pada router R-IGW-ABA, agar user bisa akses ke internet.
6. Agar server WEB & DNS dapat diakses via public jalankan NAT Static pada R-IGW-SVR :
- 103.255.2.10 => 172.16.255.10
- 103.255.2.20 => 172.16.255.20
7. DNS Server tambahkan (A Record):
- jarvis.id => 172.16.255.20.
8. Buatlah ACL pada R-IGW-SVR :
- hanya allow traffic https dari any ke 103.255.2.20.
- hanya allow traffic DNS dari any ke 103.255.2.10.

APABILA ADA YANG INGIN DITANYAKAN (SELAIN KONFIGURAS) BISA TANYAKAN DI GRUP, DAN JIKA SUDAH SELESAI JANGAN LUPA DI SCREESHOOT DAN KIRIM FILE KE GC
</details>

<details open>
<summary>Solution</summary>

## bagian kiri bawah
### SW-CORE
```bash
hostname SW-CORE
ip routing
ip route 0.0.0.0 0.0.0.0 172.16.10.1
!
vlan 10
 name APEL
vlan 20
 name NANGKA
vlan 30
 name ANGGUR
vlan 40
 name JAMBU
vlan 99
 name MANAGEMENT
!
interface GigabitEthernet1/0/1
 no switchport
 ip address 172.16.10.2 255.255.255.252
!
interface GigabitEthernet1/0/2
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode active
interface GigabitEthernet1/0/3
 switchport mode trunk
 channel-protocol lacp
 channel-group 2 mode active
interface GigabitEthernet1/0/4
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode active
interface GigabitEthernet1/0/5
 switchport mode trunk
 channel-protocol lacp
 channel-group 2 mode active
!
interface Port-channel1
 switchport mode trunk
interface Port-channel2
 switchport mode trunk
!
interface Vlan10
 ip address 192.168.10.1 255.255.255.0
interface Vlan20
 ip address 192.168.20.1 255.255.255.0
interface Vlan30
 ip address 192.168.30.1 255.255.255.0
interface Vlan40
 ip address 192.168.40.1 255.255.255.0
interface Vlan99
 ip address 10.255.255.1 255.255.255.0
!
ip dhcp excluded-address 192.168.10.1
ip dhcp excluded-address 192.168.20.1
ip dhcp excluded-address 192.168.30.1
ip dhcp excluded-address 192.168.40.1
!
ip dhcp pool APEL
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
 dns-server 103.255.2.10
ip dhcp pool NANGKA
 network 192.168.20.0 255.255.255.0
 default-router 192.168.20.1
 dns-server 103.255.2.10
ip dhcp pool ANGGUR
 network 192.168.30.0 255.255.255.0
 default-router 192.168.30.1
 dns-server 103.255.2.10
ip dhcp pool JAMBU
 network 192.168.40.0 255.255.255.0
 default-router 192.168.40.1
 dns-server 103.255.2.10
 domain-name jarvis.id
!
```

### SW-DISTRI-01
```bash
hostname SW-DISTRI-01
ip default-gateway 10.255.255.1
!
vlan 10
 name APEL
vlan 20
 name NANGKA
vlan 99
 name MANAGEMENT
!
interface FastEthernet0/1
 switchport mode trunk
 channel-protocol lacp
 channel-group 2 mode active
interface FastEthernet0/2
 switchport mode trunk
 channel-protocol lacp
 channel-group 2 mode active
!
interface Port-channel2
 switchport mode trunk
!
int vlan 99
 ip add 10.255.255.2 255.255.255.0
int ra fa 0/3-4
 sw mode tr
```

### SW-DISTRI-02
```bash
hostname SW-DISTRI-02
ip default-gateway 10.255.255.1
!
vlan 30
 name ANGGUR
vlan 40
 name JAMBU
vlan 99
 name MANAGEMENT
!
interface FastEthernet0/1
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode active
interface FastEthernet0/2
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode active
!
interface Port-channel1
 switchport mode trunk
!
int vlan 99
 ip add 10.255.255.3 255.255.255.0
int ra fa 0/3-4
 sw mode tr
```

### SW-ACC-01
```bash
hostname SW-ACC-01
ip default-gateway 10.255.255.1
!
ip default-gateway 10
!
vlan 10
 name APEL
vlan 99
 name MANAGEMENT
!
int fa 0/1
 sw mode tr
int fa 0/2
 sw acc vlan 10
!
int vlan 99
 ip add 10.255.255.4 255.255.255.0
```

### SW-ACC-02
```bash
hostname SW-ACC-02
ip default-gateway 10.255.255.1
!
vlan 20
 name NANGKA
vlan 99
 name MANAGEMENT
!
int fa 0/1
 sw mode tr
int fa 0/2
 sw acc vlan 20
!
int vlan 99
 ip add 10.255.255.5 255.255.255.0
```

### SW-ACC-03
```bash
hostname SW-ACC-03
ip default-gateway 10.255.255.1
!
vlan 30
 name ANGGUR
vlan 99
 name MANAGEMENT
!
int fa 0/1
 sw mode tr
int fa 0/2
 sw acc vlan 30
!
int vlan 99
 ip add 10.255.255.6 255.255.255.0
```

### SW-ACC-04
```bash
hostname SW-ACC-04
ip default-gateway 10.255.255.1
!
vlan 40
 name JAMBU
vlan 99
 name MANAGEMENT
!
int fa 0/1
 sw mode tr
int fa 0/2
 sw acc vlan 40
!
int vlan 99
 ip add 10.255.255.7 255.255.255.0
```

## bagian Router
### R-IGW-ABA
```bash
hostname R-IGW-ABA
ip route 192.168.10.0 255.255.255.0 172.16.10.2
ip route 192.168.20.0 255.255.255.0 172.16.10.2
ip route 192.168.30.0 255.255.255.0 172.16.10.2
ip route 192.168.40.0 255.255.255.0 172.16.10.2
ip route 0.0.0.0 0.0.0.0 103.255.1.1
!
int gig0/0/0
 ip add 172.16.10.1 255.255.255.252
 no sh
int gig0/0/1
 ip add 103.255.1.2 255.255.255.252
 no sh
!
ip access-list standard 1
 permit 192.168.10.0 0.0.0.255
 permit 192.168.20.0 0.0.0.255
 permit 192.168.30.0 0.0.0.255
 permit 192.168.40.0 0.0.0.255
int gig0/0/1
 description *** Link ke Internet ***
 ip nat outside
int gig0/0/0
 description *** Link ke LAN (SW-CORE) ***
 ip nat inside
ip nat inside source list 1 interface gig0/0/1 overload
```

### R-ISP-1
```bash
hostname R-ISP-1
!
int gig0/0/0
 ip add 103.255.1.1 255.255.255.252
 no sh
int gig0/0/1
 ip add 103.255.255.5 255.255.255.252
 no sh
int gig0/0/2
 ip add 103.255.255.9 255.255.255.252
 no sh
!
router ospf 11
 network 103.255.1.0 0.0.0.3 area 0
 network 103.255.255.4 0.0.0.3 area 0
 network 103.255.255.8 0.0.0.3 area 0
```

### R-ISP-2
```bash
hostname R-ISP-2
!
int gig0/0/0
 ip add 103.255.255.6 255.255.255.252
 no sh
int gig0/0/1
 ip add 103.255.255.13 255.255.255.252
 no sh
!
router ospf 11
 network 103.255.255.4 0.0.0.3 area 0
 network 103.255.255.12 0.0.0.3 area 0
```

### R-ISP-3
```bash
hostname R-ISP-3
!
int gig0/0/0
 ip add 103.255.255.10 255.255.255.252
 no sh
int gig0/0/1
 ip add 103.255.255.17 255.255.255.252
 no sh
!
router ospf 11
 network 103.255.255.8 0.0.0.3 area 0
 network 103.255.255.16 0.0.0.3 area 0
```

### R-ISP-4
```bash
hostname R-ISP-4
!
int gig0/0/0
 ip add 103.255.255.18 255.255.255.252
 no sh
int gig0/0/1
 ip add 103.255.255.14 255.255.255.252
 no sh
int gig0/0/2
 ip add 103.255.2.1 255.255.255.0
 no sh
!
router ospf 11
 network 103.255.2.0 0.0.0.255 area 0
 network 103.255.255.12 0.0.0.3 area 0
 network 103.255.255.16 0.0.0.3 area 0
```

### R-IGW-SVR
```bash
hostname R-IGW-SVR
ip route 0.0.0.0 0.0.0.0 103.255.2.1
!
int gig0/0/0
 ip add 103.255.2.2 255.255.255.0
 no sh
int gig0/0/1
 ip add 172.16.255.1 255.255.255.0
 no sh
!
interface gig0/0/0
 description *** Link ke ISP (Publik) ***
 ip nat outside
interface gig0/0/1
 description *** Link ke Server LAN ***
 ip nat inside
! ip nat inside source static 172.16.255.10 103.255.2.10
! ip nat inside source static 172.16.255.20 103.255.2.20
ip nat inside source static 172.16.255.10 103.255.255.10
ip nat inside source static 172.16.255.20 103.255.255.20
!
ip access-list extended ACL-INTERNET
 permit tcp any host 103.255.2.20 eq 443
 permit udp any host 103.255.2.10 eq 53
 permit tcp any host 103.255.2.10 eq 53
 deny ip any any
interface gig0/0/0
 ip access-group ACL-INTERNET in
!
```

## bagian Server
### SW-SVR
```bash
hostname SW-SVR
```

### SVR-WEB
- ip: 172.16.255.20 / 24
- gateway: 172.16.255.1

### SVR-DNS
- ip: 172.16.255.10 / 24
- gateway: 172.16.255.1
- Service
  - A Record : jarvis.id => 103.255.255.20
  - A Record : jarvis.id => 172.16.255.20

</details>
