<!-- # etherchanel
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
|----------|----------|---------------------|
| active   | active   | negotiation successful |
| active   | passive  | negotiation successful |
| passive  | passive  | no negotiation       |
| passive  | on       | no negotiation       |

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
  ``` -->

## Kanvas EtherChannel

### Pengenalan

EtherChannel adalah teknologi pada perangkat jaringan (seperti switch Cisco) yang memungkinkan penggabungan beberapa link fisik (biasanya FastEthernet atau GigabitEthernet) menjadi satu link logis (logical interface) yang disebut Port-Channel.

**Tujuan utama EtherChannel:**

* **Meningkatkan throughput:** Bandwidth menjadi akumulasi dari link-link yang tergabung.
* **Redundansi:** Jika salah satu link dalam EtherChannel gagal, link lainnya tetap aktif.
* **Load Balancing:** Lalu lintas data dapat dibagi di antara jalur-jalur yang tergabung.

EtherChannel juga mengurangi kebutuhan akan protokol Spanning Tree karena semua link dianggap satu jalur logis, sehingga tidak diblokir oleh STP (Spanning Tree Protocol).

### Jenis Protokol EtherChannel

EtherChannel dapat menggunakan dua jenis protokol negosiasi:

#### 1. LACP (Link Aggregation Control Protocol)

* Standar IEEE 802.3ad.
* Dapat digunakan pada perangkat non-Cisco (karena standar terbuka).
* Secara otomatis melakukan negosiasi dan membentuk link agregasi antar perangkat.
* **Dua mode utama:**

  * **active:** Aktif mengirim LACP PDU untuk membentuk EtherChannel.
  * **passive:** Menunggu LACP PDU dari pihak lain.

#### 2. PAgP (Port Aggregation Protocol)

* Protokol proprietary milik Cisco.
* Hanya bekerja antar perangkat Cisco.
* Berfungsi untuk melakukan negosiasi otomatis pembentukan EtherChannel.
* **Dua mode utama:**

  * **desirable:** Aktif mengirim PAgP frame.
  * **auto:** Menunggu sinyal dari sisi lawan.

### Perbandingan Mode EtherChannel

| Protokol | Mode      | Deskripsi                                                 |
| -------- | --------- | --------------------------------------------------------- |
| LACP     | on        | Konfigurasi manual, tanpa negosiasi.                      |
| LACP     | active    | Mengirim LACP frame dan mencoba membentuk.                |
| LACP     | passive   | Menunggu LACP frame, hanya bergabung jika lawan "active". |
| PAgP     | on        | Konfigurasi manual, tanpa negosiasi.                      |
| PAgP     | desirable | Aktif mengirim PAgP frame.                                |
| PAgP     | auto      | Merespons hanya jika lawan menggunakan "desirable".       |

### Tabel Negosiasi LACP

| Switch A Mode | Switch B Mode | Hasil Negosiasi |
| ------------- | ------------- | --------------- |
| active        | active        | Berhasil        |
| active        | passive       | Berhasil        |
| passive       | passive       | Gagal           |
| on            | on            | Berhasil        |
| on            | passive       | Gagal           |

### Langkah-langkah Konfigurasi EtherChannel

#### LACP Configuration (Switch ke Switch, 3 Kabel)

**Langkah Umum:**

```bash
(c)# interface range fa0/1 - 3
(c)# channel-group 1 mode active
(c)# channel-protocol lacp
(c)# interface port-channel 1
(c)# switchport mode trunk
```

**Perintah Verifikasi:**

```bash
# show etherchannel summary
# show etherchannel port-channel
# show running-config
```

**Contoh Konfigurasi LACP**

*Switch A:*

```bash
(c)# interface range fa0/1 - 3
(c)# channel-protocol lacp
(c)# channel-group 1 mode active
(c)# interface port-channel 1
(c)# switchport mode trunk
```

*Switch B:*

```bash
(c)# interface range fa0/1 - 3
(c)# channel-protocol lacp
(c)# channel-group 1 mode active
(c)# interface port-channel 1
(c)# switchport mode trunk
```

#### PAgP Configuration

**Contoh Konfigurasi PAgP**

*Switch A (desirable):*

```bash
(c)# interface range fa0/1 - 2
(c)# channel-group 2 mode desirable
(c)# interface port-channel 2
(c)# switchport mode access
```

*Switch B (auto):*

```bash
(c)# interface range fa0/1 - 2
(c)# channel-group 2 mode auto
(c)# interface port-channel 2
(c)# switchport mode access
```

### Verifikasi EtherChannel

Perintah untuk melihat status EtherChannel:

```bash
# show etherchannel summary
# show etherchannel port-channel
# show etherchannel load-balance
# show interfaces port-channel
```

**Contoh output `show etherchannel summary`:**

```
Group  Port-channel  Protocol    Ports
------+--------------+-----------+-------------------------------
1      Po1(SU)         LACP       Fa0/1(P) Fa0/2(P) Fa0/3(P)

Flags:
  D - down        P - bundled in port-channel
  S - Layer2      U - in use
```

### Catatan Penting

* Semua interface yang akan digabung harus:

  * Memiliki konfigurasi identik (mode trunk/access, VLAN, duplex, speed).
  * Tidak boleh ada IP di interface fisik, hanya pada port-channel.
* Jika konfigurasi berbeda, EtherChannel tidak akan terbentuk.
* EtherChannel mendukung load balancing berdasarkan MAC/IP/Src-Dst Port (dapat diatur dengan `port-channel load-balance`).
