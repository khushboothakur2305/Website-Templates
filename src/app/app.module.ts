import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediHerbalComponent } from './Herbal/medi-herbal/medi-herbal.component';
import { SmileStoreComponent } from './Modern/smile-store/smile-store.component';
import { REximComponent } from './import-Export/r-exim/r-exim.component';

@NgModule({
  declarations: [
    AppComponent,
    MediHerbalComponent,
    SmileStoreComponent,
    REximComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
