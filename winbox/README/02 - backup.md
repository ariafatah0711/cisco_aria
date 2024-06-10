system backup save name=backup_20_05_2024
/ip/address export file=backup_ip

file print
backup_20_05_2024 => file backupan
backup_ip.rsc => hanya configurasi di satu bagian saja

import backup_ip.rsc