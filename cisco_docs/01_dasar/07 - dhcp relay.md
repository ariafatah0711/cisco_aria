# DHCP Relay

## Pengenalan

* **DHCP Relay** adalah fitur yang memungkinkan perangkat jaringan seperti router untuk meneruskan permintaan DHCP dari client ke DHCP server yang berada di jaringan berbeda (bukan satu subnet).
* Digunakan ketika client dan DHCP server **tidak berada di subnet yang sama**.
* Router akan meneruskan pesan DHCP DISCOVER ke DHCP server dengan menambahkan alamat IP dari antarmuka yang menerima permintaan (disebut **Gateway IP Address / giaddr**).
* Port yang digunakan tetap: **67 (server)** dan **68 (client)**.

## Topologi

```
[PC Client]
     |
[Router DHCP Relay] ---- [Router DHCP Server] ---- [DHCP Server / DHCP Service on Router]
```

## Konfigurasi

### Pada Router DHCP Relay

```bash
# Aktifkan IP address pada interface yang terhubung ke client
(c)# interface gig0/1
(c)# ip address 192.168.10.1 255.255.255.0
(c)# no shutdown

# Aktifkan DHCP relay dan tentukan IP DHCP Server
(c)# ip helper-address 192.168.20.2  # IP dari DHCP server atau DHCP service di router
```

### Pada Router DHCP Server (atau DHCP Server di Cisco)

```bash
# Aktifkan IP address pada interface yang terhubung ke router relay
(c)# interface gig0/2
(c)# ip address 192.168.20.1 255.255.255.0
(c)# no shutdown

# Buat DHCP pool (jika DHCP berjalan di router Cisco ini)
(c)# ip dhcp pool nama_dhcp
(c)# network 192.168.10.0 255.255.255.0
(c)# default-router 192.168.10.1
(c)# dns-server 8.8.8.8
```

### Pada DHCP Server (opsional jika standalone server)

* Pastikan DHCP server memiliki akses ke subnet `192.168.10.0/24`.
* DHCP server akan melihat `giaddr = 192.168.10.1` untuk menentukan pool yang sesuai.

## Hasil di PC Client

* IP Address : 192.168.10.2
* Subnet Mask : 255.255.255.0
* Default Gateway : 192.168.10.1
* DNS Server : 8.8.8.8