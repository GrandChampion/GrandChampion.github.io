import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
  tiles: Tile[] = [

    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
  ];
}
