import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/services/records.service';
import { RecordsResolver } from 'src/app/resolver/records.resolver';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {

  userdata : any

  constructor(private record : RecordsService,  private route: ActivatedRoute) { 
    this.userdata = this.route.snapshot.data['records']
  }

  ngOnInit(): void {

  }

}
