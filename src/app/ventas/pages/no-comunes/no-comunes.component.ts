import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  // i18nSelect
  name: string='Enrique'
  genero: string= 'masculino'
  invitacionMap={
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural
  clientes:string[]=[
    'María',
        'Pedro',

  ]
  clientesMap={
    '=0':'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

}
