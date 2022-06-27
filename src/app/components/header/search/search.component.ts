import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Debounce } from 'lodash-decorators';
import { Subscription } from 'rxjs';
import { Game } from 'src/models';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() games!: Game[];

  public inputVal: String;
  public gamesList: Game[] | [];
  private routeSub: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.inputVal = '';
    this.routeSub = Subscription.EMPTY;
    this.gamesList = [];
  }
  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['search-input']) {
        this.inputVal = params['search-input'];
      }
      this.renderDataList();
    });
  }
  renderDataList() {
    this.inputVal.length < 2
      ? (this.gamesList = [])
      : (this.gamesList = this.games);
  }

  @Debounce(650)
  onChangeInput() {
    this.renderDataList();
    if (this.inputVal.length > 2) {
      this.router.navigate(['search', this.inputVal]);
    }
  }
}
