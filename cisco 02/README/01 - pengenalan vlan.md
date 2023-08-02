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
```
#vlan 10
#name kelompok a
#exit


```

