import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit{
  items:MenuItem[]=[]

  constructor(){}

  ngOnInit():void{
    this.items =
    [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label: 'Prueba',
        items: [{
          label:'primer item de la prueba',
          icon: 'pi pi-moon',
          items:[
            {
              label: 'subprojecto 1',
              icon: 'pi pi-fw pi-pencil',
              // iconPos: 'Right'
            },
            {
              label: 'subprojecto 2',
              icon: 'pi pi-fw pi-pencil',
              // iconPos: 'Right'
            }

          ]
        }]
      }
  ];
  }
}
