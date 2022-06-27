import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Game } from 'src/models';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss'],
})
export class ItemFilterComponent implements OnInit {
  @Input() sort!: string;
  @Input() games!: Game[];

  @Output() searchGames: EventEmitter<any> = new EventEmitter<any>();

  public sortBy: String;
  constructor() {
    this.sortBy = '';
  }
  ngOnInit(): void {
    this.sortBy = this.sort;
  }
  onChangeSortParams() {
    this.searchGames.emit(this.sortBy);
  }
}
