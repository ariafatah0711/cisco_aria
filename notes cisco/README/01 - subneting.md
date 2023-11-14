<a href="../../README.md#back">Back README.md...</a>

# subnetting

## 1. **subnetmask**
- merupakan nilai yang terbentuk dari angka biner 32 bits, sama seperti IP address.
- di pisahakan oleh . atau "dot" pada setiap octet
```
1 octet = 8 binear / 8 bit
1 subnetmask terdiri dari 4 octet / 32 bit
```

- subnetmask digunakan untuk membaca bagaimana kita membagi network dan hostnya
| class | oktet pertama | subnetmask default | private address |
| a | 1 - 127 | 255.0.0.0 | 10.0.0.0 - 10.255.255.255 |
| b | 128 - 191 | 255.255.0.0 | 127.16.0.0 - 127.31.255.255 |
| c | 192 - 223 | 255.255.255.0 | 192.168.0.0 - 192.168.255.255 |

```
yang 255.255.255 dia diguanakan sebagai network
dan yang .0 dia digunakan sebagai host yang dapat digunakan

jadi misal kita gunakan class a lalu network nya kita atur menjadi 20
dan kita atur hostnya jadi 1.1.10
maka subnetnya akan menjadi 20.1.1.10
```

## 2. **subnetting**
- merupakan proses untuk membagi / memecahkan sebuah network menjadi beberapa network yang lebih kecil
```
misal kita memilki /24 dan kita bisa mencakup banyak host namun kita dapat memperkecil jaringan
dengan membaginya
```

- menghitung jumlah subnet
```
jumlah subnet = 2^2 #dimana x adalah banyaknya binari 1 pada oktet terakhir

contoh /26
11111111 11111111 11111111 11000000
di octet terakhirnya tedapat 2 binari angka 1
jadi hasilnya 2x = 2^2 hasilnya 4

jika 28 hasilnya 2^4 = 16
```

- menghitung jumlah host persubnet
```
jumlah host per subnet = 2^y - 2 #dimana y adalah banyaknya binari 0 pada oktet terakhir
#2 itu di ambil dari network dan broadcast karena network dan broadcast tidak dapat dipakai oleh client

contoh /26
11111111 11111111 11111111 11000000
di octet terakhirnya terdpaat 6 binari angka 0
jadi hasilnya 2^y = 2^6 - 2 = 64 - 2 = 62

jika 29 hasilnya 2^3 - 2 = 8 - 2 = 6
```

- menghitung jumlah block subnet
```
block subnet = 256 - 192 (nilai oktet terakhir subnetmask)

contoh /26
11111111 11111111 11111111 11000000
11000000
2^7 2^6 2^5 ...
128 64 32 ...
128 + 64 = 192

256 - 192 = 64
192 di ambil dari 2 binari angka 1 yang telah di kuadratkan yaitu 11000000 = 192

artinya tiap subnet terdiri dari ip valid, network, dan broadcast tiap ip
```

- jadi /26
```
jumlah subnet = 4
jumlah host per subnet = 62
jumlah block subnet 64

network  address
1. 0 (192.168.1.0/26)
2. 64 (192.168.1.64/26)
3. 128 (192.168.1.128/26)
4. 192 (192.168.1.192/26)

broadcast => ip network di subnet selanjutnya di kurang 1
1. 64 - 1 = 63 #diambil dari (network selanjutnya - 1)
    - 192.168.1.63
2. 192.168.1.127
3. 192.168.1.191
4. 192.168.1.255

range ip valid => ip di antara network dan broadcast
1. 192.168.1.1/26 - 192.168.1.62/26
1. 192.168.1.65/26 - 192.168.1.126/26
1. 192.168.1.129/26 - 192.168.1.190/26
1. 192.168.1.193/26 - 192.168.1.254/26
```