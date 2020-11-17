import { Component, OnInit } from '@angular/core';

interface Pregunta {
  id: string;
  pregunta: string;
  respuesta: string;
}
const INFORMACION: Pregunta[] = [
  {
    id: 'pregunta1',
    pregunta: '¿A qué información podemos acceder con esta página?',
    respuesta: 'A información que se encuentra en nuestra base de datos, que no afecte a la privacidad de nuestros clientes'
  },
  {
    id: 'pregunta2',
    pregunta: '¿Cómo busco un código postal?',
    respuesta: 'En la sección de ver información por colonia, aparece una lupa en la cuál puedes ingresar el código postal para buscar una colonia en específico'
  },
  {
    id: 'pregunta3',
    pregunta: '¿Vamos a sacar 10 en el proyecto?',
    respuesta: 'Ándele profe, nos quedó bien chida la página'
  }
];

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  info = INFORMACION;

  constructor() { }

  ngOnInit(): void {
  }

}
