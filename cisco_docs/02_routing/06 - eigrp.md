# eigrp
## pengenalan
- Enhanced Interior Gateway Routing Protocol
- EIGRP sering disebut juga Hybrid-Distance-Vector
    - karena cara kerjanya menggunkan dua tipe  routing protocol,yaitu Distance vector protocol dan Link-State protocol

# configuration
## eigrp
```js
(c)# router eigrp <id> # id nya sama dengan id routing sebelah
(c)# network <network address> # jika tidak ingin menggunakan wildcard
(c)# network <network address> <wildcard>

# eigrp with loopback ip
(c)# int lo1
(c)# ip add 1.1.1.1 255.255.255.255

(c)# router eigrp 10
(c)# network 11.11.11.0 0.0.0.3
(c)# network 12.12.12.0 0.0.0.3
(c)# no auto-summary // bertujuan untuk menyertakan subnetmask dalam routing EIGRP. Sekarang lakukan tes ping dan traceroute ke router jogja.
```

## contoh
```js
(c)# route eigrp 10
(c)# network 10.10.10.0
(c)# network 192.168.10.0

(c)# route eigrp 10
(c)# network 10.10.10.0
(c)# network 20.20.20.0
(c)# network 192.168.20.0
```