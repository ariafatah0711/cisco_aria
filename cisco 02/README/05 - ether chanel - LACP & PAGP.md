<a href="00 - README.md">Back README.md..</a>

# Konfigurasi etherchanel

## 1. **Pengenalan etherchanel**
- etherchanel => merupakan fitur jaringan komputer yang memungkinkan beberapa jalur fisik menjadi satu jalur logis
- digunakan untuk meningkatkan throughput, meningkatkan ketersediaan, dan menyediakan redunansi dalam jaringan
- berfungsi untuk meingkatkan kapasitas dan keceptan transfer data

- mode etherchanel
    1. LACP => protokol yang memungkinkan switch untuk membentuk etherchanel dengan switch di sisi lain
    2. PAGP => protokol yang memungkinkan switch berkomunikasi dan mengatur pembentukan switch lain yang juga mendukung LACP

- mode yang digunakan nantinya
    - on :  dalam mode ini etherchanel di konfigurasi secara manual di setiap ujung link
    - active : aktif
    - passive : non aktif
    - desirable: diinginkan
    - auto : otomatis

## 2. **LACP**
- LACP (Link Aggregation Control Protocol) adalah salah satu metode pengelompokan port (Ether chanel)
- 2 mode LACP
    - active => port secara aktif mengirimkan permintaan ke jaringan lain untuk membentuk ether chanel
    - pasive => port menunggu permintaan dari port di perangkat jaringan
- table LACP
| switch a | switch b | negotiation result |
| --- | --- | --- |
| active | active | negotiation successfull |
| active | passive | negotiation successfull |
| passive | passive | no negatiation |
| passive | on | no negatiation |

- configurasi LACP
```
(c)# int ra fa 0/1-3
(c)# channel-group 1 mode active
(c)# int port-channel 1
(c)# sw mode trunk

(c)# int ra fa 0/1-3
(c)# channel-group 1 mode active
(c)# int port-channel 1
(c)# sw mode trunk
```

- menampilkan konfigurasi ether chanel
```
#show etherchannel port-channel 
Logical slot/port   = 2/1       Number of ports = 3
GC                  = 0x00000000      HotStandBy port = null
Port state          = Port-channel 
Protocol            =   LACP
Port Security       = Disabled

Ports in the Port-channel:

Index   Load   Port     EC state        No of bits
------+------+------+------------------+-----------
  0     00     Fa0/1    Active             0
  0     00     Fa0/2    Active             0
  0     00     Fa0/3    Active             0
Time since last port bundled:    00d:00h:00m:22s    Fa0/3
```

## 2. **PAGP**
- PAGP (Port Aggregation Protocol) adalah salah satu metode pengelompokan port (Ether chanel)
- 2 mode PAGP
    - desirable => digunakan ketika anda ingin memulai proses pembentukan ether chanel secara aktif
    - auto mode => digunakan ketika ingin port berada dalam mode pasive dan menunggu sinyal dari 
    port di sisi lain yang berada dalam mode "desirable"

- table LACP
| switch a | switch b | negotiation result |
| --- | --- | --- |
| desirable | desirable | negotiation successfull |
| desirable | auto | negotiation successfull |
| auto | auto | no negatiation |
| auto | on | no negatiation |

- configurasi PAGP
```
(c)# int ra fa 0/1-3
(c)# channel-group 1 mode desirable
(c)# int port-channel 1
(c)# sw mode trunk

(c)# int ra fa 0/1-3
(c)# channel-group 1 mode auto
(c)# int port-channel 1
(c)# sw mode trunk
``` 

- menampilkan konfigurasi ether chanel
```
#show etherchannel port-channel 

Logical slot/port   = 2/1       Number of ports = 3
GC                  = 0x00000000      HotStandBy port = null
Port state          = Port-channel 
Protocol            =   PAGP
Port Security       = Disabled

Ports in the Port-channel:

Index   Load   Port     EC state        No of bits
------+------+------+------------------+-----------
  0     00     Fa0/1    Automatic          0
  0     00     Fa0/2    Automatic          0
  0     00     Fa0/3    Automatic          0
```