<<<<<<< HEAD
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-education",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./education.component.html",
})
export class EducationComponent {
  Educations = [
    {
      school: "Universidad Veracruzana",
      degree: "Licenciatura en Ingenieria de Software",
      startDate: "Jan 2017",
      endDate: "Present",
    },
    {
      school: "Preparatoria Cobaev 06",
      degree: "Bachillerato en Informatica",
      startDate: "Jan 2019",
      endDate: "Ago 2022",
    },
    {
      school: "Secundaria Martiles de 1907",
      degree: "Secundaria",
      startDate: "Jan 2015",
      endDate: "Ago 2018",
    },
  ];
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

>>>>>>> 59bbda3 (education component)
}
