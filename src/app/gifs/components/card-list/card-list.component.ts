import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  //Permite que listadoGifs reciba datos desde un componente padre. Este establece una comunicacion entre el componente padre e hijo, permitiendo que el padre pase un array de objetos al componente hijo.
  @Input()
  public listadoGifs: Gif[]=[];
}
