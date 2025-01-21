import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {

  constructor(private gifsService : GifsService){}

  //Devuelve el valor de listadoGifs que proviene del servicio GifsService. Esto permite que el componente acceda a los datos de los Gifs sin modificar el array
  get gifs(): Gif[]{
    return this.gifsService.listadoGifs
  }
}
