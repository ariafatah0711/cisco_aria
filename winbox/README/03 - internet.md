<a href="../../README.md#back">Back README.md...</a>

# membuat koneksi internet dengan menembak wifi
- tambahkan ip address pada ether 1-4 atau bisa gunakan bridge
- tambahkan security profil di wirelless > security profile. dan aktifkan wpa dan wpa2psk dengan kunci dynamix beserta password wifi kita
- jika sudah kita bisa pergi ke wirlkess lalu aktifkan wlan 1, dan ubah mode nya menjadi station untuk koensi koneksi ke wifi.
    - ubah ssid menjadi ssid wifi kita / bisa gunakan fitur scan
    - ubah juga security profile yang kita buat tadi
    - jika sudah nanti seharusnya akan berubah menjadi R si wlan 1 nya. yang menandakan bahwa wlan 1 ini sudah bisa terkoneksi ke wifi kita
    - kita juga bisa lihat di wirlless > registasion untuk melihat wirlless kita
- buat dhcp client untuk mendapatkan ip dhcp dari si wifi kita.
    - pergi ke ip > dhcp client, lalu tambahkan wlan 1 dan jangan lupa centang ntp, dan dns nya
    - Status bound menandakan bahwa wlan1 sudah mendapatkan IP address dari AP
    - Pada IP>address>interface terdapat dynamic IP addres pada wlan 1
- tambahkan nat massquirede agar bisa terkoneksi ke internet
    - pergi ke ip > firewall > nat, lalu tambahkan chain=srcnat out interface=wlan 1, dan action masquerade