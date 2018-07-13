import { DomSanitizer } from '@angular/platform-browser';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable, Subject, from, of} from 'rxjs';
import { Component,ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-right-data',
  templateUrl: './right-data.component.html',
  styleUrls: ['./right-data.component.css'],
  providers: [AngularFireDatabase]
})

export class RightDataComponent implements OnInit {
  catContainer : Observable<any[]>;
  satContainer : Observable<any[]>;
  activeQView:null;
  userLat:Number;
  userLng:Number;
  userAccuracy:Number;

  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  geo_options = {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    };
   
   
    calcContent(){
      var EuropeanCat=[],pizzaCat=[],DessertCat=[],CaribbeanCat=[],ContinentalCat=[];
      var italianCat=[],AsianCat=[],BurgerCat=[],IndianCat=[],MexicanCat=[];
      var tempCatContainer=[];
      this.satContainer.subscribe((keys)=>{
            var lev1=keys;    
            for(var j in lev1){
                  var lev2=lev1[j];
                  var dist=this.distanceCalc(this.userLat,this.userLng,lev2.latitude,lev2.longitude);
                  if(dist<450){
                  var restro=JSON.parse(JSON.stringify(lev2));    //creating deep copy to avoid asynchronous deletion of properties before assignment
                  var restroKeys=Object.keys(restro);
                  for(var k in lev2){
                        var lev3 = lev2[k];
                        for(var l in lev3){
                              var lev4 = lev3[l];
                              if(lev4['category']=='pizza'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    
                                    pizzaCat.push(lev4);
                              }
                              else if(lev4['category']=='dessert'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    DessertCat.push(lev4);
                              }
                              else if(lev4['category']=='continental'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    ContinentalCat.push(lev4);
                              }
                              else if(lev4['category']=='caribbean'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    CaribbeanCat.push(lev4);
                              }
                              else if(lev4['category']=='italian'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    italianCat.push(lev4);
                              }
                              else if(lev4['category']=='asian'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    AsianCat.push(lev4);
                              }
                              else if(lev4['category']=='european'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    EuropeanCat.push(lev4);
                              }
                              else if(lev4['category']=='burger'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    BurgerCat.push(lev4);
                              }
                              else if(lev4['category']=='indian'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    IndianCat.push(lev4);
                              }
                              else if(lev4['category']=='mexican'){
                                    lev4['restrokeys'] = restroKeys;
                                    lev4['restro_id'] = lev2.restaurant_id;
                                    lev4['restro_name'] = lev2.restaurant_name;
                                    lev4['latitude'] = lev2.longitude;
                                    lev4['longitude'] = lev2.longitude;
                                    delete restro['longitude'];
                                    delete restro['restaurant_id'];
                                    delete restro['restaurant_name'];
                                    delete restro['latitude'];
                                    lev4['restroDetails'] = restro;
                                    var vid_url ="https://www.youtube.com/embed/"+lev4['video_url']+"?rel=0";
                                    lev4['video_url'] = this._sanitizer.bypassSecurityTrustResourceUrl(vid_url);
                                    MexicanCat.push(lev4);
                              }
                        }
                  }
                  }else{
                        console.log("Distance is larger.... Service unavailable");
                  }                  
            }

            if(pizzaCat.length>0)            
            {
                  tempCatContainer.push(pizzaCat);
            }
            
            if(DessertCat.length>0)            
            {
                  tempCatContainer.push(DessertCat);
            }

            if(ContinentalCat.length>0)            
            {
                  tempCatContainer.push(ContinentalCat);
            }
            
            if(CaribbeanCat.length>0)            
            {
                  tempCatContainer.push(CaribbeanCat);            
            }           
            
            if(italianCat.length>0)            
            {
                  tempCatContainer.push(italianCat);
            }
            
            if(AsianCat.length>0)            
            {
                  tempCatContainer.push(AsianCat);
            }
            
            if(EuropeanCat.length>0)            
            {
                  tempCatContainer.push(EuropeanCat);
            }
            
            if(BurgerCat.length>0)            
            {
                  tempCatContainer.push(BurgerCat);
            }
            
            if(IndianCat.length>0)            
            {
                  tempCatContainer.push(IndianCat);
            }
            
            if(MexicanCat.length>0)            
            {
                  tempCatContainer.push(MexicanCat);
            }

            this.catContainer=of(tempCatContainer);
          });

      }


  constructor(db: AngularFireDatabase,private _sanitizer: DomSanitizer,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {      

    this.satContainer = db.list('menu').valueChanges();

    navigator.geolocation.getCurrentPosition((position)=>{
      this.userLat=position.coords.latitude;
      this.userLng=position.coords.longitude;
      this.userAccuracy=position.coords.accuracy;
      this.calcContent();
    }, this.showError,this.geo_options);
  }


      showQuickView(quickViewItem){            
            this.activeQView=quickViewItem;
      }

      hideQuickView(quickViewItem){
            this.activeQView=null;
      }
      
      distanceCalc(lat1, lon1, lat2, lon2) {
            var p = 0.017453292519943295;    // Math.PI / 180
            var c = Math.cos;
            var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                    c(lat1 * p) * c(lat2 * p) * 
                    (1 - c((lon2 - lon1) * p))/2;
          
            return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
      }
      
      getLocation() {
            if (navigator.geolocation) {

            } else {
                console.log("Geolocation is not supported by the browser");
            }
        }
        
        showPosition(position) {
            // console.log(position.coords.latitude);
            // console.log(position.coords.longitude);
            // console.log(position.coords.accuracy);
        }
        
        showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    console.log("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.log("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.");
                    break;
            }
        }
       
      getLocationManually(){
            //create search FormControl
            this.searchControl = new FormControl();
    
            //load Places Autocomplete
            this.mapsAPILoader.load().then(() => {
              let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
              });
              autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                  //get the place result
                  let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        
                  //verify result
                  if (place.geometry === undefined || place.geometry === null) {
                    return;
                  }
        
                  //set latitude, longitude and zoom
                  this.userLat = place.geometry.location.lat();
                  this.userLng = place.geometry.location.lng();
                  this.zoom = 12;
                  console.log(this.userLat);
                  console.log(this.userLng);       
                  this.calcContent();   
                });
              });
            });
      }
  ngOnInit() {
      this.getLocationManually();
  }

}
