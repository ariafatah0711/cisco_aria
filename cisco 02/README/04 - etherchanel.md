<a href="../../README.md#back">Back README.md...</a>

# etherchanel
## pengenalan
- etherchanel => merupakan fitur jaringan komputer yang memungkinkan beberapa jalur fisik menjadi satu jalur logis
- digunakan untuk meningkatkan throughput, meningkatkan ketersediaan, dan menyediakan redunansi dalam jaringan
- berfungsi untuk meingkatkan kapasitas dan keceptan transfer data

## jenis
- LACP
  - protokol yang memungkinkan switch untuk membentuk etherchanel dengan switch di sisi lain
- PAGP
  - protokol yang memungkinkan switch berkomunikasi dan mengatur pembentukan switch lain yang juga mendukung LACP

## mode
  - on :  dalam mode ini etherchanel di konfigurasi secara manual di setiap ujung link
  - active : aktif
  - passive : non aktif
  - desirable: diinginkan
  - auto : otomatis

## tabel LACP
| switch a | switch b | negotiation result |
| --- | --- | --- |
| active | active | negotiation successfull |
| active | passive | negotiation successfull |
| passive | passive | no negatiation |
| passive | on | no negatiation |

# configuration
## LACP
- switch ke switch dengan 3 kabel
  ```
  (c)# int ra fa <range_port>
  (c)# channel-group <id> mode <mode>
  (c)# int port-channel <id>
  (c)# sw mode trunk
  ```
- menampilkan configuration etherchanel
  ```
  # show etherchannel port-channel
  ```
  
## contoh
- switch A
  ```
  (c)# int ra fa 0/1-3
  (c)# channel-group 1 mode active
  (c)# channel-protocol lacp
  (c)# int port-channel 1
  (c)# sw mode trunk
  ```
- switch B
  ```
  (c)# int ra fa 0/1-3
  (c)# channel-group 1 mode active
  (c)# channel-protocol lacp
  (c)# int port-channel 1
  (c)# sw mode trunk
  #show etherchannel port-channel

  Logical slot/port   = 2/1       Number of ports = 3
  GC                  = 0x00000000      HotStandBy port = null
  Port state          = Port-channel 
  Protocol            =   PAGP
  Port Security       = Disabled

  Ports in the Port-channel:
  
  ------+------+------+------------------+-----------
    0     00     Fa0/1    Automatic          0
    0     00     Fa0/2    Automatic          0
    0     00     Fa0/3    Automatic          0
  ```