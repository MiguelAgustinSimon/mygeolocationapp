import { Component, ViewChild, OnInit } from '@angular/core';
import { CardSelectorComponent } from 'src/app/components/card-selector/card-selector.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(CardSelectorComponent) child;
  mapa1:boolean=false;
  mapa2:boolean=false;
  constructor() { }

  ngOnInit(){
  }
  

  receiveMessage($event) {
    this.mapa1 = $event;
    this.mapa2 = false;
  }

  receiveMessage2($event) {
    this.mapa2 = $event;
    this.mapa1 = false;
  }

}
