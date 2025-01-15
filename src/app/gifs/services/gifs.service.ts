import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  //gestiona el historial de gifs
  private _historialEtiqueta: string[] = [];


  //Y creamos un get para acceder al dato. Lo creamos como privado para evitar que se modifique el array accidentalmente. De hecho, utilizamos el spread (...) para evitar que se cree una referencia al dato al realizar el return.
  get historialEtiquetas(){
    return [...this._historialEtiqueta];
  }

  constructor() { }


  //Metodo para añadir las nuevas etiquetas al array en la primera posicion.
  buscarEtiqueta(etiqueta: string) : void{
    this._historialEtiqueta.unshift(etiqueta);
    console.log(this.historialEtiquetas);
  }




}
