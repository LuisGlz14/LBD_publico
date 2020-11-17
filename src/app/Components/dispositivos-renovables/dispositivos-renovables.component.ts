import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivos-renovables',
  templateUrl: './dispositivos-renovables.component.html',
  styleUrls: ['./dispositivos-renovables.component.css']
})
export class DispositivosRenovablesComponent implements OnInit {

  info = [];
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
