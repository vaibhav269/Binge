import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { snapshotChanges } from 'angularfire2/database';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  restroId:String;
  parentMessage ;
  constructor(private route:ActivatedRoute) { 
    this.restroId=this.route.snapshot.paramMap.get('restroId');
    this.parentMessage= this.restroId
    console.log(this.parentMessage);
  }

  ngOnInit() {
  }

}
