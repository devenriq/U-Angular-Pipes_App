import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  index:number = 0
  // i18nSelect
  clientsList={

    name:'Enrique',
    genero: 'masculino'
  }

  invitacionMap={
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural
  clientes:string[]=[
    'María',
    'Pedro',
    'Enrique',
    'Juan',
    'Ernesto',
    'Lucas'

  ]
  clientesMap={
    '=0':'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){

  }

  borrarCliente(){
    this.clientes.pop()
  }

  // KeyValue Pipe
  persona={
    nombre: 'Enrique',
    edad: 25,
    direccion: 'peru'
  }

  // jsonPipe
heroes=[
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Batman',
    vuela: false
  },
  {
    nombre: 'The Thing',
    vuela: false
  }
]

}
