import { Component } from "@angular/core";
import { ApiService } from "./shared/api.service";
import { Observable } from "rxjs/Observable";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	public results$: Observable<any>;
	public clickedWord;

	constructor(private api: ApiService) {}

	fetchNpms(e) {
		this.results$ = this.api.getNpm(e);
	}

	markClickedWord(e) {
		this.clickedWord = e;
	}
}
