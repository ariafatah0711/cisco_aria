# 🧩 Daftar Topik Konfigurasi Jaringan Cisco

## 1. IPv4 Addressing

* Pengaturan alamat IP
* Subnetting
* CIDR (Classless Inter-Domain Routing)
* Penggunaan subnet mask

## 2. Konfigurasi Dasar

* Konfigurasi hostname
* Alamat IP interface
* Gateway default
* Konfigurasi password (enable, console, vty)
* Konfigurasi domain name
* Konfigurasi DNS server
* Konfigurasi waktu (clock)
* Banner MOTD
* Menyimpan konfigurasi (copy run start)

## 3. Remote Access & SSH

* Konfigurasi line console
* Konfigurasi line vty
* Enkripsi password
* Konfigurasi domain name
* Pembuatan user lokal
* Konfigurasi SSH
* SSH version 2
* Autentikasi pengguna lokal

## 4. VLAN (Virtual LAN)

* Pembuatan VLAN
* Mode access
* Mode trunk
* Mode voice
* Native VLAN
* Non-negotiation (no negotiation)
* Dynamic VLAN (melalui VTP)
* VLAN management
* Inter-VLAN routing (router-on-a-stick)

## 5. VTP (VLAN Trunking Protocol)

* Dynamic Trunking Protocol (DTP)
* VTP mode (server, client, transparent)
* VTP domain
* VTP password
* Versi VTP

## 6. Spanning Tree Protocol (STP)

* STP (IEEE 802.1D)
* Rapid STP (RSTP - IEEE 802.1w)
* Multiple STP (MSTP - IEEE 802.1s)
* UplinkFast
* BackboneFast
* Root bridge
* Secondary (backup) root bridge
* PortFast
* BPDU (Bridge Protocol Data Unit)
* BPDU Guard
* BPDU Filter
* Root Guard
* Loop Guard

## 7. Link Aggregation (EtherChannel)

* LACP (Link Aggregation Control Protocol)

  * Mode on
  * Mode active
  * Mode passive
* PAgP (Port Aggregation Protocol)

  * Mode on
  * Mode auto
  * Mode desirable

## 8. Port Security

* Penambahan MAC address

  * Static
  * Dynamic
  * Sticky
* Tindakan pelanggaran (violation)

  * Protect
  * Restrict
  * Shutdown

## 9. Access Control List (ACL)

* Numbered ACL
* Named ACL
* Standard ACL
* Extended ACL
* Aplikasi ACL pada interface dan arah trafik (inbound/outbound)

## 10. DHCP (Dynamic Host Configuration Protocol)

* Pembuatan DHCP pool
* DHCP excluded address
* Konfigurasi opsi (default-router, dns-server)

## 11. Network Address Translation (NAT)

* Static NAT
* Dynamic NAT
* PAT (Port Address Translation)
* ACL untuk NAT

## 12. Static Routing

* Konfigurasi route statik
* Default route (0.0.0.0/0)
* Verifikasi routing table

## 13. Dynamic Routing Protocols

* RIP (Routing Information Protocol)

  * Konfigurasi RIP
  * Redistribute
* OSPF (Open Shortest Path First)

  * Area backbone
  * Multiple area
  * Virtual link
  * Redistribute
  * Router ID
* EIGRP (Enhanced Interior Gateway Routing Protocol)

  * Konfigurasi EIGRP
  * Redistribute
  * Passive interface

## 14. First Hop Redundancy Protocol (FHRP)

* HSRP (Hot Standby Router Protocol)

  * Konfigurasi dua router (failover)
* VRRP (Virtual Router Redundancy Protocol)

  * Konfigurasi dua atau lebih router (failover)
* GLBP (Gateway Load Balancing Protocol)

  * Round-robin (pembagian beban)

## 15. VPN (Virtual Private Network)

* Konfigurasi VPN site-to-site
* Konfigurasi VPN remote access
* IPsec VPN
* SSL VPN
* Enkripsi dan autentikasi

## 16. VOIP (Voice Over IP)

* DHCP pool untuk VOIP
* Konfigurasi telephony service
* Pembuatan ephone dan dial-peer
* VLAN voice
* VOIP antar-router dengan konfigurasi dial-plan