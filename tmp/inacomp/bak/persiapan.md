# IPv4 Addressing
##

# Basic Configuration (hostname, IP, gateway, password, dsb.)
## 

# Remote SSH
## line console
## ssh
## ssh version 2

# VLAN Configuration
## mode vlan
### mode access
### mode trunk
### mode voice
## native vlan
## no negoitation
## dyanmic vlan
## vlan management
## intervlan

# Virtual Trunking Protocol (VTP)
## dtp
## vtp mode, vtp domain, vtp password

# Spanning-Tree Protocol (STP)
## stp, vstp, rstp (UplinkFast, backbone fast)
## root bridge, backup bridge
## portfast
## bpdu
## bpduguard, bpdufilter
## Root Guard, Loop Guard

# Link Aggregation (EtherChannel)
## lacp
### on, active, passive
## pagp
### on, auto, desirable

# Port Security
## add mac
### Static
### Dynamic
### Sticky
## violation
### protect
### restrict
### shutdown

# Access Control List (ACL)
## number ACL & Named ACL\
## acl standar
## acl extend

# DHCP
## dhcp pool
## dhcp exclaude address

# Network Address Translation (NAT)
## static nat
## dynamic nat
## pat

# Static Routing
## default route
## connected route

# Dynamic Routing Protocol (RIP, OSPF, EIGRP)
## rip
### redistribute
## ospf
### area backbone
### area
### virtual link
### redistribute
## eigrp
### redistribute

# First Hop Redundancy Protocol (FHRP) (HSRP, VRRP, GLBP)
## hsrp 2 router (failover)
## vrrp 2 atau lebih router (failover)
## glbp (roundrobin => membagi beban)

# VPN
## .
## .

# VOIP
## dhcp pool voip
## voip
## telephony service
## dial number
## vlan voice
## voip in diference router