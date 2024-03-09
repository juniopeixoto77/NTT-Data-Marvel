import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelApiService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { InfoPersonagemComponent } from './info-personagem/info-personagem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfoPersonagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [MarvelApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
