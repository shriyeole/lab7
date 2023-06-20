import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'assets/file/data.json'; // Replace with the path to your JSON file

  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}
