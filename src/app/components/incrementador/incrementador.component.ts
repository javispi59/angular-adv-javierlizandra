import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input('valor') progreso: number = 40; 
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
 
  cambiarValor( valor: number ){

    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso );

  }


}