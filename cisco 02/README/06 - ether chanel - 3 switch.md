<a href="00 - README.md">Back README.md..</a>

# Konfigurasi etherchanel 3 switch

## 1. **Konfigurasi**
- konfigurasi etherchanel
    - server
    ```
    (c)# int ra fa 0/1-2
    (c)# channel-group 1 mode active
    (c)# int ra fa 0/3-4
    (c)# channel-group 2 mode desirable
    
    (c)# int port-channel 1
    (c)# sw mode trunk
    (c)# int port-channel 2
    (c)# sw mode trunk
    ```

    - client_1
    ```
    (c)# int ra fa 0/1-2
    (c)# channel-group 1 mode active
    (c)# int port-channel 1
    (c)# sw mode trunk
    ```

    - client_2
    ```
    (c)# int ra fa 0/1-2
    (c)# channel-group 1 mode desirable
    (c)# int port-channel 1
    (c)# sw mode trunk
    ```

- konfigurasi VTP
    - server
    ```
    (c)# vlan 10
    (c)# name vlan10
    (c)# vlan20
    (c)# name vlan20

    (c)# vtp mode server
    (c)# vtp domain harbas.com
    (c)# vtp password 123
    ```

    - client_1
    ```
    (c)# vtp mode client
    (c)# vtp domain harbas.com
    (c)# vtp password 123
    ```

    - client_2
    ```
    (c)# vtp mode client
    (c)# vtp domain harbas.com
    (c)# vtp password 123
    ```
