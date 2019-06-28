import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NorthamericaComponent } from './northamerica/northamerica.component';
import { SouthamericaComponent } from './southamerica/southamerica.component';
import { EuropeComponent } from './europe/europe.component';
import { AfricaComponent } from './africa/africa.component';
import { ArcticaComponent } from './arctica/arctica.component';
import { AustralasiaComponent } from './australasia/australasia.component';
import { AsiaComponent } from './asia/asia.component';

@NgModule({
  declarations: [
    AppComponent,
    NorthamericaComponent,
  
    SouthamericaComponent,
  
    EuropeComponent,
  
    AfricaComponent,
  
    ArcticaComponent,
  
    AustralasiaComponent,
  
    AsiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
