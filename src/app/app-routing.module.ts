import { DispositivosRenovablesComponent } from './Components/dispositivos-renovables/dispositivos-renovables.component';
import { InfoColoniaComponent } from './Components/info-colonia/info-colonia.component';
import { ConsultaColoniaComponent } from './Components/consulta-colonia/consulta-colonia.component';
import { FaqComponent } from './Components/faq/faq.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'consumo', component: ConsultaColoniaComponent },
  { path: 'info', component: InfoColoniaComponent },
  { path: 'renovable', component: DispositivosRenovablesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
