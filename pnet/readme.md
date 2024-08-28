# vpc
```sh
set pcname test # hostname

# ipv4
ip <address> <netmask> <gateway>
ip 192.168.10.2 255.255.255.0 192.168.10.1
ip dns 8.8.8.8

# remote
rlogin 192.168.10.1 23
trace 

# show information
show
show ip

save # save configuration to startup
```

# add qemu / os in pnet
- install
- sftp to the server pnet
- /opt/unetlab/addons/qemu
- make folder mikrotik-version
- add add file
- lalu ubah namanya jadi hda.qcow2

```
/opt/unetlab/wraappers/iol_wrapper -a permissions
/opt/unetlab/wraappers/un1_wrapper -a fixpermissions
```