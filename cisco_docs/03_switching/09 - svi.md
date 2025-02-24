# svi(switch vlan interface)
## pengenalan
- Switch virtual interface (SVI), merupakan istilah khusus yang digunakan pada perangkat Cisco. Istilah ini mengacu pada sebuah virtual interface layer tiga pada sebuah switch. Istilah ini juga biasa dikenal dengan istilah VLAN. Secara default, SVI pada perangkat Cisco adalah VLAN 1. 

## fungsi
- Untuk Mengakses Perangkat Secara Remote
Dengan menambahkan ip address ke interface SVI dan menambahkan ip default gateway, maka kita dapat mengakses perangkat secara remote.

- Monitoring Perangkat
Dengan memberikan ip pada interface SVI kita dapat memonitor perangkat menggunakan software seperti MRTG atau software monitoring lainnya.

## svi
- config svi
  ```
  (c)# int vlan 1
  (c)# ip add 192.168.1.2 255.255.255.0
  (c)# no sh
  ```
- config vlan svi
  ```
  (c)# ip default-gateway 192.168.1.1 255.255.255.0
  ```