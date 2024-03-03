# cisco academy
# IOS
- enable => mode user to mode privilage
- disable => mode privilege to mode user
- configure terminal => mode privilage to mode config
- exit => back 1 mode ex: config-if to config, mode config to mode privilage
- end => mode sub configuration to mode privilage
- Ctrl + Z\C => mode sub configuration to mode privilage
- line console 0 => to interface console
- line vty 0 15 => terminal virtual
- interface vlan 1

# shorcut ios
| key | description |
| --- | --- |
| Tab | menyelesaikan entri nama perintah |
| backsapace | menghapus karakter di sebelah kiri |
| Ctrl + D | menghapus satu karakter di kursor |
| Ctrl + K | menghpaus karakter dari kursor kiri ke kanan |
| Ctrl + U/X | menghapus karakter dari kursor kanan ke kiri |
| Ctrl + W | menghapus karakter di sebelah kiri kursor |
| Ctrl + A | memindahkan kursor ke awal baris |
| Ctrl + E | memindahkan kursor ke akhir baris |
| Ctrl + Z/C | mode apapun menjadi mode privilage |
| Ctrl + R | jika tiba tiba ada teks yang menggagu gitu |
| Ctrl + Shift + 6 | exit *Translating "test"...domain server (255.255.255.255)* |
| Esc + D | menghapus semua karakter hingga akhir kata |

# show
- show running-config => show running config
- show interfaces => show interface
- show ip interface => show layer 3 ip interface
- show arp => show arp mac address
- show ip route => show ip route
- show protocols => protokol
- show version => show versi

# konfigurasi switch dasar
- line console 0
  - password 123
  - login
- line vty 0 15
  - password 123
  - login
- service password-encryption
- benner motd #test#

# vlan ip switch svi(seitch vlan interface)
- int vlan 1
- ip add 192.168.1.1 255.255.255.0
- no sh

# konfigurasi router dasar
- hostname R1
- enable secret password
- line console 0
  - password 123
  - login
- line vty 0 4
  - password 123
  - login
  - transport input {ssh | telnet | none | all}
- service password-encryption
- benner motd #test#

# security
- sh ip ssh
- ip domain-name cisco.com
- crypto key generate rsa
  - 1024
- username admin secret ccna
- line vty 0 15
  - transport input ssh
  - login local
- ip ssh version 2
- sh ip ssh
- sh ssh

# default gateway
- ip default-gateway 192.168.10.1

# file cisco
- pkt => basic
- pka => activity
- ptta => file pka + asset media
- pkz(telah digantikan di pka, pkt) => gambar / file (namun sudah tidak digunakan lagi)

# jenis pelatihan
- PTMO(packet tracer media object)
  - dapat berupa file .pkt atau .pka.
- PTMO (packer tracer skill assesment)
  - akan muncul sejalan dengan pertanyaan pada kuis, ujian modul, atau jenis penilaian bertingkat lainnya. Anda meluncurkan file .pkt atau .pka langsung dari dalam penilaian. 
- PTSA() => 
  - di titik tengah dalam kursus atau di akhir kursus. PTSA adalah penilaian keterampilan sumatif di mana Anda menunjukkan keterampilan Anda dengan menerapkan teknologi yang telah Anda pelajari. PTSA adalah penilaian mandiri, memiliki mesin penilaian sendiri, dan hasilnya dicatat dalam buku nilai kursus, jika ada. Setelah menyelesaikan PTSA, Anda menerima umpan balik tingkat item untuk setiap komponen yang dinilai.

