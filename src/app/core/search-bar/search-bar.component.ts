import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-search-bar",
	template: `
    <input type="text" (keyup)="updateQuery($event)">
  `,
	styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent {
	@Output() query: EventEmitter<string> = new EventEmitter();

	updateQuery(e) {
		this.query.emit(e.target.value);
	}
}
