#!/bin/bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"$class": "org.decentralized.energy.network.Energy", "energyID": "56230", "units": "10", "value": "'"$(date +'%s')"'", "ownerID": "12", "ownerEntity": "Resident","description":"udp","flag":"0"}' 'http://localhost:3000/api/Energy'
sleep 10
#curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/Energy'
