# soal
## network address
- s.id/info-network-netcomp
- https://docs.google.com/spreadsheets/d/1f2KATyoiJ02d7In1hCDQwvCDdN6rx92E5DOc6yr_Q-Q/edit?gid=0#gid=0

<details>
<summary>List Network</summary>

### CORE-ARJUNA-1
#### R-Border-INTERNET
* **Lo0:** 10.1.1.1/32
* **Gi0/2:** 103.10.1.2/29, Gateway: 103.10.1.1
  * Group 1: SW ARJUNA 1
  * Group 2: SW ARJUNA 2
* **Gi0/0:** Subnet 9 IP Ganjil
* **Gi0/1:** Subnet 14 IP Genap

#### CORE Brawijaya
* **Lo0:** 10.2.2.2/32
* **Gi0/1:** Subnet 9 IP Genap (Group 1: SW ARJUNA 2)
* **Gi0/2:** Subnet 24 IP Ganjil (Group 2: SW ARJUNA 1)
* **IT Engineer:** Subnet 16 IP Terakhir
* **Marketing:** Subnet 13 IP Terakhir
* **Accounting:** Subnet 7 IP Terakhir
* **MGMT (VLAN 30):** 192.168.99.1/29

### CORE-ARJUNA-2
#### CORE Arjuna 1
* **Lo0:** 10.3.3.3/32
* **Gi0/1:** Subnet 23 IP Ganjil (Group 1: CORE ARJUNA 2)
* **Gi0/2:** Subnet 34 IP Ganjil (Group 2: CORE ARJUNA 1)
* **BOD:** 192.168.30.157/28
* **Manager:** 192.168.30.61/28
* **MGMT (VLAN 40):** 192.168.99.10/29

#### CORE Arjuna 2
* **Lo0:** 10.4.4.4/32
* **Gi0/1:** Subnet 24 IP Genap
* **Gi0/2:** Subnet 34 IP Genap
* **BOD:** 192.168.30.158/28
* **Manager:** 192.168.30.62/28
* **MGMT (VLAN 40):** 192.168.99.11/29

### CORE Server Farm
* **Lo0:** 10.5.5.5/32
* **Gi0/1:** Subnet 14 IP Ganjil
* **Gi0/2:** Subnet 23 IP Genap
* **Server Farm:** 192.168.70.254/24

### Switches
* **SW-Brawijaya-1:** MGMT (VLAN 30): 192.168.99.2/29
* **SW-Brawijaya-2:** MGMT (VLAN 30): 192.168.99.3/29
* **SW-Arjuna-1:** MGMT (VLAN 40): 192.168.99.12/29
* **SW-Arjuna-2:** MGMT (VLAN 40): 192.168.99.13/29

</details>

# solve
## EXTERNAL
### R-BORDER-INTERNET
```bash
hostname R-BORDER-INTERNET
ip domain-name netcomp.com
username Cisco privilege 15 secret Cisco@123

! Modulus 2^10 = 1024 → ini panjang key RSA
! crypto key generate rsa modulus 1024
crypto key generate rsa
crypto key generate rsa
yes
1024

ip ssh version 2
line vty 0 4
 transport input ssh
 session-limit 5 
 login local

int ra gig0/0-2
 no sh
int lo0
 ip add 10.1.1.1 255.255.255.255
int gig0/0
 ip add 10.10.30.33 255.255.255.252
int gig0/1
 ip add 10.10.30.54 255.255.255.252
int gig0/2
 ip address 103.10.1.2 255.255.255.248

ip default-gateway 103.10.1.1
ip route 0.0.0.0 0.0.0.0 103.10.1.1 

router ospf 30
 router-id 10.1.1.1
 network 10.1.1.1 0.0.0.0 area 0
 network 10.10.30.32 0.0.0.3 area 0
 network 10.10.30.52 0.0.0.3 area 0
 network 103.10.1.0 0.0.0.7 area 0
 default-information originate

ip access-list standard IP-LAN
 permit 192.168.0.0 0.0.255.255
 permit 10.0.0.0 0.0.0.255
 
int gig0/2
 ip nat outside
int ra gig0/0-1
 ip nat inside

ip nat inside source list IP-LAN interface gig0/2 overload
```

### Laptop Public Client
- ip: 192.168.10.10/24
- gate: 192.168.10.1, dns: 8.8.8.8

## SERVER-FARM
### CORE-SERVER-FARM
```bash
hostname CORE-SERVER-FARM
ip routing
ip domain-name netcomp.com
username Cisco privilege 15 secret Cisco@123
crypto key generate rsa
yes
1024

ip ssh version 2
line vty 0 4
 transport input ssh
 session-limit 5 
 login local

int lo0
 ip add 10.5.5.5 255.255.255.255
int gig0/1
 no sw
 no sh
 ip add 10.10.30.53 255.255.255.252
int gig0/2
 no sw
 no sh
 ip add 10.10.30.90 255.255.255.252

vlan 70
 name "Server Farm"
int ra fa 0/1-3
 sw mode acc
 sw acc vlan 70
int vlan 70
 ip add 192.168.70.254 255.255.255.0

router ospf 30
 router-id 10.5.5.5
 passive-interface Vlan70
 network 10.5.5.5 0.0.0.0 area 0
 network 10.10.30.52 0.0.0.3 area 0
 network 10.10.30.88 0.0.0.3 area 0
 network 192.168.70.0 0.0.0.255 area 0
```

### DHCP Server
- config ip: 192.168.70.30/24 gateway: 192.168.70.254, dns: 8.8.8.8
- enable service dhcp server
  - BOD - 192.168.30.145 - 192.168.70.20 - 192.168.30.146/28 - 14
  - Manager - 192.168.30.49 - 192.168.70.20 - 92.168.30.50/28 - 14
  - Accounting - 192.168.30.110 - 192.168.70.20 - 192.168.30.97/28 - 14
  - Marketing - 192.168.30.206 - 192.168.70.20 - 192.168.30.193/28 - 14
  - IT-Engineer - 192.168.30.254 - 192.168.70.20 - 192.168.30.240/28 - 14

### DNS Server
- config ip: 192.168.70.20/24 gateway: 192.168.70.254, dns: 8.8.8.8
  - A - netcomp.com - 192.168.70.10
  - A - google.com - 8.8.8.8

### WEB Server
- config ip: 192.168.70.10/24 gateway: 192.168.70.254, dns: 8.8.8.8
- enable service http & https

## ARJUNA
### CORE-ARJUNA-1
```bash
hostname CORE-ARJUNA-1
ip routing
ip domain-name netcomp.com
username Cisco privilege 15 secret Cisco@123
crypto key generate rsa
yes
1024

ip ssh version 2
line vty 0 4
 transport input ssh
 session-limit 5 
 login local

spanning-tree mode rapid-pvst
spanning-tree vlan 10 priority 12288
spanning-tree vlan 20 priority 20480
spanning-tree vlan 99 priority 4096

int lo0
 ip add 10.3.3.3 255.255.255.255
int gig0/1
 no sw
 no sh
 ip add 10.10.30.89 255.255.255.252
int gig0/2
 no sw
 no sh
 ip add 10.10.30.133 255.255.255.252

int ra fa0/1-2
 channel-group 1 mode active
 channel-protocol lacp
int ra fa0/3-4
 channel-group 2 mode active
 channel-protocol lacp
int po1
 sw trunk encap dot1q
 sw mode tr
int po2
 sw trunk encap dot1q
 sw mode tr

vlan 10
 name BOD
vlan 20
 name Manager
vlan 40
 name MGMT

int vlan 10
 ip add 192.168.30.157 255.255.255.240
 ip helper-address 192.168.70.30
 standby 10 ip 192.168.30.145
 standby 10 priority 105
 standby 10 preempt
int vlan 20
 ip add 192.168.30.61 255.255.255.248
 ip helper-address 192.168.70.30
 standby 20 ip 192.168.30.49
 standby 20 preempt
int vlan 40
 ip add 192.168.99.10 255.255.255.252
 ip helper-address 192.168.70.30
 standby 40 ip 192.168.99.9
 standby 40 priority 105
 standby 40 preempt

router ospf 30
 router-id 10.3.3.3
 passive-interface Vlan10
 passive-interface Vlan20
 passive-interface Vlan40
 network 10.3.3.3 0.0.0.0 area 0
 network 10.10.30.88 0.0.0.3 area 0
 network 10.10.30.132 0.0.0.3 area 0
 network 192.168.30.144 0.0.0.15 area 0
 network 192.168.30.48 0.0.0.15 area 0
 network 192.168.99.8 0.0.0.3 area 0
```

### CORE-ARJUNA-2
```bash
hostname CORE-ARJUNA-2
ip routing
ip domain-name netcomp.com
username Cisco privilege 15 secret Cisco@123
crypto key generate rsa
yes
1024

ip ssh version 2
line vty 0 4
 transport input ssh
 session-limit 5 
 login local

spanning-tree mode rapid-pvst
spanning-tree vlan 10 priority 20480
spanning-tree vlan 20 priority 4096
spanning-tree vlan 99 priority 8192

int lo0
 ip add 10.4.4.4 255.255.255.255
int gig0/1
 no sw
 no sh
 ip add 10.10.30.94 255.255.255.252
int gig0/2
 no sw
 no sh
 ip add 10.10.30.134 255.255.255.252

int ra fa0/1-2
 channel-group 1 mode active
 channel-protocol lacp
int ra fa0/3-4
 channel-group 2 mode active
 channel-protocol lacp
int po1
 sw trunk encap dot1q
 sw mode tr
int po2
 sw trunk encap dot1q
 sw mode tr

vlan 10
 name BOD
vlan 20
 name Manager
vlan 40
 name MGMT

int vlan 10
 ip add 192.168.30.158 255.255.255.240
 ip helper-address 192.168.70.30
 standby 10 ip 192.168.30.145
 standby 10 preempt
int vlan 20
 ip add 192.168.30.62 255.255.255.248
 ip helper-address 192.168.70.30
 standby 20 ip 192.168.30.49
 standby 20 priority 105
 standby 20 preempt
int vlan 40
 ip add 192.168.99.11 255.255.255.252
 ip helper-address 192.168.70.30
 standby 40 ip 192.168.99.9
 standby 40 preempt

router ospf 30
 router-id 10.4.4.4
 passive-interface Vlan10
 passive-interface Vlan20
 passive-interface Vlan40
 network 10.4.4.4 0.0.0.0 area 0
 network 10.10.30.92 0.0.0.3 area 0
 network 10.10.30.132 0.0.0.3 area 0
 network 192.168.30.144 0.0.0.15 area 0
 network 192.168.30.48 0.0.0.15 area 0
 network 192.168.99.8 0.0.0.3 area 0
```

### SW-ARJUNA-1
```bash
hostname SW-ARJUNA-1

vlan 10
 name BOD
vlan 20
 name Manager
vlan 40
 name MGMT

int vlan 40
 ip add 192.168.99.12 255.255.255.248

int ra fa0/1-2
 channel-group 1 mode active
 channel-protocol lacp
int ra fa0/3-4
 channel-group 2 mode active
 channel-protocol lacp
int po1
 sw mode tr
int po2
 sw mode tr

int fa 0/5
 sw mode acc
 sw acc vlan 10
int fa 0/6
 sw mode acc
 sw acc vlan 20
```

### SW-ARJUNA-2
```bash
hostname SW-ARJUNA-2

vlan 10
 name BOD
vlan 20
 name Manager
vlan 40
 name MGMT

int vlan 40
 ip add 192.168.99.13 255.255.255.248

int ra fa0/1-2
 channel-group 1 mode active
 channel-protocol lacp
int ra fa0/3-4
 channel-group 2 mode active
 channel-protocol lacp
int po1
 sw mode tr
int po2
 sw mode tr

int fa 0/5
 sw mode acc
 sw acc vlan 20
int fa 0/6
 sw mode acc
 sw acc vlan 10
```

---

## BRAWIJAYA
### CORE-BRAWIJAYA
```bash
hostname CORE-BRAWIJAYA
ip routing
ip domain-name netcomp.com
username Cisco privilege 15 secret Cisco@123
crypto key generate rsa
yes
1024

ip ssh version 2
line vty 0 4
 transport input ssh
 session-limit 5 
 login local

int lo0
 ip add 10.2.2.2 255.255.255.255
int gig0/1
 no sw
 no sh
 ip add 10.10.30.53 255.255.255.252
int gig0/2
 no sw
 no sh
 ip add 10.10.30.93 255.255.255.252

int ra fa 0/1-2
 sw trunk encap dot1q
 sw mode tr

vtp mode server
vtp domain netcomp.com
vtp pass Cisco@123

spanning-tree vlan 30 root primary 

vlan 30
 name MGMT
vlan 100
 name IT-Engineer
vlan 200
 name Marketing
vlan 300
 name Accounting

int vlan 30
 ip add 192.168.99.1 255.255.255.248
int vlan 100
 ip add 192.168.30.254 255.255.255.240
 ip helper-address 192.168.70.30
int vlan 200
 ip add 192.168.30.206 255.255.255.240
 ip helper-address 192.168.70.30
int vlan 300
 ip add 192.168.30.110 255.255.255.240
 ip helper-address 192.168.70.30

router ospf 10
 router-id 10.2.2.2
 passive-interface vlan30
 passive-interface Vlan100
 passive-interface Vlan200
 passive-interface Vlan300
 network 10.2.2.2 0.0.0.0 area 0
 network 10.10.30.52 0.0.0.3 area 0
 network 10.10.30.92 0.0.0.3 area 0
 network 192.168.30.240 0.0.0.15 area 0
 network 192.168.30.192 0.0.0.15 area 0
 network 192.168.30.96 0.0.0.15 area 0
```

### SW-BRAWIJAYA-1
```bash
hostname SW-BRAWIJAYA-1
vtp mode client
vtp domain netcomp.com
vtp pass Cisco@123

spanning-tree vlan 100 root primary 
spanning-tree vlan 200 root primary 

int ra fa 0/1-2
 sw mode tr
int ra fa 0/3-4
 sw mode acc
 sw acc vlan 100
 spanning-tree portfast
 spanning-tree bpduguard enable
int ra fa 0/5-6
 sw mode acc
 sw acc vlan 200
 spanning-tree portfast
 spanning-tree bpduguard enable
```

### SW-BRAWIJAYA-2
```bash
hostname SW-BRAWIJAYA-2
vtp mode client
vtp domain netcomp.com
vtp pass Cisco@123

spanning-tree vlan 300 root primary 

int ra fa 0/1-2
 sw mode tr
int ra fa 0/3-4
 sw mode acc
 sw acc vlan 300
 spanning-tree portfast
 spanning-tree bpduguard enable
int ra fa 0/5-6
 sw mode acc
 sw acc vlan 200
 spanning-tree portfast
 spanning-tree bpduguard enable
```