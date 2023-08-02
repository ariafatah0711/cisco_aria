<a href="00 - README.md">Back README.md..</a>

# **A. VLAN (Virtual Local Area Network)**
- VLAN adalah sebuah metode untuk membagi jaringan fisik menjadi beberapa jaringan virtual yabg terpisah secara logis.
- dengan menggunakan VLAN anda dapat memisahkan lalu lintas data antar perangkat dalam jaringan, bahkan jika mereka semua terhubung dengan switch yang sama

# **B. Jenis - Jenis Mode VLAN**
## 1. Mode Access Port :
- mode ini digunakan untuk menghubungkan perangkat end-user seperti komputer atau printer, ke jaringan VLAN.
- port dalam mode acces hanya dapat menjadi anggota dari satu VLAN

## 2. Mode Trunk Port :
- mode ini digunakan untuk menghubungkan Switch dengan Switch dengan router
- port dalam mode Trunk dapat membawa lalu lintas dari beberap VLAN secara bersamaan melalui satu kabel fisik

# **C. Mengkonfigurasi Vlan pada Switch**
## 1. membuat id vlan dan menampilkan vlan yang telah dibuat
- membuat id VLAN dan nama VLAN
```
(C)#vlan [id_vlan]
(c-v)#name [nama_vlan]
```

- menampilkan vlan yang telah dibuat
```
#show vlan
```

### contoh
```
(c)#vlan 10
(c-v)#name kelompok_A
(c-v)#vlan 20
(c-v)#name kelompok_B
(c-v)#exit

#show vlan
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                                active    Fa0/1, Fa1/1, Fa2/1, Fa3/1
                                                               Fa4/1, Fa5/1
10   kelompok_A                       active    
20   kelompok_B                       active
```

# **D. mengkonfigurasikan vlan pada interface**
- mengkonfigurasi VLAN
```
(c)#int fa [port_fa]
(c-if)#switchport access vlan [id_vlan]
```

- setelah mengkonfigurasi setiap port PC, anda dapat menghubungkan switch ke switch dengan mode "access" untuk koneksikan perangkat end-point, atau "trunk" untuk mengizinkan lalu lintas VLAN yang lebih kompleks dan fleksibel.
```
int fa [port_fa]
(c-if)#switchport mode access
```
atau

```
int fa [port_fa]
(c-if)#switchport mode 
```

```
(c)#int fa 0/1
(c-if)#switchport access vlan 10

(c)#int fa 1/1
(c-if)#switchport access vlan 20

(c)#int fa 2/1
(c-if)#switchport mode access
atau
(c-if)#switchport mode 

#show vlan
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                                active    Fa3/1, Fa4/1, Fa5/1
10   kelompok_A                       active    Fa0/1
20   kelompok_B                       active    Fa1/1
```