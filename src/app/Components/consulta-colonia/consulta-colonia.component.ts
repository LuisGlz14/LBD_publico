import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-colonia',
  templateUrl: './consulta-colonia.component.html',
  styleUrls: ['./consulta-colonia.component.css']
})
export class ConsultaColoniaComponent implements OnInit {

  info = [];
  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

}
