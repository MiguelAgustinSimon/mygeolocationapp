import { Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-selector2',
  templateUrl: './card-selector2.component.html',
  styleUrls: ['./card-selector2.component.css']
})
export class CardSelector2Component implements OnInit {

  mapaSeleccionado:boolean=false;

  @Output() messageEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.mapaSeleccionado=true;
    this.messageEvent.emit(this.mapaSeleccionado);
  }

}
