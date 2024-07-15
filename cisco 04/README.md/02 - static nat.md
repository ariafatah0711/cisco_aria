<a href="../../README.md#back">Back README.md...</a>

# nat
## pengenalan
- Network Aceess Translation (NAT) digunakan untuk mentranslasikan ip privat ke 
ip public atau sebaliknya. 
    - Misalkan ada server pada suatu perusahaan, selain bisa diakses secara local, perusahaan ingin server tersebut bisa diakses lewat internet. 
    - Maka server tersebut diberi ip public dan dikonfigurasi static NAT.

## kategori
- Inside = traffic yang masuk ke interface router dari local network.
- Outside = traffic yang keluar melalui interface router menuju
destination/internet.

## type nat
- Static NAT, satu ip privat ditranslasikan ke satu ip public (one to one mapping)
- Dynamic NAT, Jumlah ip public yang disediakan harus sejumlah ip privat 
    - yang ditranslasikan NAT jenis ini jarang digunakan.
- Overloading/Port Address Translation (PAT), akses internet menggunakan 1 ip public. 
    - Ini yang banyak digunakan sekarang

# static nat
- Dalam static NAT, hanya 1 ip privat ditranslasikan ke 1 ip public. Artinya hanya 1 
PC LAN yang dapat mengakses internet. 

# configuration
## static nat
```bash
ip nat inside source static 192.168.1.11 10.10.10.10
int fa0/1
ip nat inside
int fa0/0
ip nat outside
ip route 0.0.0.0 0.0.0.0 fa0/0
```

```sh
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
```sh

```

## show
```sh
show ip nat translations
show ip nat statistics
```