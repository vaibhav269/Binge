import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';
import { RightDataComponent } from './right-data/right-data.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { RouterModule} from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageTwoTopComponent } from './page-two-top/page-two-top.component';
import { PageTwoSideNavComponent } from './page-two-side-nav/page-two-side-nav.component';
import { PageTwoRightDataComponent } from './page-two-right-data/page-two-right-data.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    RightDataComponent,
    LocationSearchComponent,
    PageOneComponent,
    PageTwoComponent,
    PageTwoTopComponent,
    PageTwoSideNavComponent,
    PageTwoRightDataComponent,    
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD0dnr8xuGHgv4fqEdLhLw4sDb97UP1a58",
      libraries: ["places"]
    }),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseCred),
    AngularFireDatabaseModule,
    ReactiveFormsModule,  // for database
    RouterModule.forRoot([
      {
         path: 'page-two/:restroId',
         component: PageTwoComponent
      },{
        path: '',
        component: PageOneComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
