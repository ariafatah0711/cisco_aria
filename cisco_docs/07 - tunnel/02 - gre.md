# Konfigurasi GRE Tunnel dengan OSPF

## Gambar Topologi
### 1
![alt text](<images/02 - gre/image.png>)

### 2
![alt text](<images/02 - gre/image-1.png>)

## syarat
### modul yang didukung
- router model 2811, 2911, atau 1941
- HWIC-2T
- Serial WAN Interface Card

### konfigurasi
- router yang ingin di tunnel harus punya ip public agar bisa di buat tunnel

## Contoh Konfigurasi Tunnel

```bash
int tunnel <id>
tunnel source <interface_to_service_provider>
tunnel destination <ip_destination_tunnel>
ip address 192.168.1.1 255.255.255.252
```

---

## R1

```bash
interface Tunnel0
 ip address 192.168.1.1 255.255.255.252
 tunnel source GigabitEthernet0/0/0
 tunnel destination 200.0.0.2
```

## R2

```bash
interface Tunnel0
 ip address 192.168.1.2 255.255.255.252
 tunnel source GigabitEthernet0/0/0
 tunnel destination 100.0.0.2
```

---

## Status Interface R1

```bash
R1# show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     10.0.1.1        YES NVRAM  up                    up
GigabitEthernet0/1     unassigned      YES NVRAM  administratively down down
GigabitEthernet0/2     unassigned      YES NVRAM  administratively down down
GigabitEthernet0/0/0   100.0.0.2       YES manual up                    up
Tunnel0                192.168.1.1     YES manual up                    down
Vlan1                  unassigned      YES unset  administratively down down
```

> Masalah: Tunnel0 pada R1 berstatus **down** karena **tunnel destination** mengarah ke alamat IP yang tidak bisa dijangkau. Pastikan IP **200.0.0.2** bisa di-ping dari R1.

---

## Routing Default di R2

```bash
ip route 0.0.0.0 0.0.0.0 200.0.0.1

R2# show ip interface brief | include Tunnel
Tunnel0                192.168.1.2     YES manual up                    up
```

jangan lupa tambahakn di router 1 juga ```ip route 0.0.0.0 0.0.0.0 100.0.0.1```

---

## Menambahkan OSPF Jika Tunnel Sudah Aktif

Jika router CE sudah bisa saling ping melalui tunnel, kita bisa mengaktifkan OSPF.

### R1

```bash
router ospf 1
 passive-interface GigabitEthernet0/0
 network 192.168.1.1 0.0.0.0 area 0
 network 10.0.1.1 0.0.0.0 area 0
```

### R2 (disesuaikan)

```bash
router ospf 1
 passive-interface GigabitEthernet0/0
 network 192.168.1.2 0.0.0.0 area 0
 network <ip_client> <wildcard> area 0
```

> Dengan OSPF, router client bisa saling terhubung tanpa perlu static route ke provider.
