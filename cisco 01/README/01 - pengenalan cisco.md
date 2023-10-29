<a href="../../README.md#back">Back README.md...</a>

# **A. Pengertian Router, Switch, dan Client**
## 1. Router
- Router adalah perangkat jaringan yang bertindak sebagai gerbang atau penghubung antara dua atau lebih jaringan yang berbeda. Router berfungsi untuk mengarahkan paket data antara jaringan dan memutuskan jalur terbaik untuk pengiriman data

## 2. Switch
- Switch adalah perangkat jaringan yang menghubungkan beberapa perangkat dalam satu jaringan local(LAN). switch bekerja di lapisan data link (layer 2) dalam model referensi OSI dan mampu mengarahkan lalu lintas data diperangkat yang terhubung langsung padanya

# **B. Macam-Macam Kabel yang akan digunakan**
## 1. Kabel Streight
- Kabel streight (streigh-trough cable) adalah jenis kabel yang memiliki koneksi pin dengan urutan yang sama di kedua ujungnya. urutan warnaya adalah <b>po, o, ph, b, pb, h, pc, c.</b> dan dapat menghubungkan ke perangkat yang <b>berbeda</b>

## 2.Kabel Cross
- Kabel cross (crossover cable) adalah jenis kabel jaringan yang memiliki koneksi pin dengan urutan yang berbeda di kedua ujungnya. urutan warnaya adalah <b>ujung 1: po,o, ph, b, pb, h, pc, c. dan ujung 2: ph, h, po, b, pb, o, pc, c</b> dan dapat menghubungkan ke perangkat yang <b>sama / sejenis</b>

# **C. Pengertian ip addreas dan Jenisnya**
## Pengertian
- ip addreas adalah serangkaian angka yang digunakan untuk mengedentifikasi dan membedakan setiap perangkat yang terhubung ke jaringan komputer.

## ip addreas terbagi menjadi 2 yaitu 
- <b>IPv4</b> (internet protocol versi 4) terdiri dari 32 bit dan memilki 4 octet serta memilki nilai 0 hingga 255.
- <b>IPv6</b> generasi berikut dari ip addreas yang dirancang untuk mengatasi keterbatasan IPv4

# **D. cara menghitung subnetmask**
- contoh ip addreas, dan subnetmask
```
ip addreas = 192.168.1.1
subnetmask = 255 255 255 0
1 subnet   = 32 bit
1 subnet   = 4 ecto
1 ecto     = 8 bit
1 ecto     = 255
```

- contoh subnet slash 8,16,24,dan 32 (kelipatan 8)
```
subnetmask /8  = 255 0 0 0
subnetmask /16 = 255 255 0 0
subnetmask /24 = 255 255 255 0
subnetmask /32 = 255 255 255 255
```

- nilai pada setiap angka octet
```
1 = 128
2 = 64 + 128 = 192
3 = 32 + 192 = 224
4 = 16 + 224 = 240
5 = 8  + 240 = 248
6 = 4  + 248 = 252
7 = 2  + 252 = 254
8 = 1  + 254 = 255
```

- contoh penggunaan
```
/25 =  8  + 8  + 8  + 1
    = 255  255  255  128
/20 =  8  + 8  + 4  + 0
    = 255  255  240  0
```

# **E. Coment Promp pada client**
- Cara mengecek ip addreas pada perangkat client lewat coment promp
```
$ipconfig
```
- cara mengecek konektivitas jaringan antara dua perangkat
```
$ping [ip_addreas]
```