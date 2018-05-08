import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./core/search-bar/search-bar.component";
import { ResultsContainerComponent } from "./core/results-container/results-container.component";
import { ApiService } from "./shared/api.service";
import { HttpClientModule } from "@angular/common/http";
import { ResultViewComponent } from "./core/result-view/result-view.component";
import { ScoreBadgeComponent } from "./core/score-badge/score-badge.component";
import { TagCloudModule } from "angular-tag-cloud-module";
import { WordCloudComponent } from './core/word-cloud/word-cloud.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchBarComponent,
		ResultsContainerComponent,
		ResultViewComponent,
		ScoreBadgeComponent,
		WordCloudComponent
	],
	imports: [BrowserModule, HttpClientModule, TagCloudModule],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {}
