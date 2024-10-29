import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { UsersComponent } from "./users/users.component";


// decorator
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, HeaderComponent, FooterComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'My App 0 - Dario';

  itemsSpesa: string[] = [
    "Pane",
    "Pasta",
    "Acqua",
    "Pesce",
    "Insalata",
    "Vino"
  ];

  presenza: boolean;

  constructor(){
    this.determinaPresenza();
  }

  determinaPresenza(){
    let mioNome = "Dario";
    console.log(mioNome);

    this.presenza = Math.random() > 0.5 ? true : false;
  }
  


}
