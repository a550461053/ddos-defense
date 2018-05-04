import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.decentralized.energy.network{
   export class Resident extends Participant {
      residentID: string;
      firstName: string;
      lastName: string;
      coins: Coins;
      cash: Cash;
      ddos: DDoS;
   }
   export class Bank extends Participant {
      bankID: string;
      name: string;
      coins: Coins;
      cash: Cash;
   }
   export class TargetCompany extends Participant {
      utilityID: string;
      name: string;
		 	targetIP: string;
      coins: Coins;
   }
   export enum OwnerEntity {
      Resident,
      Bank,
      TargetCompany,
   }
   export class Coins extends Asset {
      coinsID: string;
      value: number;
      ownerID: string;
      ownerEntity: OwnerEntity;
   }
   export class Energy extends Asset {
      energyID: string;
      targetIP: string;
      value: number;
      ownerID: string;
      ownerEntity: OwnerEntity;
      flag: string;
      description: string;
   }
   export class Cash extends Asset {
      cashID: string;
      currency: string;
      value: number;
      ownerID: string;
      ownerEntity: OwnerEntity;
   }
   export class DDoS extends Asset {
      ddosID: string;
      targetIP: string;
      time: string;
      count: string;
      k: string;
      ownerID: string;
      targetID: string;
      ownerEntity: OwnerEntity;
   }
   export class Log extends Asset {
      logID: string;
      targetIP: string;
      value: string;
      ownerID: string;
      targetID: string;
		 	lastEnergyCount: string;
      ownerEntity: OwnerEntity;
   }
   export class EnergyToCoins extends Transaction {
      energyRate: number;
      energyValue: number;
      coinsInc: Coins;
      coinsDec: Coins;
      energyInc: Energy;
      energyDec: Energy;
   }
   export class CashToCoins extends Transaction {
      cashRate: number;
      cashValue: number;
      coinsInc: Coins;
      coinsDec: Coins;
      cashInc: Cash;
      cashDec: Cash;
   }
   export class EnergyToDDoS extends Transaction {
      energyInc: Resident;
   }
   export class DistributeCoins extends Transaction {
      coinsInc: Coins;
      coinsDec: Coins;
		 	targetCompany: TargetCompany;
   }
// }
