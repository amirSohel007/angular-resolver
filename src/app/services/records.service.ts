import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { 

  }
  getRecords() {
    return this.http.get('http://www.json-generator.com/api/json/get/cgcjkMIkCW?indent=2')
  }
}
