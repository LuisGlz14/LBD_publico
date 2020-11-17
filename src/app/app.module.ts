import { FooterComponent } from './Components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { FaqComponent } from './Components/faq/faq.component';
import { ConsultaColoniaComponent } from './Components/consulta-colonia/consulta-colonia.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { InfoColoniaComponent } from './Components/info-colonia/info-colonia.component';
import { DispositivosRenovablesComponent } from './Components/dispositivos-renovables/dispositivos-renovables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    FaqComponent,
    ConsultaColoniaComponent,
    SpinnerComponent,
    InfoColoniaComponent,
    DispositivosRenovablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
