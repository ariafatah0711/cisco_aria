# NAT (Network Address Translation)
## pengenalan
- Network Aceess Translation (NAT) digunakan untuk mentranslasikan ip privat ke 
ip public atau sebaliknya. 
    - Misalkan ada server pada suatu perusahaan, selain bisa diakses secara local, perusahaan ingin server tersebut bisa diakses lewat internet. 
    - Maka server tersebut diberi ip public dan dikonfigurasi static NAT.
- nat beroperaasi pada layer 3

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

## jenis nat
### static nat
- Dalam static NAT, hanya 1 ip privat ditranslasikan ke 1 ip public. 
    - Artinya hanya 1 PC LAN yang dapat mengakses internet.

### dyanamic nat
- menejermahkan alamaat ip private ke ip public namun hanya dari jaringan yang sama

### dynamic nat overloaad nat
- menterjemahkan beberapa ip private dalam 1 ip public

# PAT (Port Address Translation)
- suattu fitur dari sebuah jaringan perangkat yang menejermaahkan TCP atau UDP 
    - komunikasi yang dibuat antara host di jaringan pribadi san host pada jaringan public
- pat pada umumnya hanya satu alamat ip public yang terbuka dan menghubungkan beberapa host swasta melalui alamat terkena
- pat beroperaasi pada layer 3 dan 4
- operasi pat biasanya host internal menyadari benar alamat ip dan port tcp atau udp pada host external
    - biasanya perangkat pat dapat berfungsi sebagai gateway default untuk host internal

# configuration
## static nat
```bash
ip route 0.0.0.0 0.0.0.0 <next_hop>

ip nat inside source static <ip_private> <ip_public> # masukan ip public yang belum ada jangan masukin ip public interface router
int <interfacec>
ip nat inside # in packet
int <interface>
ip nat outside # out packet
```

## contoh
```sh
ip route 0.0.0.0 0.0.0.0 12.12.12.2 # ip route 0.0.0.0 0.0.0.0 se 2/0

ip nat inside source static 192.168.10.2 12.12.12.3
ip nat inside source static 192.168.0.3 12.12.12.4

int fa0/0
ip nat inside
int se2/0
ip nat onside
```

## show
```sh
show ip nat translations
show ip nat statistics
```