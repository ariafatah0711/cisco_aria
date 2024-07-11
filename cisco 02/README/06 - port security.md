<a href="../../README.md#back">Back README.md...</a>

# port security
## pengenalan
- port security => Port Security ini digunakan agar port interface perangkat cisco tidak dapat 
digunakan kecuali untuk PC dengan MAC Address tertentu.

## add mac
- Static
    - Memasukan MAC address yang dapat diterima pada port tersebut secara manual, dan ketika switch mati data tidak akan hilang.
- Dynamic
    - Switch secara otomatis akan mengenal MAC address pertama yang terhubung, namun saat switch mati MAC address akan hilang.
- Sticky
    - Switch akan akan otomatis menyimpan MAC address yang pertama dan selanjutnya yang terhubung, dan ketika switch mati data tidak akan hilang.
    - Sticky artinya bahwa MAC address yang pertama kali lewat switch maka itulah  yang digunakan. 
        - Jika bukan MAC address tsb yang tersambung ke port yang diset port-security maka akan diproses tergantung violation yang diset. 

## violation
- protect => data yang dikirim melalui port tersebut akan di drop.
    - data yg dikirim melalui port tsb dibiarkan tdk terkirim
- restrict => seperti protect namun akan dikirimkan notifikasi dengan snmtp.
    - seperti protect namun mengirimkan notifikasi dgn snmp
- shutdown => port akan dimatikan apabila port tersebut dihubungkan dengan port yang berbeda dengan port yang sudah pernah di daftarkan port tersebut
    - port akan dishutdown secara otomatis, utk mengembalikannya maka harus di no shut dengan console switch atau telnet.

# configuration
## 
```bash
int fa 0/1
sw mode acc
switchport port-security
switchport port-security max 1 # max macc address
switchport port-security mac-address sticky # dynammic sticky
switchport port-security violation protect # drop packet

int fa 0/2
sw mode acc
switchport port-security
switchport port-security max 1
sw port-security mac-address 0001.64ca.eb89
switchport port-security violation restrict # drop packet with snmtp

int fa 0/3
sw mode acc
switchport port-security
switchport port-security max 1
switchport port-security mac-address sticky
switchport port-security shutdown # port akan dimatikan
```

## show
```
# show mac-address-table
# show port-security
```
