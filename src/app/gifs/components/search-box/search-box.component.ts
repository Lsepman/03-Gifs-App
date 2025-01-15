import { Component, ElementRef, ViewChild } from '@angular/core';

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
  //Indicamos que siempre habra un balor con ! para evitar que marque error

  buscarEtiqueta(){
    const nuevaEtiqueta= this.inputEtiqueta.nativeElement.value;
    console.log({nuevaEtiqueta});
  }

}
