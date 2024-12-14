# stp
## pengenalan
-  Spanning Tree Protocol (STP) merupakan protocol yang berfungsi mencegah loop pada switch ketika switch menggunakan lebih dari 1 link dengan maksud  redundancy. 
    - STP secara defaultnya diset aktif pada Cisco Catalyst. 
    - STP merupakan  open standard (IEEE 802.1D). STP dapat mencegah: 
        - Broadcast Storm
        - Multiple Frame Copies
        - Database Instability
- stp Portfast => merupakan salahsatu fitur STP. Ketika pertama kali mencolokkan kabel ke switch,
    - perlu waktu agak lama dari proses blocking yang ditandai warna oranye pada lampu indicator untuk menjadi forwarding yang ditandai dengan warna kuning. 
      ```
      STP Port States: 
      Blocking 20 second/no limits 
      Listening 15 second 
      Learning 15 second 
      Forwarding no limits 
      Disable no limits 
      ```
    - Hal ini disebabkan switch melakukan step listening dan learning terlebih dahulu sebelum forward
    - Dari proses blocking, listening dan learning kira-kira dibutuhkan waktu 30 detik
        - Untuk langsung ke forward tanpa melalui listening dan learning maka digunakan portfast. Portfast cocok digunakan untuk port yang mengarah ke end host
    - Untuk port yang mengarah ke switch, maka tidak direkomendasikan karena akan mematikan fungsi STP dalam mencegah looping.

## diference

Base/Critrea | STP | PVST | RSTP | RPVST | MSTP
--- | --- | --- | --- | --- | --- |
Developer/creator | IEEE | Cisco | IEEE	| Cisco | IEEE
Standard | Open-Standard | Proprietary | Open-Standard | Proprietary | Open-Standard
Support VLAN | No | Yes | No | Yes | Yes
Instance | One per switch | One Per VLAN | One per switch | One Per VLAN | One Per VLAN
Support PortFast | No | Yes | No | Yes | No
Support EtherChannel | No | Yes | No | Yes | No
Runs on | All switches | Only on Cisco switches | All switches | Only on Cisco switches | All switches
Convergence	| Slow | moderate | fast | Fast | Fast

## jenis stp
- Open Standard : STP (802.1D), Rapid STP (802.1W), Multiple Spanning Tree MST (802.1S)
- Cisco Proprietary : PVST (Per Vlan Spanning Tree), PVST+, Rapid PVST.

## Cara kerja STP
1. Ketika STP aktif, masing-masing switch akan mengirimkan frame khusus satu sama lain yang disebut **Bridge Protocol Data Unit (BPDU)**
2. Menentukan Root Bridge
    - Switch dengan bridge id terendah akan menjadi root bridge. Bridge id = priority + MAC address. 
    - Dalam satu LAN hanya ada satu switch sebagai root bridge, switch lain menjadi non-root bridge. Default priority adalah 32768 dan bisa diubah
3.  Menentukan Root Port
    - Yang menjadi root port adalah path yang paling dekat dengan root bridge. 
        - Untuk setiap non-root bridge hanya punya 1 root port
4. Menentukan designated port dan non-designated port
    - Designated port adalah port yang forward dan non designated port adalah port yang blocking. 
    - Untuk root bridge semua portnya adalah designated port.
    - Switch dengan priority terendah, salah satu portnya akan menjadi non-designated port atau port blocking. 
        - Jika priority sama maka akan dilihat MAC address terendah
    - STP akan membuat blocking atau shutdown pada salahsatu port untuk mencegah terjadinya loop. 
        - Ketika link utama down maka port yang sebelumnya blocking akan menjadi forward. 
        - Port blocking ditunjukkan dengan warna merah. 
    - STP menggunakan link cost calculation untuk menentukan root port pada non-root switch. 
        - 10 Gbps = Cost 2
        - 1 Gbps = Cost 4
        - 100 Mbps = Cost 19
        - 10 Mbps = Cost 100

# configuration
## spt
```bash
Switch1#sh spanning-tree 
VLAN0001
 Spanning tree enabled protocol ieee
 Root ID Priority 32769 # default nya adalah 32769

spanning-tree vlan 1 priority 0 # merubah root bridge nya
spanning-tree vlan 1 priority 4096 # ketika merubah priority harus kelipatan 4096
# saat kita merubah priority nantinya id root bridge nya akan bertambah 1

int f0/1
speed 10 # memindahkan blocking port dari fa0/2 ke fa 0/1
```

## stp portfast
```bash
int range fa0/1-4
spanning-tree portfast
```

## show
```
# show spanning-tree
```