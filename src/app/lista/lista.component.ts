import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { GameItem } from '../../GameItem';
import { GameListService } from '../GameList.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {

  @Input()
  games: GameItem[];

  constructor(private GameService: GameListService) { 
    this.games = this.GameService.getGamesList();
    console.log(this.games[0]);
    
  }

  ngOnInit() {
    this.games.push(new GameItem())
  }
  showData(item:GameItem){
    // chiamo il next nel subject;
    //this.comunicatorService.changeSubject(item);
    alert(item.nome);
  }

}
