# ipv6
## pengenalan
- a

## configuration
- a


#########################
## ospf in ipv6
```bash
# ospf
RO1(config)#interface fa0/0
RO1(config-if)#ipv6 enable
RO1(config-if)#ipv6 add 12::1/64
RO1(config-if)#no shutdown

RO1(config)#ipv6 unicast-routing
RO1(config-if)#ipv6 router ospf 10
RO1(config-if)#router-id 1.1.1.1
RO1(config-if)#int fa0/0
RO1(config-if)#ipv6 ospf 10 area 0

# dhcp ipv6

DHCPV6(config)#ipv6 dhcp pool STATEFUL
DHCPV6(config-dhcpv6)#address prefix 2001:1111:1111:1111::/64
DHCPV6(config-dhcpv6)#dns-server 2001:4860:4860::8888
DHCPV6(config-dhcpv6)#domain-name NETWORKLESSONS.LOCAL

DHCPV6(config)#interface FastEthernet 0/0
DHCPV6(config-if)#ipv6 address 2001:1111:1111:1111::1/64
DHCPV6(config-if)#ipv6 dhcp server STATEFUL
DHCPV6(config-if)#ipv6 nd managed-config-flag
DHCPV6(config-if)#ipv6 nd prefix 2001:1111:1111:1111::/64 14400 14400 no-autoconfig
```