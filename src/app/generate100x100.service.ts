import {Injectable} from '@angular/core';

@Injectable()
export class Generate100x100Service {
	public data: any[];

	constructor() {
		this.data = [];
	}

	public generateJson() {
		for (let i = 1; i <= 100; i++) {
			let row = {};
			for (let j = 1; j <= 100; j++) {
				row["p" + j] = i * j;
			}
			this.data.push(row);
		}
		console.log(this.data);
	};

}
