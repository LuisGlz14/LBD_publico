import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-colonia',
  templateUrl: './info-colonia.component.html',
  styleUrls: ['./info-colonia.component.css']
})
export class InfoColoniaComponent implements OnInit {

  info = [];
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  buscar(cp: string){
    const cod = parseInt(cp, 10);
    console.log('Código: ' + cod);
    // const indice = this.info.find(indice -> indice.cp == cod);
  }

}
