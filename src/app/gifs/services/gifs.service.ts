import { HttpClient, HttpParams } from '@angular/common/http';
import  {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  //gestiona el historial de gifs
  private _historialEtiqueta: string[] = [];

  //Aqui creamos una propiedad con la url de la api y el key
  private apiKey: string= '0wlU1oJQfUnBbaubHYRTtJW8LJ776C6V';
  private serviceUrl: string= 'https://api.giphy.com/v1/gifs';

  //Aqui se inyecta el servicio HttpClient dentro del servicio
  constructor(private http: HttpClient){

  }

  //Y creamos un get para acceder al dato. Lo creamos como privado para evitar que se modifique el array accidentalmente. De hecho, utilizamos el spread (...) para evitar que se cree una referencia al dato al realizar el return.
  get historialEtiquetas(){
    return [...this._historialEtiqueta];
  }


  //Metodo para añadir las nuevas etiquetas al array en la primera posicion.
  ordenarHistorial(etiqueta: string) : void{
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


  buscarEtiqueta(etiqueta: string): void{
    this.ordenarHistorial(etiqueta);
    // Sirve para pasar los parametros de busqueda 
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit',10)
    .set('q', etiqueta);

    //Esto es un observable, que consiste en un objeto que emite diferentes valores a lo largo del tiempo. Esto quiere decir que esta escuchando las emisiones que el objeto esta emitiendo.
    this.http.get(`${ this.serviceUrl}/search`, {params}).subscribe( resp =>{console.log(resp);

    })

  }
}

