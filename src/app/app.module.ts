import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediHerbalComponent } from './Herbal/medi-herbal/medi-herbal.component';
import { SmileStoreComponent } from './Modern/smile-store/smile-store.component';
import { REximComponent } from './import-Export/r-exim/r-exim.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClubComponent } from './modern/club/club.component';

@NgModule({
  declarations: [
    AppComponent,
    MediHerbalComponent,
    SmileStoreComponent,
    REximComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
