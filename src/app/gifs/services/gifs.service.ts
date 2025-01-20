import { HttpClient, HttpParams } from '@angular/common/http';
import  {Injectable} from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


//Registra el servicio a nivel global para que este disponible en toda la aplicacion
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public listadoGifs: Gif[]= [];

  //Array para mantener un historia de las etiquetas de busqueda realizadas. _ quiere decir que es privado
  private _historialEtiqueta: string[] = [];

  //Clave de acceso a la API de Giphy
  private apiKey: string= '0wlU1oJQfUnBbaubHYRTtJW8LJ776C6V';
  private serviceUrl: string= 'https://api.giphy.com/v1/gifs';//URL base de la API de Giphy





  //Constructor del servicio, se inyecta HttpClient en el construtor habilitando el uso del cliente HTTP en este servicio
  constructor(private http: HttpClient){

  }

  //Proporciona acceso a una copia del historial de etiquetas. (...) Devuelve una copia del array para evitar que se modifique el original accidentalmente desde fuera del servicio.
  get historialEtiquetas(){
    return [...this._historialEtiqueta];
  }


  //Metodo para añadir las nuevas etiquetas al array en la primera posicion.
  ordenarHistorial(etiqueta: string) : void{
      etiqueta = etiqueta.toLowerCase().trim();//Normaliza la etiqueta (minusculas y sin espacios)
      if(etiqueta == ""){
        window.alert("No puedes introducir vacio");
        return; //Si esta vacio, muesta una alerta y sale del metodo
      }
      //Si la etiqueta ya existe la elimina y agrega al principio
      if(this._historialEtiqueta.includes(etiqueta)){
            this._historialEtiqueta = this._historialEtiqueta.filter((etiquetas) => etiquetas != etiqueta);
            this._historialEtiqueta.unshift(etiqueta);
            return;
      }
      //Si el historial tiene mas de 10 elementos, elimina el ultimo.
      if(this._historialEtiqueta.length == 10){
          this._historialEtiqueta.pop();
      }
      //Agrega la nueva etiqueta al principio del historial
      this._historialEtiqueta.unshift(etiqueta);

  }


  buscarEtiqueta(etiqueta: string): void{
    this.ordenarHistorial(etiqueta);//Llamada al metodo ordenarHistoria para actualizar el historial
    // Sirve para definir los parametros de la peticion
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit',10) //numero maximo de resultados
    .set('q', etiqueta);

    //Esto es un observable, que consiste en un objeto que emite diferentes valores a lo largo del tiempo. Esto quiere decir que esta escuchando las emisiones que el objeto esta emitiendo.
    //Envia una solicitud GET a la API de Giphy usando los parametros y la URL base. suscribe escucha la respuesta de la API de forma asincrona. 
    this.http.get<SearchResponse>(`${ this.serviceUrl}/search`, {params}).subscribe( resp =>{
      this.listadoGifs = resp.data;
      console.log({gifs : this.listadoGifs});

    })

  }
}

