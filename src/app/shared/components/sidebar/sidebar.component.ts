import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  //Se realiza una inyeccion de dependencias, permite acceder a las propiedades y metodos del servicio
  constructor(private gifsService: GifsService){

  }
  //Metodo que toma un indice como argumento y accede al historial de etiquetas y mediante el indice las recupera, llamando al metodo buscaretiqueta del servicio
  recuperarEtiqueta(indice: number){
    this.gifsService.buscarEtiqueta(this.historial[indice])
  }

//Proporciona acceso al historial de busquedas almacenado en el servicio y devuelve una copia del array asegurando que el componente no modifique accidentalmente el historial original.Utiliza el serbicio para obtener el historial de etiquetas que se han buscado previamente
 get historial(){
  return this.gifsService.historialEtiquetas;
 }

}
