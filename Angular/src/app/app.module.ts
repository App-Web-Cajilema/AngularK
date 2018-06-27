import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeleccionComponent } from './netflix/seleccion/seleccion.component';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
