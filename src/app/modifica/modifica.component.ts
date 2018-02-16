import { Component, OnInit, Input } from '@angular/core';
import { GameListService } from '../GameList.service';
import { GameItem } from '../../GameItem';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  nomeGioco: string;
  currentGame: GameItem;

  constructor(private gameListService: GameListService) { }

  ngOnInit() {
  }
  showGameDetails(){
    
      if(this.gameListService.foundGame(this.nomeGioco) == true){

        this.currentGame = this.gameListService.getGameByName(this.nomeGioco);
      }
      else{
        alert("Gioco non presente");
      }
      
  }
  saveData(){
    alert(this.currentGame.nome);
    this.gameListService.setGame(this.currentGame);
  }

}
