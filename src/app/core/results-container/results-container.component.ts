import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { isNullOrUndefined } from "util";

@Component({
	selector: "app-results-container",
	template: `
  <div>
		<app-result-view *ngFor="let result of filteredData" 
			[result]="result"></app-result-view>
  </div>
  `,
	styleUrls: ["./results-container.component.css"]
})
export class ResultsContainerComponent implements OnChanges {
	@Input() results: any[];
	@Input() clickedWord: any;
	public filteredData: any[];

	constructor() {}

	ngOnChanges(changes: SimpleChanges) {
		if (isNullOrUndefined(this.results)) return;
		this.filteredData = this.results
			.map(item => this.fixData(item, this.clickedWord))
			.sort(this.sortByRank);
	}

	fixData(item, clickedWord) {
		const obj = {
			name: item.package.name,
			desc: item.package.description,
			link: item.package.links.npm,
			score: item.score,
			clicked: false
		};
		console.log(clickedWord);

		if (clickedWord && item.name === clickedWord.text) {
			obj.clicked = true;
		}
		return obj;
	}

	sortByRank(a, b) {
		return b.score.final - a.score.final;
	}

	// markedClickedWord(clickedWord) {
	// 	console.log("x", clickedWord);
	// 	const itemIndex = this.filteredData.findIndex(
	// 		item => item.name === clickedWord.text
	// 	);

	// 	let clickedItem = this.filteredData[itemIndex];
	// 	clickedItem = { ...clickedItem, clicked: true };

	// 	this.filteredData = this.filteredData.slice(itemIndex, 1);
	// 	this.filteredData.push(clickedItem);
	// 	console.log("a", clickedItem);
	// }

	// clickedWordWasChanged(changes: SimpleChanges) {
	// 	return (
	// 		changes.clickedWord &&
	// 		changes.clickedWord.currentValue !== changes.clickedWord.previousValue
	// 	);
	// }
}
