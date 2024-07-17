<a href="../../README.md#back">Back README.md...</a>

# dyanamic nat
## pengenalan
- dynamic nat => mengubah banyak ip private menjadi banyak ip public
    - menejermahkan alamaat ip private ke ip public namun hanya dari jaringan yang sama

# configuration
## dyanamic nat
```js
ip route 0.0.0.0 0.0.0.0 se2/0

ip nat pool <nama_nat> <ip_range> <ip_range> netmask <subnet_mask> # ip pub
ip nat inside source list <id_acl> pool <nama_nat>

access-list <id> permit <network_local> <subnet_masuk>
```

## contoh
```bash
ip route 0.0.0.0 0.0.0.0 se2/0

ip nat pool internet 10.201.25.3 10.201.25.50 netmask 255.255.255.0 # masukan ip yang akan di translasikan
ip nat inside source list 1 pool internet # add ip nat in group acl to pool internet

access-list 1 permit 192.168.10.0 0.0.0.255 # add acl
```

## show
```sh
show ip nat translations
show ip nat statistics
```