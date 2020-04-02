import { Injectable } from '@angular/core';
import { RecordsService } from '../services/records.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()


export class RecordsResolver implements Resolve <Observable<any>> {
  constructor(private record: RecordsService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.record.getRecords();
  }
}