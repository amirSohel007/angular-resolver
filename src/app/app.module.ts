import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RecordsComponent } from './components/records/records.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordsResolver } from './resolver/records.resolver';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecordsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
