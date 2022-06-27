import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Debounce } from 'lodash-decorators';
import { Observable, Subscription, debounceTime } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Game } from 'src/models';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() games!: Game[];
  public inputVal: String;
  public routeSub: Subscription;
  public myControl = new FormControl('');
  gameOptions: Game[];
  filteredOptions!: Observable<any>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.inputVal = '';
    this.routeSub = Subscription.EMPTY;
    this.gameOptions = [];
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['search-input']) {
        this.inputVal = params['search-input'];
      }
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    setTimeout(() => {}, 1);
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();

    return this.games.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  @Debounce(250)
  onChangeInput(option?: string): void {
    if (!this.inputVal) return;
    this.router.navigate(['search', option || this.inputVal]);
  }
}
