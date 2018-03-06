#!/bin/bash

# 创建coins1
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"$class": "org.decentralized.energy.network.Coins",
          "coinsID": "CO_1", "value": 5,
          "ownerID": "1", "ownerEntity": "Resident"}' \
    'http://localhost:3000/api/Coins'

# 创建coins2
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"$class": "org.decentralized.energy.network.Coins",
          "coinsID": "CO_2", "value": 5,
          "ownerID": "2", "ownerEntity": "Resident"}' \
    'http://localhost:3000/api/Coins'
# 创建coins3
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"$class": "org.decentralized.energy.network.Coins",
          "coinsID": "CO_3", "value": 5,
          "ownerID": "3", "ownerEntity": "Resident"}' \
    'http://localhost:3000/api/Coins'
# 创建coins12
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"$class": "org.decentralized.energy.network.Coins",
          "coinsID": "CO_12", "value": 500,
          "ownerID": "12", "ownerEntity": "UtilityCompany"}' \
    'http://localhost:3000/api/Coins'

# 创建cash1
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"$class": "org.decentralized.energy.network.Cash",
          "cashID": "CA_1", "value": 5, "currency": "USD",
          "ownerID": "1", "ownerEntity": "Resident"}' \
    'http://localhost:3000/api/Cash'
# 创建cash2
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"$class": "org.decentralized.energy.network.Cash",
          "cashID": "CA_2", "value": 5, "currency": "USD",
          "ownerID": "2", "ownerEntity": "Resident"}' \
    'http://localhost:3000/api/Cash'
# 创建cash3
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{"$class": "org.decentralized.energy.network.Cash",
          "cashID": "CA_3", "value": 5, "currency": "USD",
          "ownerID": "3", "ownerEntity": "Resident"}' \
    'http://localhost:3000/api/Cash'


# 创建用户1
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{
          "$class": "org.decentralized.energy.network.Resident",
          "residentID": "1",
          "firstName": "q",
          "lastName": "q",
          "coins": "resource:org.decentralized.energy.network.Coins#CO_1",
          "cash": "resource:org.decentralized.energy.network.Cash#CA_1"
        }' \
    'http://localhost:3000/api/Resident'

# 创建用户2
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{
          "$class": "org.decentralized.energy.network.Resident",
          "residentID": "2",
          "firstName": "qw",
          "lastName": "qw",
          "coins": "resource:org.decentralized.energy.network.Coins#CO_2",
          "cash": "resource:org.decentralized.energy.network.Cash#CA_2"
        }' \
    'http://localhost:3000/api/Resident'

# 创建用户3
curl -X POST --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    -d '{
          "$class": "org.decentralized.energy.network.Resident",
          "residentID": "3",
          "firstName": "qwr",
          "lastName": "qwr",
          "coins": "resource:org.decentralized.energy.network.Coins#CO_3",
          "cash": "resource:org.decentralized.energy.network.Cash#CA_3"
        }' \
    'http://localhost:3000/api/Resident'
# 创建Target 12
curl -X POST --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  -d '{
   "$class": "org.decentralized.energy.network.UtilityCompany",
   "utilityID": "12",
   "name": "test12",
   "targetIP": "210.73.64.1",
   "coins": "resource:org.decentralized.energy.network.Coins#CO_12"
 }' \
 'http://localhost:3000/api/UtilityCompany'

# curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"$class": "org.decentralized.energy.network.Energy", "energyID": "56230", "targetIP": "10", "value": "'"$(date +'%s')"'", "ownerID": "12", "ownerEntity": "Resident","description":"udp","flag":"0"}' 'http://localhost:3000/api/Energy'
# sleep 10
#curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/Energy'
