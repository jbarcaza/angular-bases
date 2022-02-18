import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  public heroeBorrado : string = '';

  heroes : string[] = [
    'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America',
  ];

  public borrarHeroe():void{

    //console.log ('Borrar elemento !!!');
    //delete this.heroes[this.heroes.length - 1];
    this.heroeBorrado = this.heroes.shift()||'';


  }
}
