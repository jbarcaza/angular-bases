import { Component } from "@angular/core";


@Component({
    selector: 'app-contador', 
    template: `<h2>{{titulo}}</h2>
    <h3>La base es {{base}}</h3>
    <!--
    <button (click)="numero = numero +1;">+1</button>
    <button (click)="sumar()">+1</button>
    -->
    <button (click)="acumular(base)">+{{base}}</button>
    <span>{{numero}}</span>
    <!--
    <button (click)="numero = numero -1;">-1</button>
    
    <button (click)="restar()">-1</button>
    -->
    <button (click)="acumular(-base)">-{{base}}</button>`
})
export class ContadorComponent{

    public titulo : string  = 'Contador App';
    public numero : number  = 10;
    public base   : number  = 5;
  
    sumar(){
  
      this.numero += 1;
  
    }
  
    restar(){
  
      this.numero -= 1;
    }
  
    acumular(valor : number){
  
      this.numero += valor;
    }    

}