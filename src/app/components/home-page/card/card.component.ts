import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() game!: Game;
  currGame: Game;
  constructor(private router: Router) {
    this.currGame = {} as Game;
  }
  handleClickGameCard(gameId: string): void {
    this.router.navigate(['details', gameId]);
  }
  ngOnInit(): void {
    this.currGame = this.game;
  }
}
