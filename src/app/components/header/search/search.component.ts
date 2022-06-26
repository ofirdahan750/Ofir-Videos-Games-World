import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Debounce, Memoize } from 'lodash-decorators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  @Debounce(750)
  onChangeInput(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
}
