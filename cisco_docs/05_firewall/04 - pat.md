# PAT (nat overload)
## pengenalan
- nat overload => i ip public untuk banyak ip private
    - menterjemahkan beberapa ip private dalam 1 ip public

# configuration
## pat
```bash
ip route 0.0.0.0 0.0.0.0 se2/0

access-list 1 permit 192.168.10.0 0.0.0.255
ip nat inside source list 1 interface serial 2/0 overload 

int fa 0/1
ip nat inside
int se 2/0
ip nat outside
```

```bash
# Static layer four port translations
ip nat inside source static tcp 10.0.0.3 8080 192.0.2.1 80
ip nat inside source static udp 10.0.0.14 53 192.0.2.2 53
ip nat outside source static tcp 174.143.212.4 23 10.0.0.8 23

# Dynamic port translation with a pool
ip nat inside source list 11 pool MyPool overload

# Dynamic translation with interface overloading
ip nat inside source list 11 interface FastEthernet1 overload
```