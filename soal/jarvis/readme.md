```
########## router 1
interface Loopback1
 ip address 1.1.1.1 255.255.255.255
!
interface FastEthernet0/0
 ip address 10.10.10.1 255.255.255.0
 duplex full
!
router bgp 100
 bgp router-id 10.10.10.1
 bgp log-neighbor-changes
 network 1.1.1.1 mask 255.255.255.255
 network 10.10.10.0 mask 255.255.255.0
 redistribute connected
 neighbor 10.10.10.2 remote-as 123
!

########## router 2
interface Loopback1
 ip address 2.2.2.2 255.255.255.255
!
interface FastEthernet0/0
 ip address 10.10.10.2 255.255.255.0
 duplex full
!

interface GigabitEthernet4/0
 ip address 11.11.11.1 255.255.255.0
 negotiation auto
!
interface GigabitEthernet5/0
 ip address 33.33.33.1 255.255.255.0
 negotiation auto
!
router ospf 10
 network 2.2.2.2 0.0.0.0 area 0
 network 11.11.11.0 0.0.0.255 area 0
 network 33.33.33.0 0.0.0.255 area 0
!
router bgp 123
 bgp router-id 10.10.10.2
 bgp log-neighbor-changes
 redistribute connected
 redistribute ospf 10
 neighbor 3.3.3.3 remote-as 123
 neighbor 4.4.4.4 remote-as 123
 neighbor 10.10.10.1 remote-as 100
!

########## router 3
interface GigabitEthernet4/0
 ip address 11.11.11.2 255.255.255.0
 negotiation auto
!
interface GigabitEthernet5/0
 ip address 22.22.22.1 255.255.255.0
 negotiation auto
!
router ospf 10
 network 3.3.3.3 0.0.0.0 area 0
 network 11.11.11.0 0.0.0.255 area 0
 network 22.22.22.0 0.0.0.255 area 0
!
router bgp 123
 bgp log-neighbor-changes
 redistribute connected
 redistribute ospf 10
 neighbor 2.2.2.2 remote-as 123
 neighbor 4.4.4.4 remote-as 123
!

############### router 4
interface GigabitEthernet4/0
 ip address 22.22.22.2 255.255.255.0
 negotiation auto
!
interface GigabitEthernet5/0
 ip address 33.33.33.2 255.255.255.0
 negotiation auto
!
router ospf 10
 network 20.20.20.0 0.0.0.255 area 0
 network 22.22.22.0 0.0.0.255 area 0
 network 33.33.33.0 0.0.0.255 area 0
!
router bgp 123
 bgp router-id 20.20.20.1
 bgp log-neighbor-changes
 redistribute connected
 redistribute ospf 10
 neighbor 2.2.2.2 remote-as 123
 neighbor 3.3.3.3 remote-as 123
 neighbor 20.20.20.2 remote-as 200
!

############## router 5
interface Loopback1
 ip address 5.5.5.5 255.255.255.255
!
interface FastEthernet0/0
 ip address 20.20.20.2 255.255.255.0
 duplex full
!
router bgp 200
 bgp router-id 20.20.20.2
 bgp log-neighbor-changes
 network 5.5.5.5 mask 255.255.255.255
 network 20.20.20.0 mask 255.255.255.0
 redistribute connected
 neighbor 20.20.20.1 remote-as 123
!
```
