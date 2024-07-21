<a href="../../README.md#back">Back README.md...</a>

# GLBP
## pengenalan
- Load Balancing Protocol (GLBP) adalah protokol milik Cisco yang merupakan salah satu FHRP yang menyediakan redundansi seperti yang lain selain itu, juga menyediakan penyeimbangan beban
    - Itu dapat melakukan fungsi seperti penyeimbangan beban melalui beberapa router menggunakan alamat IP virtual tunggal dan beberapa alamat Mac virtual.
    - Salah satu perbedaan utamanya adalah bahwa VRRP adalah standar industri sedangkan HSRP dan GLBP adalah protokol milik Cisco.
    - VRRP dan HSRP mendistribusikan diri mereka sendiri melalui satu layer 3 ethernet switch atau router untuk menjadi yang aktif dalam grup, sedangkan GLBP dapat menargetkan hingga empat router dengan mengonfigurasi skema load balancing.
    - Yang terbaik untuk dipilih adalah masalah jenis peralatan yang Anda inginkan, kompleksitas desain jaringan, atau terkadang preferensi pribadi.

- menggunakan active redundancy yang artinya tidak aktif dan standby
- sebenernya load balance taafik antar kedua perangkat sehingga terjadi failover
    - tetapi kedua perangkat tersebut sedang digunakan pada saat yang sama
    - jadi anggap saja seperti protokol pervy land spanning tree di mana anda dapat
    - memiliki jembatan akar yang berbeda dan menggunakan semua tautan sehingga hal yang sama
- di sini anda memiliki kedua perangkat ini yang bertindak sebagai perangkat cadangan yang berlebihan untuk satu sama lain
    - sehingga sebagian trafik di kirim melalui r1 sebagian trafik lainya akan dikirimkan memlalui r2
    - tetapi jika r1 turun maka semua traafik akan dikirimkan ke r2 dan sebaliknya

- AVG (active virtual gateway) => pengelol proses glbp
- AVF (active virtual forwarder) => proses pengalihan packet ketika salah satu router mati

# configuration
## GLBP
```bash
```

## contoh
```bash
```

## show
```bash
show glbp [brief]
show track [brief]
```

```bash
interface FastEthernet0/0
ip address 10.0.1.2 255.255.255.0
glbp 1 ip 10.0.1.1
glbp 1 timers <hello> <dead>
glbp 1 timers redirect <redirect> <time-out>
glbp 1 priority <priority>
glbp 1 preempt
glbp 1 forwarder preempt
glbp 1 authentication md5 key-string <password>
glbp 1 load-balancing <method>
glbp 1 weighting <weight> lower <lower> upper <upper>
glbp 1 weighting track <object> decrement <value>
```