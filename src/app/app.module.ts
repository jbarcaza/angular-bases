import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],  // este es el componente principal

})
export class AppModule { }
