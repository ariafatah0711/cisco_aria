# soal

## network address
- s.id/info-network-netcomp
- https://docs.google.com/spreadsheets/d/1f2KATyoiJ02d7In1hCDQwvCDdN6rx92E5DOc6yr_Q-Q/edit?gid=0#gid=0

## Data Port Bundling Network Arjuna
### CORE-ARJUNA-1
#### R-Border-INTERNET

* **Lo0:** 10.1.1.1/32
* **Gi0/2:** 103.10.1.2/29, Gateway: 103.10.1.1

  * Group 1: SW ARJUNA 1
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
