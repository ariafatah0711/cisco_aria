<a href="../../README.md#back">Back README.md...</a>

# vlan
## pengenalan
- singkatan dari Virtual Local Area Network
- VLAN adalah sebuah metode untuk membagi jaringan fisik menjadi beberapa jaringan virtual yabg terpisah secara logis.
- dengan menggunakan VLAN anda dapat memisahkan lalu lintas data antar perangkat dalam jaringan, bahkan jika mereka semua terhubung dengan switch yang sama

## mode vlan
### 1. mode access
- mode ini digunakan untuk menghubungkan perangkat end-user seperti komputer atau printer, ke jaringan VLAN.
- port dalam mode acces hanya dapat menjadi anggota dari satu VLAN

### 2. mode trunk
- mode ini digunakan untuk menghubungkan Switch dengan Switch dengan router
- port dalam mode Trunk dapat membawa lalu lintas dari beberap VLAN secara bersamaan melalui satu kabel fisik

### 3. mode voice
- Port yang dikonfigurasi dalam mode voice sering dihubungkan ke perangkat telepon IP.
- VLAN voice dapat digunakan untuk memisahkan lalu lintas suara dari data lainnya, meningkatkan kinerja dan manajemen jaringan.


# configuration
## vlan
- membuat vlan dan memberikan nama vlan
  ```
  (c)# vlan <id_vlan>
  (c)# name <name_vlan>
  ```

- menampilkan vlan
  ```
  # show vlan brief
  ```

- menghubungkan vlan switch ke pc
  ```
  (c)# int fa <port>
  (c)# switchport access vlan <id_vlan>
  ```

- setelah mengkonfigurasi setiap port PC, anda dapat menghubungkan switch ke switch dengan mode "access" untuk koneksikan perangkat end-point, atau "trunk" untuk mengizinkan lalu lintas VLAN yang lebih kompleks dan fleksibel.

- menghubugnkan vlan switch ke switch
  ```(c)# switchport mode trunk```
  atau
  ```(c)# switchport mode access```

## contoh
- membuat vlan
  ```
  (c)# vlan 10
  (c-v)# name kelompok_A
  (c-v)# vlan 20
  (c-v)# name kelompok_B
  (c-v)# exit
  
  #show vlan
  VLAN Name                             Status    Ports
  ---- -------------------------------- --------- -------------------------------
  1    default                          active    Fa0/1, Fa1/1, Fa2/1, Fa3/1
                                                  Fa4/1, Fa5/1
  10   kelompok_A                       active    
  20   kelompok_B                       active
  ```

- menghubungkan vlan switch ke pc
  ```
  (c)# int fa 0/1
  (c-if)# sw acc vlan 10

  (c)# int fa 1/1
  (c-if)# switchport access vlan 20
  ```
- menghubungkan vlan switch ke switch
  ```
  (c)# int fa 2/1
  (c-if)# sw mode acc
  atau
  (c-if)# sw mode tr

  # show vlan
  VLAN Name                             Status    Ports
  ---- -------------------------------- --------- -------------------------------
  1    default                          active    Fa3/1, Fa4/1, Fa5/1
  10   kelompok_A                       active    Fa0/1
  20   kelompok_B                       active    Fa1/1
  ```