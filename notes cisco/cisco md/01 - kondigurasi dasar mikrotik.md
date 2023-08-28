<a href="../00 - README.md">Back notes cisco..</a>

# ""A. pertama kali masuk ke winbox""
- jangan masuk ke port 1 karena itu merupakan default configurasi dan saat pertama kali masuk itu tidak dapat diubah konfignya
- saat masuk klik mac addreass jangan di ip addres
- lalu klik conect
- setelah masuk biasanya akan ada router defualt configuration dan anda dapat menghapusnya karena kita akan membuat ulang
- lalu saat masuk konfig akan dari 0
- dan kita dapat menggunakan port 1 karena port 1 yang sebelumnya konfignya sudah di hapus
- namun disarankan untuk tidak menggunakan port 1 karena itu  biasanya digunakan untuk menghubungkan kke jaringan

# ""B. configuration mikrotik""
- mengubah nama mikrotik
```
klik system
pilih identity
dan ubah namanya
```

- mengubah user menggunakan password agar lebih aman
```
klik system
pilih users

klik tanda tambah
mengubah nama user dan group untuk mengubah apakah user ini hanya bisa read(membaca), write(mengubah), atau full(semua fungsi)
lalu tambahkan password
klik aply dan ok

jika ingin agar tidak ada yang bisa masuk selain user ini 
pilih user admim/user yang ingin di nonaktifkan
lalu klik x untuk menonaktifkan
klik centang untuk mengaktifkan
```

- konfigurasi bridge agar saat salah satu ethernet/port rusak
```
klik bridge
klik tambah

ubah nama misal bridge-WAN

lalu klik ports, tambah
dan pilih bridge: bridge-WAN dan interface ether1

jika etherface 1 rusak issp nya saja yang dipindahikan
```

- DHCP client
```
klik ip
pilih DHCP client

klik tambah pilih DHCP
pilih interface dari bridge tadi dan pilih ok
di status bridge dhcp itu teksnya bound yang artinya kita dapat ip dari provider

jika pengen liat
klik ip 
pilih addreas
dan tampilanya akan ada interfae bridge wan
# dan anda akan dapat mengeping ke 10.10.10.1

jika pengen liat sudah conect apa belum bisa
klik ip pilih routes
dan tampilanya akan ada 10.10.10.1
# dan dapat melakukan ping ke 8.8.8.8 atau koneksikan ke internet
```

- jika dhcp clientnya dinonaktifkan maka
```
di ip, address
addres DHCP tadi tidak ada dan jika ingin ditambahkan harus dibuat secara manual
addreas : 10.10.10.200/24
interface : bridge-WAN

dan hasilnya baru akan sama seperti tadi
# dan dapat melakukan ping ke 10.10.10.1
```

- ip route
```
klik ip, route 
klik tambah
adres jangan diubah
gateway: 10.10.10.1
aply dan ok
# dan anda dapat menkoneksikan ke internet dengan ping 8.8.8.1
```

- namun meski sudah dapat koneksikan ke internet tapi masih bisa belum browsing, goggle, faebook, game karena DNS nya belum di ubah
```
klik ip, DNS
ubah serverya pakai ip ispi : 10.10.10.1
dan bisa lebih dari 1

jangan lupa aktifkan allow remote request untuk agar router nya jadi dns server untuk melayani
dan ok

#  dan sekarang dapat di ping dan bisa koneksikan ke internet serta dapat browsingan
```