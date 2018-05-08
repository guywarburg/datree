import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-score-badge",
	template: `<span [ngClass]="score > 0.5 ? 'up' : 'down'">{{normalize(score)}}</span>`,
	styleUrls: ["./score-badge.component.css"]
})
export class ScoreBadgeComponent implements OnInit {
	@Input() score: number;
	constructor() {}

	ngOnInit() {}

	normalize(score: number): number {
		return Math.floor(score * 100);
	}
}
