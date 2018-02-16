import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ModificaComponent } from './modifica/modifica.component';
import { MenuService } from './Menu.service';
import { GameListService } from './GameList.service';
import { ComunicatorService } from '../comunicator.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListaComponent,
    DettaglioComponent,
    ModificaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MenuService, GameListService, ComunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
