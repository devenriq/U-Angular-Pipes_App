import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string= 'Enrique Palomino'
  valor: number = 103499
  obj={
    'hola': 'holax2'
  }

  mostrarNombre(){
    console.log(this.nombre)
  }
}
