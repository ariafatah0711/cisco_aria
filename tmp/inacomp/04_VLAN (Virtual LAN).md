# Pembuatan dan Konfigurasi VLAN

## 1. Pembuatan VLAN

**Teori:** VLAN (Virtual Local Area Network) memisahkan jaringan layer 2 menjadi beberapa domain broadcast logis.

**Konfigurasi:**

```bash
Switch(config)# vlan 10
Switch(config-vlan)# name LAN10
Switch(config)# vlan 20
Switch(config-vlan)# name LAN20
Switch(config)# vlan 99
Switch(config-vlan)# name Management
```

---

## 2. Mode Access

**Teori:** Mode ini digunakan untuk menghubungkan perangkat end-user ke VLAN tertentu.

**Konfigurasi:**

```bash
Switch(config)# interface fa0/6
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
```

---

## 3. Mode Trunk

**Teori:** Mengizinkan lalu lintas dari beberapa VLAN melewati satu link antar switch atau ke router.

**Konfigurasi:**

```bash
Switch(config)# interface fa0/1
Switch(config-if)# switchport mode trunk
```

---

## 4. Mode Voice

**Teori:** Memisahkan lalu lintas suara (VoIP) dari data biasa untuk kualitas layanan yang lebih baik.

**Konfigurasi:**

```bash
Switch(config)# interface fa0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# switchport voice vlan 20
```

---

## 5. Native VLAN

**Teori:** VLAN default yang tidak diberi tag pada trunk link.

**Konfigurasi:**

```bash
Switch(config)# interface fa0/1
Switch(config-if)# switchport trunk native vlan 99
```

---

## 6. Non-Negotiation (No Negotiation)

**Teori:** Menonaktifkan Dynamic Trunking Protocol (DTP) untuk keamanan dan stabilitas.

**Konfigurasi:**

```bash
Switch(config)# interface fa0/1
Switch(config-if)# switchport nonegotiate
```

---

## 7. Dynamic VLAN (melalui VTP)

**Teori:** VTP (VLAN Trunking Protocol) menyinkronkan konfigurasi VLAN antar switch dalam satu domain.

**Konfigurasi VTP Server:**

```bash
Switch(config)# vtp mode server
Switch(config)# vtp domain cisco
Switch(config)# vtp password cisco
```

**Konfigurasi VTP Client:**

```bash
Switch(config)# vtp mode client
Switch(config)# vtp domain cisco
Switch(config)# vtp password cisco
```

> Pastikan semua switch memiliki domain dan password yang sama.

---

## 8. VLAN Management

**Teori:** VLAN khusus untuk mengelola switch melalui IP.

**Konfigurasi:**

```bash
Switch(config)# interface vlan 99
Switch(config-if)# ip address 192.168.99.2 255.255.255.0
Switch(config-if)# no shutdown
Switch(config)# ip default-gateway 192.168.99.1
```

---

## 9. Inter-VLAN Routing (Router-on-a-Stick)

**Teori:** Metode menggunakan satu interface router dengan sub-interface untuk routing antar VLAN.

**Konfigurasi di Router:**

```bash
Router(config)# interface fa0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0

Router(config)# interface fa0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0

Router(config)# interface fa0/0.99
Router(config-subif)# encapsulation dot1Q 99
Router(config-subif)# ip address 192.168.99.1 255.255.255.0
```

**Konfigurasi di Switch (port ke router):**

```bash
Switch(config)# interface fa0/5
Switch(config-if)# switchport mode trunk
```

> Metode ini memungkinkan komunikasi antar VLAN melalui satu link fisik.

---