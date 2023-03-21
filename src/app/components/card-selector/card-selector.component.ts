import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.css']
})
export class CardSelectorComponent implements OnInit {
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
