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




 @ViewChild('textInputEtiqueta') //coge el valor de la equieta generada en el html #txtInputEtiqueta
  public inputEtiqueta! : ElementRef<HTMLInputElement>;
  //Indicamos que siempre habra un valor con ! para evitar que marque error

  constructor(private gifsService: GifsService) {

  }

  buscarEtiqueta(){
    const nuevaEtiqueta= this.inputEtiqueta.nativeElement.value;
    this.gifsService.buscarEtiqueta(nuevaEtiqueta);
    this.inputEtiqueta.nativeElement.value=""; //limpia el input
  }



}
