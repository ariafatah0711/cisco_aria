# SOAL UTS A 2025_version2
## topology

## ACC1_Branch
```sh
ACC1_Branch#show run
Building configuration...

Current configuration : 1360 bytes
version 15.0
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname ACC1_Branch
spanning-tree mode pvst
spanning-tree extend system-id
interface Port-channel1
 switchport mode trunk
interface FastEthernet0/1
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode passive
interface FastEthernet0/2
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode passive
interface FastEthernet0/3
 switchport mode trunk
interface FastEthernet0/4
 switchport access vlan 10
 switchport mode access
interface Vlan1
 no ip address
 shutdown
line con 0
line vty 0 4
 login
line vty 5 15
 login
end
```

## ACC2_Branch
```sh
ACC2_Branch#show run
Building configuration...

Current configuration : 1354 bytes
version 15.0
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname ACC2_Branch
spanning-tree mode pvst
spanning-tree extend system-id
interface Port-channel2
 switchport mode trunk
interface FastEthernet0/1
 switchport mode trunk
 channel-protocol pagp
 channel-group 2 mode auto
interface FastEthernet0/2
 switchport mode trunk
 channel-protocol pagp
 channel-group 2 mode auto
interface FastEthernet0/3
 switchport mode trunk
interface FastEthernet0/4
 switchport access vlan 20
 switchport mode access
interface Vlan1
 no ip address
 shutdown
line con 0
line vty 0 4
 login
line vty 5 15
 login
end
```

##
```sh
DSW1_Branch#sh r
Building configuration...

Current configuration : 1481 bytes
version 15.0
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname DSW1_Branch
spanning-tree mode pvst
spanning-tree extend system-id
spanning-tree vlan 1,10,20 priority 0
interface Port-channel1
interface Port-channel2
 switchport mode trunk
interface FastEthernet0/1
 channel-protocol lacp
 channel-group 1 mode active
interface FastEthernet0/2
 channel-protocol lacp
 channel-group 1 mode active
interface FastEthernet0/3
 switchport mode trunk
 channel-protocol pagp
 channel-group 2 mode desirable
interface FastEthernet0/4
 switchport mode trunk
 channel-protocol pagp
 channel-group 2 mode desirable
interface GigabitEthernet0/1
 switchport mode trunk
interface GigabitEthernet0/2
interface Vlan1
 no ip address
 shutdown
line con 0
line vty 0 4
 login
line vty 5 15
 login
end
```

## acc1_Campus
```sh
acc1_Campus#show run
Building configuration...

Current configuration : 1337 bytes
version 15.0
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname acc1_Campus
spanning-tree mode pvst
spanning-tree extend system-id
interface Port-channel1
 switchport mode trunk
interface FastEthernet0/1
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode passive
interface FastEthernet0/2
 switchport mode trunk
 channel-protocol lacp
 channel-group 1 mode passive
interface FastEthernet0/3
 switchport mode trunk
interface FastEthernet0/4
 switchport access vlan 100
interface Vlan1
 no ip address
 shutdown
line con 0
line vty 0 4
 login
line vty 5 15
 login
end
```

## acc2_Campus
```sh
acc2_Campus#sh run
Building configuration...

Current configuration : 1354 bytes
version 15.0
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname acc2_Campus
spanning-tree mode pvst
spanning-tree extend system-id
interface Port-channel2
 switchport mode trunk
interface FastEthernet0/1
 switchport mode trunk
 channel-protocol pagp
 channel-group 2 mode auto
interface FastEthernet0/2
 switchport mode trunk
 channel-protocol pagp
 channel-group 2 mode auto
interface FastEthernet0/3
 switchport mode trunk
interface FastEthernet0/4
 switchport access vlan 30
 switchport mode access
interface Vlan1
 no ip address
 shutdown
line con 0
line vty 0 4
 login
line vty 5 15
 login
end
```

## DSW1_Campus
```sh
DSW1_Campus#sh r
Building configuration...

Current configuration : 1417 bytes
version 15.0
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname DSW1_Campus
spanning-tree mode pvst
spanning-tree extend system-id
spanning-tree vlan 1,30,100 priority 24576
interface Port-channel1
interface Port-channel2
interface FastEthernet0/1
 channel-protocol lacp
 channel-group 1 mode active
interface FastEthernet0/2
 channel-protocol lacp
 channel-group 1 mode active
interface FastEthernet0/3
 channel-protocol pagp
 channel-group 2 mode desirable
interface FastEthernet0/4
 channel-protocol pagp
 channel-group 2 mode desirable
interface GigabitEthernet0/1
 switchport mode trunk
interface GigabitEthernet0/2
interface Vlan1
 no ip address
 shutdown
line con 0
line vty 0 4
 login
line vty 5 15
 login
end
```

## R5
```sh
R5#sh r
Building configuration...

Current configuration : 1654 bytes
version 15.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname R5
ip dhcp excluded-address 192.168.10.1 192.168.10.9
ip dhcp excluded-address 192.168.10.11 192.168.10.254
ip dhcp excluded-address 192.168.20.1 192.168.20.9
ip dhcp excluded-address 192.168.20.11 192.168.20.254
ip dhcp pool pc0
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
 dns-server 10.11.12.10
ip dhcp pool pc1
 network 192.168.20.0 255.255.255.0
 default-router 192.168.20.1
 dns-server 10.11.12.10
ip cef
no ipv6 cef
spanning-tree mode pvst
interface GigabitEthernet0/0/0
 no ip address
 ip nat inside
 duplex auto
 speed auto
interface GigabitEthernet0/0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
 ip nat inside
interface GigabitEthernet0/0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
 ip nat inside
interface GigabitEthernet0/0/1
 ip address 172.18.20.18 255.255.255.252
 ip nat outside
 duplex auto
 speed auto
interface GigabitEthernet0/0/2
 no ip address
 duplex auto
 speed auto
 shutdown
interface Vlan1
 no ip address
 shutdown
router ospf 10
 router-id 5.5.5.5
 log-adjacency-changes
 area 10 stub
 network 172.18.20.16 0.0.0.3 area 10
ip nat inside source list local interface GigabitEthernet0/0/1 overload
ip classless
ip route 0.0.0.0 0.0.0.0 172.18.20.17 
ip flow-export version 9
ip access-list standard local
 permit 192.168.10.0 0.0.0.255
 permit 192.168.20.0 0.0.0.255
no cdp run
line con 0
line aux 0
line vty 0 4
 login
end
```

## R4
```sh
R4(config)#do sh r
Building configuration...

Current configuration : 1428 bytes
version 15.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname R4
ip dhcp pool vlan30
 network 192.168.30.0 255.255.255.0
 default-router 192.168.30.1
 dns-server 10.11.12.10
ip dhcp pool vlan100
 network 10.11.12.0 255.255.255.0
 default-router 10.11.12.1
 dns-server 10.11.12.10
no ip cef
no ipv6 cef
spanning-tree mode pvst
interface GigabitEthernet0/0/0
 ip address 172.18.20.6 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/1
 ip address 172.18.20.2 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/2
 media-type sfp
 no ip address
 duplex auto
 speed auto
interface GigabitEthernet0/0/2.30
 encapsulation dot1Q 30
 ip address 192.168.30.1 255.255.255.0
interface GigabitEthernet0/0/2.100
 encapsulation dot1Q 100
 ip address 10.11.12.1 255.255.255.0
interface Vlan1
 no ip address
 shutdown
router ospf 10
 router-id 4.4.4.4
 log-adjacency-changes
 passive-interface GigabitEthernet0/0/2
 passive-interface GigabitEthernet0/0/2.30
 passive-interface GigabitEthernet0/0/2.100
 network 172.18.20.0 0.0.0.3 area 0
 network 172.18.20.4 0.0.0.3 area 0
 network 10.11.12.0 0.0.0.255 area 20
 network 192.168.30.0 0.0.0.255 area 20
ip classless
ip flow-export version 9
line con 0
line aux 0
line vty 0 4
 login
end
```

## R1
```sh
R1#sh r
Building configuration...

Current configuration : 901 bytes
version 15.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname R1
no ip cef
no ipv6 cef
spanning-tree mode pvst
interface GigabitEthernet0/0/0
 ip address 172.18.20.9 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/1
 ip address 172.18.20.13 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/2
 media-type sfp
 ip address 172.18.20.17 255.255.255.252
 duplex auto
 speed auto
interface Vlan1
 no ip address
 shutdown
router ospf 10
 router-id 1.1.1.1
 log-adjacency-changes
 area 10 stub no-summary
 network 172.18.20.12 0.0.0.3 area 0
 network 172.18.20.8 0.0.0.3 area 0
 network 172.18.20.16 0.0.0.3 area 10
ip classless
ip flow-export version 9
line con 0
line aux 0
line vty 0 4
 login
end
```

## R2
```sh
R2#sh r
Building configuration...

Current configuration : 812 bytes
version 15.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname R2
no ip cef
no ipv6 cef
spanning-tree mode pvst
interface GigabitEthernet0/0/0
 ip address 172.18.20.1 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/1
 ip address 172.18.20.14 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/2
 media-type sfp
 no ip address
 duplex auto
 speed auto
interface Vlan1
 no ip address
 shutdown
router ospf 10
 router-id 2.2.2.2
 log-adjacency-changes
 network 172.18.20.12 0.0.0.3 area 0
 network 172.18.20.0 0.0.0.3 area 0
ip classless
ip flow-export version 9
line con 0
line aux 0
line vty 0 4
 login
end
```

## R3
```sh
R3#sh r
Building configuration...

Current configuration : 811 bytes
version 15.4
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
hostname R3
no ip cef
no ipv6 cef
spanning-tree mode pvst
interface GigabitEthernet0/0/0
 ip address 172.18.20.10 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/1
 ip address 172.18.20.5 255.255.255.252
 duplex auto
 speed auto
interface GigabitEthernet0/0/2
 media-type sfp
 no ip address
 duplex auto
 speed auto
interface Vlan1
 no ip address
 shutdown
router ospf 10
 router-id 3.3.3.3
 log-adjacency-changes
 network 172.18.20.8 0.0.0.3 area 0
 network 172.18.20.4 0.0.0.3 area 0
ip classless
ip flow-export version 9
line con 0
line aux 0
line vty 0 4
 login
end
```