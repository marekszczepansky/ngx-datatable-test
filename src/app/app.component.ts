import {Component} from '@angular/core';
import {Generate100x100Service} from './generate100x100.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';

	constructor(public generate100x100Service: Generate100x100Service) {

	}

	columns = [
		{name: 'name'},
		{name: 'gender'},
		{name: 'age'}
	];

	rows = [
		{
			"id": 0,
			"name": "Ramsey Cummings",
			"gender": "male",
			"age": 52,
			"address": {
				"state": "South Carolina",
				"city": "Glendale"
			}
		},
		{
			"id": 1,
			"name": "Stefanie Huff",
			"gender": "female",
			"age": 70,
			"address": {
				"state": "Arizona",
				"city": "Beaverdale"
			}
		},
		{
			"id": 2,
			"name": "Mabel David",
			"gender": "female",
			"age": 52,
			"address": {
				"state": "New Mexico",
				"city": "Grazierville"
			}
		},
		{
			"id": 3,
			"name": "Frank Bradford",
			"gender": "male",
			"age": 61,
			"address": {
				"state": "Wisconsin",
				"city": "Saranap"
			}
		}];

	public generate() {
		this.columns = [];
		for (let i = 1; i <= 100; i++) {
			this.columns.push({
				name: "p" + i
			});
		}
		this.generate100x100Service.generateJson();
		this.rows = this.generate100x100Service.data;
	}
}
