<a href="00 - README.md">Back README.md..</a>

# **A. dynamic router**
## Pengertian Dynamic Router
- dynamic router adalah jenis router yang dapat memutuskan rute jaringan berdasarkan informasi yang diperoleh secara dinamis dari lingkup jaringan.
- ini berarti router dapat mengubah jaluratau rute yang digunakan untuk mengirimkan data sesuai perubahan kondisi jaringan

# **B. perbedaan static router dan dynamic router**
- **S** = menambahkan alamat jaringan pada routing table secara manual
- **D** = mendata alamat jaringan mana yang akan disertakan dalam proses pertukaran informasi antar router

# **C. menggunakan dynamic router**
```
(c)#router rip
(c-r)#network [ip yang ingin dpt terhubung]
```

<h3>contoh</h3>

```
(c)#ip router
(c-r)#network 192.168.1.0
(c-r)#network 192.168.10.0
```

- contoh saat menggunakan router dynamic
```
#show ip route
C    192.168.1.0/24 is directly connected, FastEthernet0/0
R    192.168.2.0/24 [120/1] via 192.168.10.2, 00:00:23, FastEthernet1/0
C    192.168.10.0/24 is directly connected, FastEthernet1/0
```

- menghapus entri dari table routing
```
(c)#no ip route 192.168.1.0
```