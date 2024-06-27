<a href="../../README.md#back">Back README.md...</a>

# bgp
## pengenalan
- Border Gateway Protocol (BGP)
    - BGP adalah protokol routing yang digunakan di Internet untuk mengelola lalu lintas di antara jaringan atau Autonomous System (AS). 
    - Tujuannya adalah untuk memberikan informasi kepada router tentang jalur terbaik untuk mencapai tujuan tertentu di seluruh Internet.
- Cara kerja dari BGP adalah dengan menterjemahkan sebuah IP network menggunakan path vector, untuk selanjutnya tabel routing dikirim ke setiap neighbor yang kemudian melalui notifikasi dan pemberitahuan melakukan update tabel routing secara otomatis. 
    - Jika perubahan muncul dan mempengaruhi banyak path, maka secara masif notifikasi perubahan dikirim ke setiap neighbor.

### AS
- AS adalah kelompok jaringan yang diadministrasikan oleh satu organisasi atau penyedia layanan internet. Setiap AS memiliki nomor AS unik yang digunakan untuk mengidentifikasinya di Internet.

### bgp peering
- BGP Peering adalah koneksi antara dua router BGP, baik di dalam satu AS (iBGP) atau antar AS yang berbeda (eBGP). Router yang terhubung pertukaran informasi BGP dan membuat keputusan tentang jalur terbaik.

### bgp update
- Router BGP bertukar pesan “update” untuk menginformasikan satu sama lain tentang jalur ke berbagai tujuan. Pesan update mengandung informasi seperti prefix (blok alamat IP), nomor AS yang bertanggung jawab, dan atribut jalur lainnya.

# configuration
## bgp
```
Router(config)#router bgp (AS 1-65535)
Router(config-bgp)#neighbor (IP-Address) remote-as (AS)
Router(config-bgp)#redistribute connected
``` 
- router bgp (AS 1-65535) -> untuk menetapkan router ke dalam proses BGP dengan nomor AS sekian
- neighbor (IP-Address) remote-as (AS)-> untuk menetapkan router lain sebagai tetangga BGP
- redistribute connected-> untuk memberitahu router tetangga BGP tentang semua jaringan yang terhubung

## show bgp
```
Router#show ip bgp
Router#show ip bgp neighbors
Router#show ip bgp summary
```

## contoh
```
(c)# router bgp 20
(c)# neighbor 10.10.10.1 remote-as 10 # ip next hope dan id neighbor
(c)# neighbor 20.20.20.2 remote-as 30
(c)# network 10.10.10.0 mask 255.255.255.0
(c)# network 20.20.20.0 mask 255.255.255.0
(c)# network 192.168.20.0 mask 255.255.255.0
```