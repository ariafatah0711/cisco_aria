# how to make
## initial network
- masukin soal di initial network
![1769247117737](images/README/1769247117737.png)

## answer network
- masukin jawban di answer network

# desc
cara menyelesaikan soal ini adalah dengan melakukan default route ke gateway yang ada di isp

1. buka perangkat Router 0
2. masuk ke menu CLI
3. masukkan perintah berikut:
```bash
enable
configure terminal
ip route 0.0.0.0 0.0.0.0 10.10.10.2
```

setelah berhasil Compleated Feedback, dan nanti akan muncul flag dari soal ini.

```bash

<p>cara menyelesaikan soal ini adalah dengan melakukan default route ke gateway yang ada di isp</p>
<ol>
    <li>buka perangkat Router 0</li>
    <li>masuk ke menu CLI</li>
    <li>masukkan perintah berikut:</li>
</ol>
<pre><code class="language-bash">enable
configure terminal
ip route 0.0.0.0 0.0.0.0 10.10.10.2</code></pre>

<p>jika sudah bisa coba lakukan tes koneksi ke internet dengan perintah ping 8.8.8.8 dengan cara</p>
<ol>
    <li>buka perangkat PC 0</li>
    <li>masuk ke menu Desktop > Command Prompt</li>
    <li>masukkan perintah berikut:</li>
</ol>
<pre><code class="language-bash">ping 8.8.8.8</code></pre>

<p>setelah berhasil click <strong>Check Result</strong> yang ada di bawah deskripsi ini, dan nanti akan muncul flag dari soal ini.</p>
```

password: ariaf
## flag
FGTE{Network_Route_Successful}
