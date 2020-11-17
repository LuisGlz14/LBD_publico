import { Component, OnInit } from '@angular/core';

interface Carta {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const INFORMACION: Carta[] = [
  {
    titulo: 'Luis Eduardo González Villalpando',
    descripcion: 'Aun no se que hizo cada quien, pero pues despues lo ponemos',
    imagen: 'assets/img/luigi.jpeg'
  },
  {
    titulo: 'Daniela Yael Rodríguez Reyes',
    descripcion: 'Aun no se que hizo cada quien, pero pues despues lo ponemos',
    imagen: 'assets/img/lala.jpeg'
  },
  {
    titulo: 'Omar Arturo Ruiz Bernal',
    descripcion: 'Aun no se que hizo cada quien, pero pues despues lo ponemos',
    imagen: 'assets/img/omar.jpg'
  }
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = INFORMACION;

  constructor() { }

  ngOnInit(): void {
  }

}
