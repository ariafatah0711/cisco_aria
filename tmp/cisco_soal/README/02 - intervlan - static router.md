<a href="../../README.md#back">Back README.md...</a>

# intervlan - static router

## 1. **perangkat**
- topologi
<img src="../../notes cisco/image/4_1.png">

## 2. **konfigurasi intervlan di switch**
- konfigurasi vlan di setiap interface
- konfigurasi di fa 0/1 => agar switch dan router dapat terhubung di trunk
```
(c)# int fa 0/1
(c)# switchport mode trunk
(c)# switchport nonegotiate
```

## 3. **konfigurasi router port gig 0/1 (route dan switch)**
- mengaktifkan port int gig 0/1 dulu dengan ```(c)# no sh```
- konfigurasi intervlan di setiap vlan
```
(c)# int gig 0/1.30
(c)# enca dot1Q 30
(c)# ip add 30.30.30.1 255.255.255.0 # membuat ip add di setiap vlan
```

## 3. **konfigurasi router port gig 0/0 (antar router)**
- konfigurasi ip add di gig 0/0
```
route 1
(c)# int gig 0/0
(c)# ip add 192.168.88.1 255.255.255.0
(c)# no sh

route 2
(c)# int gig 0/0
(c)# ip add 192.168.88.2 255.255.255.0
(c)# no sh
```

- konfigurasi static route
```
(c)# ip route <ip tujuan> <subnet> <antarmuka keluar / melalui jaringan tsb>

route1
(c)# ip route 30.30.30.0 255.255.255.0 gig 0/0
(c)# ip route 40.40.40.0 255.255.255.0 gig 0/0

route2
(c)# ip route 10.10.10.0 255.255.255.0 gig 0/0
(c)# ip route 20.20.20.0 255.255.255.0 gig 0/0
```