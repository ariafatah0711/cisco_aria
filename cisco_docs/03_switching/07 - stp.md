# stp
## pengenalan
-  Spanning Tree Protocol (STP) merupakan protocol yang berfungsi mencegah loop pada switch ketika switch menggunakan lebih dari 1 link dengan maksud  redundancy. 
    - STP secara defaultnya diset aktif pada Cisco Catalyst. 
    - STP merupakan  open standard (IEEE 802.1D). STP dapat mencegah: 
        - Broadcast Storm
        - Multiple Frame Copies
        - Database Instability
- stp Portfast => merupakan salahsatu fitur STP. Ketika pertama kali mencolokkan kabel ke switch,
    - perlu waktu agak lama dari proses blocking yang ditandai warna oranye pada lampu indicator untuk menjadi forwarding yang ditandai dengan warna kuning. 
      ```
      STP Port States: 
      Blocking 20 second/no limits 
      Listening 15 second 
      Learning 15 second 
      Forwarding no limits 
      Disable no limits 
      ```
    - Hal ini disebabkan switch melakukan step listening dan learning terlebih dahulu sebelum forward
    - Dari proses blocking, listening dan learning kira-kira dibutuhkan waktu 30 detik
        - Untuk langsung ke forward tanpa melalui listening dan learning maka digunakan portfast. Portfast cocok digunakan untuk port yang mengarah ke end host
    - Untuk port yang mengarah ke switch, maka tidak direkomendasikan karena akan mematikan fungsi STP dalam mencegah looping.

## diference

Base/Critrea | STP | PVST | RSTP | RPVST | MSTP
--- | --- | --- | --- | --- | --- |
Developer/creator | IEEE | Cisco | IEEE	| Cisco | IEEE
Standard | Open-Standard | Proprietary | Open-Standard | Proprietary | Open-Standard
Support VLAN | No | Yes | No | Yes | Yes
Instance | One per switch | One Per VLAN | One per switch | One Per VLAN | One Per VLAN
Support PortFast | No | Yes | No | Yes | No
Support EtherChannel | No | Yes | No | Yes | No
Runs on | All switches | Only on Cisco switches | All switches | Only on Cisco switches | All switches
Convergence	| Slow | moderate | fast | Fast | Fast

## jenis stp
- Open Standard : STP (802.1D), Rapid STP (802.1W), Multiple Spanning Tree MST (802.1S)
- Cisco Proprietary : PVST (Per Vlan Spanning Tree), PVST+, Rapid PVST.

## Cara kerja STP
1. Ketika STP aktif, masing-masing switch akan mengirimkan frame khusus satu sama lain yang disebut **Bridge Protocol Data Unit (BPDU)**
2. Menentukan Root Bridge
    - Switch dengan bridge id terendah akan menjadi root bridge. Bridge id = priority + MAC address. 
    - Dalam satu LAN hanya ada satu switch sebagai root bridge, switch lain menjadi non-root bridge. Default priority adalah 32768 dan bisa diubah
3.  Menentukan Root Port
    - Yang menjadi root port adalah path yang paling dekat dengan root bridge. 
        - Untuk setiap non-root bridge hanya punya 1 root port
4. Menentukan designated port dan non-designated port
    - Designated port adalah port yang forward dan non designated port adalah port yang blocking. 
    - Untuk root bridge semua portnya adalah designated port.
    - Switch dengan priority terendah, salah satu portnya akan menjadi non-designated port atau port blocking. 
        - Jika priority sama maka akan dilihat MAC address terendah
    - STP akan membuat blocking atau shutdown pada salahsatu port untuk mencegah terjadinya loop. 
        - Ketika link utama down maka port yang sebelumnya blocking akan menjadi forward. 
        - Port blocking ditunjukkan dengan warna merah. 
    - STP menggunakan link cost calculation untuk menentukan root port pada non-root switch. 
        - 10 Gbps = Cost 2
        - 1 Gbps = Cost 4
        - 100 Mbps = Cost 19
        - 10 Mbps = Cost 100

# configuration
## spt
```bash
Switch1#sh spanning-tree 
VLAN0001
 Spanning tree enabled protocol ieee
 Root ID Priority 32769 # default nya adalah 32769

spanning-tree vlan 1 priority 0 # merubah root bridge nya
spanning-tree vlan 1 priority 4096 # ketika merubah priority harus kelipatan 4096
# saat kita merubah priority nantinya id root bridge nya akan bertambah 1

int f0/1
speed 10 # memindahkan blocking port dari fa0/2 ke fa 0/1
```

## stp portfast
```bash
int range fa0/1-4
spanning-tree portfast
```

## show
```
# show spanning-tree
```



##### 2 #####
# STP (Spanning Tree Protocol)

## Pengenalan

**Spanning Tree Protocol (STP)** adalah protokol yang digunakan untuk mencegah terjadinya loop pada jaringan switch, terutama ketika terdapat lebih dari satu jalur (redundansi) antar switch.

* STP secara otomatis memblokir jalur tertentu untuk membentuk topologi bebas loop.
* STP secara default aktif pada perangkat Cisco Catalyst.
* Merupakan protokol open standard yang diatur oleh IEEE 802.1D.

### STP Mencegah Masalah Berikut:

* **Broadcast Storm**: Banjir broadcast tak terkendali.
* **Multiple Frame Copies**: Frame yang sama diterima berkali-kali oleh tujuan.
* **MAC Database Instability**: Tabel MAC menjadi tidak stabil akibat terjadinya loop.

## STP Port States

Ketika kabel terhubung atau port aktif, STP akan melewati beberapa state:

```
Blocking     - 20 detik / tanpa batas (mencegah loop)
Listening    - 15 detik (mendengarkan BPDU)
Learning     - 15 detik (membangun MAC Address Table)
Forwarding   - tanpa batas (mengirim dan menerima data)
Disabled     - tanpa batas (port dinonaktifkan secara manual)
```

Total waktu dari Blocking ke Forwarding dapat mencapai 30 detik.

## PortFast

**PortFast** adalah fitur yang mempercepat port untuk langsung masuk ke mode forwarding tanpa melewati listening dan learning.

* Cocok digunakan pada port yang mengarah ke end-host (PC, printer, dsb).
* Tidak direkomendasikan untuk port trunk atau port yang terhubung ke switch lain.

```bash
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree portfast
```

## BPDU (Bridge Protocol Data Unit)

* BPDU adalah pesan yang dikirim antar switch untuk pertukaran informasi STP.
* Digunakan untuk pemilihan:

  * Root Bridge
  * Path Cost terendah
  * Designated / Blocked Port

## Fitur-Fitur Keamanan STP

### 1. BPDU Guard

Melindungi port PortFast agar tidak menerima BPDU. Jika menerima, port akan masuk status err-disable.

```bash
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree bpduguard enable
```

### 2. BPDU Filter

Memblokir pengiriman dan/atau penerimaan BPDU. Berisiko tinggi.

```bash
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree bpdufilter enable
```

### 3. Root Guard

Mencegah switch lain mengambil alih sebagai Root Bridge. Jika menerima BPDU superior, port akan masuk root-inconsistent.

```bash
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree guard root
```

### 4. Loop Guard

Mencegah port menjadi forwarding saat tidak menerima BPDU akibat gangguan satu arah (unidirectional link).

```bash
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree guard loop
```

## Jenis STP

| Tipe  | Standar IEEE      | Catatan                |
| ----- | ----------------- | ---------------------- |
| STP   | 802.1D            | Open standard          |
| RSTP  | 802.1W            | Rapid Spanning Tree    |
| MST   | 802.1S            | Multiple Spanning Tree |
| PVST  | Cisco Proprietary | Per VLAN Spanning Tree |
| PVST+ | Cisco Proprietary | Enhanced PVST          |
| RPVST | Cisco Proprietary | Rapid PVST             |

## Perbandingan STP Family

| Base/Critrea     | STP      | PVST   | RSTP     | RPVST  | MSTP     |
| ---------------- | -------- | ------ | -------- | ------ | -------- |
| Developer        | IEEE     | Cisco  | IEEE     | Cisco  | IEEE     |
| Standard         | Open     | Prop.  | Open     | Prop.  | Open     |
| VLAN Support     | No       | Yes    | No       | Yes    | Yes      |
| Instance         | 1/switch | 1/VLAN | 1/switch | 1/VLAN | 1/Region |
| PortFast Support | No       | Yes    | No       | Yes    | No       |
| EtherChannel     | No       | Yes    | No       | Yes    | No       |
| Device Support   | Semua    | Cisco  | Semua    | Cisco  | Semua    |
| Convergence      | Lambat   | Sedang | Cepat    | Cepat  | Cepat    |

## Cara Kerja STP

1. **Pengiriman BPDU**

   * Setiap switch mengirimkan Bridge Protocol Data Unit (BPDU) untuk saling bertukar informasi.

2. **Pemilihan Root Bridge**

   * Switch dengan Bridge ID terendah terpilih sebagai root bridge.
   * Bridge ID terdiri dari Priority + MAC Address.
   * Default priority: 32768 (dapat diubah dengan kelipatan 4096).

3. **Penentuan Root Port**

   * Port dengan jalur terpendek (lowest path cost) ke root bridge.
   * Setiap switch hanya memiliki satu root port.

4. **Penentuan Designated dan Non-Designated Port**

   * Designated Port: port yang mengirim BPDU dan aktif (forwarding).
   * Non-Designated Port: port yang diblokir (blocking) untuk mencegah loop.
   * Root Bridge: semua port-nya designated.
   * Pemilihan dilakukan berdasarkan priority dan MAC address.

5. **Cost Path (Link Cost Calculation)**

   * Digunakan untuk memilih jalur terbaik ke root bridge.

```
10 Gbps  = Cost 2
1 Gbps   = Cost 4
100 Mbps= Cost 19
10 Mbps = Cost 100
```

## Konfigurasi STP

### Menampilkan Informasi STP

```bash
Switch# show spanning-tree
```

### Mengubah Prioritas Root Bridge

```bash
Switch(config)# spanning-tree vlan 1 priority 0
Switch(config)# spanning-tree vlan 1 priority 4096
```

### Mengatur Kecepatan untuk Pengaruh Path Cost

```bash
Switch(config)# interface f0/1
Switch(config-if)# speed 10
```

### Mengaktifkan PortFast pada Beberapa Interface

```bash
Switch(config)# interface range fa0/1 - 4
Switch(config-if-range)# spanning-tree portfast
```






##### 3 #####
# STP (Spanning Tree Protocol)

## Pengenalan

* **Spanning Tree Protocol (STP)** merupakan protokol yang berfungsi **mencegah terjadinya loop** pada jaringan switch, terutama saat terdapat lebih dari satu jalur atau link antar switch (redundansi).
* STP akan **secara otomatis memblokir sebagian jalur** untuk membentuk **topologi bebas loop**.
* STP secara default **aktif pada perangkat Cisco Catalyst**.
* STP merupakan **open standard** yang diatur oleh **IEEE 802.1D**.
* STP mencegah beberapa masalah pada jaringan switch:
  * **Broadcast Storm**: terjadinya banjir broadcast tak terkendali.
  * **Multiple Frame Copies**: frame yang sama dikirim berkali-kali ke tujuan.
  * **MAC Database Instability**: ketidakstabilan tabel MAC address akibat frame loop.

## STP Port States

Ketika kabel switch baru dicolokkan atau port baru aktif, STP akan melalui beberapa state berikut:

```
STP Port States:
Blocking     - 20 detik / tanpa batas (mencegah loop)
Listening    - 15 detik (mendengarkan BPDU)
Learning     - 15 detik (membangun MAC Address Table)
Forwarding   - tanpa batas (mengirim dan menerima data)
Disabled     - tanpa batas (port dimatikan secara manual/admin)
```

Total waktu dari blocking → forwarding bisa **mencapai 30 detik**, yang dapat menyebabkan keterlambatan koneksi pada perangkat end-host.

## PortFast

* **PortFast** adalah fitur STP yang **mempercepat transisi port** ke mode **forwarding**, **melewati listening dan learning**.
* Digunakan pada port yang **terhubung ke end-host (PC, printer, dll)**, bukan ke switch lain.
* **Tidak direkomendasikan pada port trunk atau port yang terhubung ke switch lain**, karena **berisiko menyebabkan loop**.

```bash
# Mengaktifkan PortFast
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree portfast
```

## BPDU (Bridge Protocol Data Unit)

* **BPDU** adalah jenis pesan yang **dikirim antar switch** untuk **bertukar informasi STP**.
* Digunakan untuk memilih:

  * **Root Bridge**
  * **Path Cost** terendah ke root
  * **Designated/Blocked Port**
* Port dengan PortFast aktif **masih dapat menerima dan mengirim BPDU**, kecuali dinonaktifkan secara eksplisit.

## BPDU Guard

* **BPDU Guard** digunakan untuk **melindungi port dengan PortFast** agar **tidak menerima BPDU**.
* Jika sebuah port dengan PortFast menerima BPDU, maka port tersebut **langsung dinonaktifkan (err-disabled)** untuk mencegah loop.
* Cocok digunakan pada port akses ke end-host.

```bash
# Mengaktifkan BPDU Guard
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree bpduguard enable
```

## BPDU Filter

* **BPDU Filter** digunakan untuk **memblokir pengiriman dan/atau penerimaan BPDU**.
* Dapat digunakan secara:

  * **Global**: mencegah semua port mengirim BPDU.
  * **Interface**: digunakan dengan PortFast agar port benar-benar seperti port biasa tanpa STP.
* **Risiko tinggi**, karena bisa membuat loop tanpa peringatan.

```bash
# Mengaktifkan BPDU Filter (interface level)
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree bpdufilter enable
```

## Root Guard

* **Root Guard** digunakan untuk **mencegah switch lain menjadi Root Bridge** secara tidak sah.
* Jika port menerima BPDU superior (lebih baik dari root saat ini), maka port akan masuk ke **status "root-inconsistent"** dan tidak akan digunakan sampai ancaman hilang.

```bash
# Mengaktifkan Root Guard
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree guard root
```

## Loop Guard

* **Loop Guard** mencegah kondisi di mana **port yang seharusnya blocking berubah menjadi forwarding** karena **tidak menerima BPDU** (misalnya karena link unidirectional).
* Jika Loop Guard aktif dan tidak ada BPDU yang diterima, maka port akan masuk ke **"loop-inconsistent state"**, bukan forwarding.

```bash
# Mengaktifkan Loop Guard
Switch(config)# interface FastEthernet0/1
Switch(config-if)# spanning-tree guard loop
```
