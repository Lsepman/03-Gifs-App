import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  //gestiona el historial de gifs
  private _historialEtiqueta: string[] = [];
  private apiKey: string= '0wlU1oJQfUnBbaubHYRTtJW8LJ776C6V';


  //Y creamos un get para acceder al dato. Lo creamos como privado para evitar que se modifique el array accidentalmente. De hecho, utilizamos el spread (...) para evitar que se cree una referencia al dato al realizar el return.
  get historialEtiquetas(){
    return [...this._historialEtiqueta];
  }

  constructor() { }


  //Metodo para añadir las nuevas etiquetas al array en la primera posicion.
  buscarEtiqueta(etiqueta: string) : void{
      etiqueta = etiqueta.toLowerCase().trim();
      if(etiqueta == ""){
        window.alert("No puedes introducir vacio");
        return;
      }
      if(this._historialEtiqueta.includes(etiqueta)){
            this._historialEtiqueta = this._historialEtiqueta.filter((etiquetas) => etiquetas != etiqueta);
            this._historialEtiqueta.unshift(etiqueta);
            return;
      }
      if(this._historialEtiqueta.length == 10){
          this._historialEtiqueta.pop();
      }
      this._historialEtiqueta.unshift(etiqueta);

  }
}

