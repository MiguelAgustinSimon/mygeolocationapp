import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
  mapa:Mapboxgl.Map;
  latitudInicial=-34.6037321;
  longitudInicial=-58.3816405;


  constructor() { }

  
  ngOnInit() { 
      this.mapa = new Mapboxgl.Map({
        accessToken: environment.mapboxKey,
        container: 'mapa', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/light-v11', // style URL
        center: [this.longitudInicial,this.latitudInicial], // starting position [lng, lat]
        zoom: 16 // starting zoom
        });
        this.crearMarcador(this.longitudInicial,this.latitudInicial);
    }
  
    crearMarcador= async(lng:number,lat:number)=>{
      const marker1 = new Mapboxgl.Marker()
      .setLngLat([lng,lat])
      .addTo(this.mapa);
    }
 

}
