import { Component, OnInit } from '@angular/core';
import { HpApiService } from '../../service/harrypotter-api.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-all-spells',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './all-spells.component.html',
  styleUrl: './all-spells.component.css'
})
export class AllSpellsComponent implements OnInit {
  spells: any[] = [];

  constructor(private hpApiService: HpApiService) { }

  ngOnInit(): void {
    this.getSpells();

  }

  private getSpells(): void {
    this.hpApiService.getSpells().subscribe(data => {
      this.spells = data;

      console.log("Hola");

    });
  }

}
