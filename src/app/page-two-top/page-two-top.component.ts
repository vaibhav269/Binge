import { DomSanitizer } from '@angular/platform-browser';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable, Subject, from, of} from 'rxjs';
import { Component,ElementRef, NgZone, OnInit, ViewChild,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-page-two-top',
  templateUrl: './page-two-top.component.html',
  styleUrls: ['./page-two-top.component.css'],
  providers: [AngularFireDatabase]
})

export class PageTwoTopComponent implements OnInit {
  @Input() restroId; 

  restroDetail:Observable<any[]>;
  restroVideo;

  constructor(private db: AngularFireDatabase,private _sanitizer: DomSanitizer) {     
  }

  ngOnInit() {
    console.log(this.restroId)
    this.restroDetail=this.db.list('table', ref => ref.orderByChild('hid').equalTo(this.restroId)).valueChanges();

    this.db.list('menu', ref => ref.orderByChild('restaurant_id').equalTo(this.restroId)).valueChanges().subscribe((keys)=>{
      this.restroVideo=keys[0]
      for (var prop in this.restroVideo) {
        this.restroVideo=this.restroVideo[prop][0].video_url;
        var vid_url ="https://www.youtube.com/embed/"+this.restroVideo+"?rel=0";
        this.restroVideo=this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);        
        console.log(this.restroVideo);           
        break;
      }
    });
  }

}
