import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class ApiService {
	private url: string;

	constructor(private http: HttpClient) {
		this.url = "https://api.npms.io/v2/search/suggestions";
	}

	getNpm(query: string) {
		const params = new HttpParams().set("q", query);
		return this.http.get(`${this.url}`, { params: params });
	}
}
