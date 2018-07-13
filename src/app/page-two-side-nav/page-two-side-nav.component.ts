import { DomSanitizer } from '@angular/platform-browser';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable, Subject, from, of} from 'rxjs';
import { Component,ElementRef, NgZone, OnInit, ViewChild,OnChanges,Input } from '@angular/core';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-page-two-side-nav',
  templateUrl: './page-two-side-nav.component.html',
  styleUrls: ['./page-two-side-nav.component.css'],
  providers: [AngularFireDatabase]
})

export class PageTwoSideNavComponent implements OnChanges {
  @Input() restroId;

  restroDetail:Observable<any[]>;
  restroKeys:Observable<String[]>;
  activeMenu : null;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnChanges() {
    this.restroDetail=this.db.list('menu', ref => ref.orderByChild('restaurant_id').equalTo(this.restroId)).valueChanges();
    this.restroDetail.subscribe((keys)=>{
      var lev1=keys[0];
      delete lev1['longitude'];
      delete lev1['restaurant_id'];
      delete lev1['restaurant_name'];
      delete lev1['latitude'];
      var rKeys=Object.keys(lev1);

      this.restroKeys=of(rKeys);
    });
  }

  setActive(menuItem){
    this.activeMenu = menuItem;
  }
  
  navEleClick(res){
    var ele = "[id='"+res+"2']";  //using this syntax to select to make sure that id's with spaces can be used
    var selectedDiv=$(ele);
    console.log(selectedDiv);
    $('body, html').animate({ scrollTop: selectedDiv.offset().top-250 }, 500);    
  }
}
