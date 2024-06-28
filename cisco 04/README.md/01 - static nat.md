<a href="../../README.md#back">Back README.md...</a>

# static nat
## pengenalan

## show
```
show ip nat translations
show ip nat statistics

```

# configuration
## static nat
```
access-list 1 permit 192.168.10.0 0.0.0.255
ip nat pool internet 200.10.0.2 200.10.0.6 netmask 255.255.255.0
ip nat inside source list 1 pool internet overload

R0(config)#int fa 0/0
R0(config-if)#ip nat inside

R0(config)#int se2/0
R0(config-if)#ip nat outside

ip route 0.0.0.0 0.0.0.0 se2/0
```
atau
```
ip nat inside source static 192.168.10.1 10.0.0.1
ip nat inside source static 192.168.20.1 10.0.0.1
```

## contoh
```

```