show running-config Displays the current configuration of a device.
show version Displays the device version.
show cpu Displays the CPU utilization of a device.
show interface counters Displays the interface statistics of a device.
show log Displays device logs.
show arp Displays the ARP table of a device.
show mac-address-table Displays the MAC address table of a device.
show clock Displays the current time.

Ruijie#write Saves the configuration.
Ruijie(config)#no command Deletes a specific command.
Ruijie#delete config.text Restores factory settings (VLANs do not needto be deleted separately on 
Ruijie devices).
Ruijie#copy flash:config.text flash:config.bak Backs up the currently saved configuration.
Ruijie#copy flash:config.bak flash:config.text Restores the backup configuration and uses itto overwrite the currently saved configuration.
Ruijie#reload