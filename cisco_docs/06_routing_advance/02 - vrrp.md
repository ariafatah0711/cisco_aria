# VRRP
## pengenalan
- VRRP adalah protokol IEEE standar terbuka, yang menyediakan redundansi dalam jaringan
    - ini memberantas satu titik kegagalan yang melekat dari lingkungan yang dirutekan default statis
    - Ini adalah protokol lapisan jaringan dengan protokol nomor-112. Jumlah router dalam grup bertindak sebagai 
        - router logis virtual yang bertindak sebagai gateway default dari semua host lokal. 
        - Jika salah satu router turun, anggota grup lain dapat mengambil tanggung jawab untuk meneruskan lalu lintas.

- virtual  mac => 00-00-5E-00-01-XX => GRP numver
- hello timer 1 detik
- hello hold 3 detim

- jadi kesimpulanya vrrp adalah hsrp versi industri yang lebih cepat

# configuration
## VRRP
```bash
```

## contoh
```bash
int fa 0/0
vrrp 1 ip 192.168.1.1
vrrp 1 priority 110
vrrp 1 preempt
vrrp track 1 decrement 50

exit
track 1 int fe  0/1 line-protocol
```

## show
```bash
show vrrp [brief]
show track [brief]
```

```bash
interface FastEthernet0/0
ip address 10.0.1.2 255.255.255.0
vrrp 1 ip 10.0.1.1
vrrp 1 timers {advertise <hello> | learn}
vrrp 1 priority <priority>
vrrp 1 preempt
vrrp 1 authentication md5 key-string <password>
vrrp 1 track <object> decrement <value>
```