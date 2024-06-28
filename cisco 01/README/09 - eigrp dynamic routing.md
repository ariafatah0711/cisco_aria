<a href="../../README.md#back">Back README.md...</a>

# eigrp
## pengenalan
- Enhanced Interior Gateway Routing Protocol
- EIGRP sering disebut juga Hybrid-Distance-Vector
    - karena cara kerjanya menggunkan dua tipe  routing protocol,yaitu Distance vector protocol dan Link-State protocol

# configuration
## eigrp
```
(c)# router eigrp <id> # id nya sama dengan id routing sebelah
(c)# network <network address>
(c)# network <network address>
```

## contoh
```
(c)# route eigrp 10
(c)# network 10.10.10.0
(c)# network 192.168.10.0

(c)# route eigrp 10
(c)# network 10.10.10.0
(c)# network 20.20.20.0
(c)# network 192.168.20.0
```