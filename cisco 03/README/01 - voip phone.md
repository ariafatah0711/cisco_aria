<a href="../00 - README.md">Back notes cisco..</a>

# Konfigurasi DHCP phone

1. **Setting Ip Address Router**
```
Router>en
Router#conf t
Router(config)#int fa0/0
Router(config-if)#ip address 192.168.1.1 255.255.255.0
Router(config-if)#no shut
```

2. **Setting IP DHCP Router**
```
Router(config)#ip dhcp pool VOICE
Router(dhcp-config)#default-router 192.168.1.1
Router(dhcp-config)#network 192.168.19.0 255.255.255.0
Router(dhcp-config)#option 150 ip 192.168.1.1
Router(dhcp-config)#ex
Router(config)#ip dhcp excluded-address 192.168.1.1
```

- **ip dhcp pool VOICE** merupakan perintah untuk membuat DHCP server bernama 
voice
- **default-router** merupakan perintah untuk menset alamat gateway
- **network 192.168.19.0 255.255.255.0** merupakan perintah untuk menset network dan 
subnetmask DHCP
- **option 150 ip 192.168.19.1** merupakan perintah option untuk memberikan ip dari 
daftar TFTP server
- **ip dhcp excluded-address 192.168.19.1** merupakan perintah agar ip 192.168.1.1 
tidak diberikan kepada client (pengecualian)

3. **setting telephony service di Router**
```
Router(config)#telephony-service 
Router(config-telephony)#max-dn 3
Router(config-telephony)#max-ephones 3
Router(config-telephony)#ip source-address 192.168.19.1 port 2000
Router(config-telephony)#auto assign 1 to 5
Router(config-telephony)#ex
```

- **max-dn** merupakan perintah untuk menentukan jumlah maksimal dial number
- **max-ephones** merupakan perintah untuk menentukan jumlah maksimal IP 
phone yang aktif
- **ip source address 192.168.19.1 port 2000** merupakan perintah agar IP Phone 
membuat pengalamatan berdasarkan sumber local (Router)

4. **setting voice vlan 1 di switch**
