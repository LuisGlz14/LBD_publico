import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Carta {
  titulo: string;
  descripcion: string;
  link: string;
  imagen: string;
}

const INFORMACION: Carta[] = [
  {
    titulo: 'Consumo de luz por colonia',
    descripcion: 'Conoce cuánta energía eléctrica consume cada colonia',
    link: 'consumo',
    imagen: 'assets/img/consumo.jpg'
  },
  {
    titulo: 'Información de cada colonia',
    descripcion: 'Conoce información de la colonia a partir de su código postal',
    link: 'info',
    imagen: 'assets/img/colonia.png'
  },
  {
    titulo: 'Promedio de dispositivos renovables por colonia',
    descripcion: 'Infórmate de cuáles son las colonias más renovables',
    link: 'renovable',
    imagen: 'assets/img/renovable.jpg'
  },
  {
    titulo: 'Información acerca de plantas eléctricas',
    descripcion: 'Descubre información acerca de las plantas eléctricas de México',
    link: 'plantas',
    imagen: 'assets/img/planta electrica.jpg'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info = INFORMACION;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(link: string){
    console.log(link);
    const liga = '/' + link;
    this.router.navigate([liga]);
  }

}
