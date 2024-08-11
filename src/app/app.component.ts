import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllCharactersComponent } from "../components/all-characters/all-characters.component";
import { AllSpellsComponent } from "../components/all-spells/all-spells.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllCharactersComponent, AllSpellsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harrypotter_characters';
}
