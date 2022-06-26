import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss'],
})
export class ItemFilterComponent implements OnInit {
  @Input() sort!: String;
  @Output() searchGames: EventEmitter<any> = new EventEmitter<any>();

  sortBy: String;
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
