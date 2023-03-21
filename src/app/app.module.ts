import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { CardSelectorComponent } from "./components/card-selector/card-selector.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardSelector2Component } from './components/card-selector2/card-selector2.component';
import { MapboxlineComponent } from './components/mapboxline/mapboxline.component';

@NgModule({
    declarations: [
        AppComponent,
        MapboxComponent,
        HomeComponent,
        CardSelectorComponent,
        NavbarComponent,
        CardSelector2Component,
        MapboxlineComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'mapbox', component: MapboxComponent },
            { path: 'mapbox2', component: MapboxlineComponent },
            { path: '**', redirectTo: '/', pathMatch: 'full' }
        ]),
        
    ]
})
export class AppModule { }
