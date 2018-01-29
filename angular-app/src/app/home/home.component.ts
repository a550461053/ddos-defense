import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

// 1. Transactinos
import { HomeService } from './home.service';
import 'rxjs/add/operator/toPromise';

// 2. Energy
// import { Component, OnInit, Input } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EnergyService } from '../Energy/Energy.service';
// import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	// providers: [HomeService]
  providers: [EnergyService]
})
export class HomeComponent implements OnInit {

	// constructor(){};

	// 1. Transactions
	// private errorMessage;
	// private allTransactions;
	//
	// private systemTransactions = [];
	// private performedTransactions = [];

	// 2. Energy
	myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

	energyID = new FormControl("", Validators.required);
	units = new FormControl("", Validators.required);
	value = new FormControl("", Validators.required);
	ownerID = new FormControl("", Validators.required);
	ownerEntity = new FormControl("", Validators.required);

	// constructor(private serviceTransaction:HomeService, fb: FormBuilder,
	constructor(private serviceEnergy:EnergyService, fb: FormBuilder) {
							this.myForm = fb.group({
										energyID:this.energyID,
										units:this.units,
										value:this.value,
										ownerID:this.ownerID,
										ownerEntity:this.ownerEntity

							});

	};


	ngOnInit(): void {

		// this.loadAllTransactions();
		this.loadAllEnergy();
	}

	//sort the objects on key
	// sortByKey(array, key): Object[] {
	// 	return array.sort(function(a, b) {
	// 			var x = a[key]; var y = b[key];
	// 			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	// 	});
	// }

	//get all Residents
	// loadAllTransactions(): Promise<any> {
	//
	// 	let tempList = [];
	// 	let systemList = [];
	// 	let performedList = [];
	//
	// 	return this.serviceTransaction.getTransactions()
	// 	.toPromise()
	// 	.then((result) => {
	// 		result = this.sortByKey(result, 'transactionTimestamp');
	// 		this.errorMessage = null;
	// 		result.forEach(transaction => {
	// 			tempList.push(transaction);
	//
	// 			var importClass = transaction["$class"];
	// 			var importClassArray = importClass.split(".");
	//
	// 			if(importClassArray[1] == 'hyperledger'){
	// 				systemList.push(transaction);
	// 			}
	// 			else {
	// 				performedList.push(transaction);
	// 			}
	//
	// 		});
	//
	// 		this.systemTransactions = systemList;
	// 		this.performedTransactions = performedList;
	// 		this.allTransactions = tempList;
	// 		console.log(this.allTransactions)
	// 		console.log(this.performedTransactions)
	// 		console.log(this.systemTransactions)
	// 	})
	// 	.catch((error) => {
	// 			if(error == 'Server error'){
	// 					this.errorMessage = "Could not connect to REST server. Please check your configuration details";
	// 			}
	// 			else if(error == '404 - Not Found'){
	// 			this.errorMessage = "404 - Could not find API route. Please check your available APIs."
	// 			}
	// 			else{
	// 					this.errorMessage = error;
	// 			}
	// 	});
	// }


	loadAllEnergy(): Promise<any> {
		let tempList = [];
		return this.serviceEnergy.getAll()
		.toPromise()
		.then((result) => {
			this.errorMessage = null;
			result.forEach(asset => {
				tempList.push(asset);
			});
			this.allAssets = tempList;
		})
		.catch((error) => {
				if(error == 'Server error'){
						this.errorMessage = "Could not connect to REST server. Please check your configuration details";
				}
				else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
				}
				else{
						this.errorMessage = error;
				}
		});
	}
}
