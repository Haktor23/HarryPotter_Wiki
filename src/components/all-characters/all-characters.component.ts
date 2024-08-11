import { Component, OnInit } from '@angular/core';
import { HpApiService } from '../../service/harrypotter-api.service';


@Component({
  selector: 'app-all-characters',
  standalone: true,
  imports: [],
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css'
})
export class AllCharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private hpApiService: HpApiService) { }

  ngOnInit(): void {
    this.getCharacters();

  }

  private getCharacters(): void {
    this.hpApiService.getCharacters().subscribe(data => {
      this.characters = data;

      console.log("Hola");

    });
  }

}