import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HpApiService } from '../../service/harrypotter-api.service';

@Component({
  selector: 'app-staff-characters',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './staff-characters.component.html',
  styleUrl: './staff-characters.component.css'
})
export class StaffCharactersComponent implements OnInit {
  staffs: any[] = [];

  constructor(private hpApiService: HpApiService) { }

  ngOnInit(): void {
    this.getStaff();

  }

  private getStaff(): void {
    this.hpApiService.getStaff().subscribe(data => {
      this.staffs = data;

      console.log("Hola");

    });
  }

}