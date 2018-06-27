import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit, OnDestroy, OnChanges {
//propiedades del we coponent
  @Input() imagen:string;
  @Input() texto:string;





  @Input() contador;
  //evento we del componente
  @Output()cambiarElContador=new EventEmitter();


  constructor() {
    // Configuracion de servicios (providers) u otras configuraciones
    console.log('Constructor');
  }

  aumentarContador() {
    this.contador = this.contador + 1
  }

  ngOnInit() {
    // Empezar la logica de la pantalla
    console.log('On Init');

    console.log('Contador: ', this.contador);
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }
º //solo se realiza cambios del papa al hijo
  ngOnChanges(cambios) {
    console.log('On Changes', cambios);
  }


}
