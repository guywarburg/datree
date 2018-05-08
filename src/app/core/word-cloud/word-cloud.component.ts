import {
	Component,
	Input,
	OnChanges,
	EventEmitter,
	Output
} from "@angular/core";
import { isNullOrUndefined } from "util";

@Component({
	selector: "app-word-cloud",
	template: `
  <angular-tag-cloud
		[data]="words"
		[width]="settings.width"
		[height]="settings.height"
		[overflow]="settings.overflow"
		(clicked)="markClicked($event)"></angular-tag-cloud>
  `,
	styleUrls: ["./word-cloud.component.css"]
})
export class WordCloudComponent implements OnChanges {
	@Input() results: any[];
	@Output() clickedWord: EventEmitter<any> = new EventEmitter();
	public words: { text: string; weight: number }[];
	public settings: any;

	constructor() {
		this.settings = {
			height: 400,
			width: 400,
			overflow: false
		};
	}

	ngOnChanges() {
		if (isNullOrUndefined(this.results)) return;
		this.words = this.results.map(this.prepData);
	}

	prepData(item) {
		return {
			text: item.package.name,
			weight: item.score.final
		};
	}

	markClicked(clicked) {
		this.clickedWord.emit(clicked);
	}
}
