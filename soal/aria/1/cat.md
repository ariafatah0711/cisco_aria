# setup 1
## mls1
```bash
# mls1
en
conf t
host MLS1
vlan 10
name public
vlan 20
name accounting
vlan 30
name IT
vlan 40
name HRD
vtp mode server
vtp domain office
vtp password 123

int ra fa 0/1-2
sw trunk encap dot
sw mode tr
int ra fa 0/11-12
channel-gro 1 mode act
channel-protocol lacp
sw trunk encap dot
sw mode tr

int vlan 10
ip add 10.10.10.1 255.255.255.0
int vlan 20
ip add 20.20.20.1 255.255.255.0

ip dhcp pool public
default-router 10.10.10.1
network 10.10.10.0 255.255.255.0
dns-server 8.8.8.8
ip dhcp pool accounting
default-router 20.20.20.1
network 20.20.20.0 255.255.255.0
dns-server 8.8.8.8
```

## mls 2
```sh
en
conf t
host MLS2
vlan 10
name public
vlan 20
name accounting
vlan 30
name IT
vlan 40
name HRD
vtp mode server
vtp domain office
vtp password 123

int ra fa 0/1-2
sw trunk encap dot
sw mode tr
int ra fa 0/11-12
channel-gro 1 mode act
channel-protocol lacp
sw trunk encap dot
sw mode tr


int vlan 30
ip add 30.30.30.1 255.255.255.0
int vlan 40
ip add 40.40.40.1 255.255.255.0

ip dhcp pool IT
default-router 20.20.20.1
network 30.30.30.0 255.255.255.0
dns-server 8.8.8.8
ip dhcp pool HRD
default-router 40.40.40.1
network 40.40.40.0 255.255.255.0
dns-server 8.8.8.8
```

# sw1-2
```sh
en
conf t
vtp mode client
vtp domain office
vtp password 123
int ra fa 0/1
sw mode tr

int fa 0/2
sw acc vl 10
int fa 0/3
sw acc vl 20
```

# sw3-4
```sh
en
conf t
vtp mode client
vtp domain office
vtp password 123
int ra fa 0/1
sw mode tr

int fa 0/2
sw acc vl 30
int fa 0/3
sw acc vl 40
```