import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  //esto es sin @ViewChild
  //buscarEtiqueta(nuevaEtiqueta : string): void{
  //  console.log(nuevaEtiqueta);
  //}




 @ViewChild('textInputEtiqueta') //Selecciona un elemento HTML identificado por la refencia local #textInputEtiqueta en la plantilla HTML
 //Almacena la referencia al elemento HTML seleccionado
  public inputEtiqueta! : ElementRef<HTMLInputElement>;//Porporciona acceso al DOM para interactuar directamente con el elemento seleccionado
  // (!) indica que Angular peude asumir que el valor sera definido en tiempo de ejecucion(evita errores de inicializacion)

  //Constructor de la componente, el servicio de GIFs se inyecta aqui, private hace que sea solo accesible dentro de este componente.
  constructor(private gifsService: GifsService) {

  }

  //Se accede al valor del campo Input mediante this.inputEtiqueta... nativeElement permite interactuar directamente con el elemento en el DOM.
  //El valor del input (nuevaEtiqueta) se envia al metodo de buscarEtiqueta del servicio gifsService
  buscarEtiqueta(){
    const nuevaEtiqueta= this.inputEtiqueta.nativeElement.value;
    this.gifsService.buscarEtiqueta(nuevaEtiqueta);
    this.inputEtiqueta.nativeElement.value=""; //limpia el campo input
  }



}
