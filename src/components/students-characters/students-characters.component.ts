import { Component, OnInit } from '@angular/core';
import { HpApiService } from '../../service/harrypotter-api.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-students-characters',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './students-characters.component.html',
  styleUrl: './students-characters.component.css'
})
export class StudentsCharactersComponent implements OnInit {
  students: any[] = [];

  constructor(private hpApiService: HpApiService) { }

  ngOnInit(): void {
    this.getStudents();

  }

  private getStudents(): void {
    this.hpApiService.getStudents().subscribe(data => {
      this.students = data;

      console.log("Hola");

    });
  }

}
