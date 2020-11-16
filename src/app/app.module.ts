import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListpersonnesComponent } from './listpersonnes/listpersonnes.component';
import { PersonneComponent } from './personne/personne.component';
import { ListpersonsComponent } from './listpersons/listpersons.component';

@NgModule({
  declarations: [
    AppComponent,
    ListpersonnesComponent,
    PersonneComponent,
    ListpersonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
