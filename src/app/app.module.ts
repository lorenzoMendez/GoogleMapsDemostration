import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { MapEditionComponent } from './components/map/map-edition.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule( {
  entryComponents: [
    MapEditionComponent           // Como sera un componente de un modal
  ],

  declarations: [
    AppComponent,
    MapComponent,
    MapEditionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot( {
      apiKey: 'AIzaSyA-it_xrlYZOgnOT1si7y8cSIh5oqlCUdw'
    } ),
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
