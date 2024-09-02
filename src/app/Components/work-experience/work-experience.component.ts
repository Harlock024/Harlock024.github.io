import { Component } from "@angular/core";

import { CommonModule } from "@angular/common";

@Component({
  selector: "app-work-experience",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./work-experience.component.html",
})
export class WorkExperienceComponent {
  workExperience = [
    {
      company: "Imprenta Leos",
      position: "Diseñador Grafico",
      startDate: "Jan 2017",
      endDate: "Present",
      country: "México",
      city: "Veracruz",
      accomplishments: [
        "Contribuir a la expansión del portafolio de servicios de la empresa al desarrollar nuevas ofertas de diseño, como ilustraciones personalizadas y animaciones, que atrajeron a nuevos segmentos de clietes. ",
        "Implementaste un sistema de trabajo más eficiente dentro del equipo de diseño, reduciendo el tiempo de diseño,sin compremeter la calidad del trabajo ",
      ],
    },
    {
      company: "Star Cases",
      position: "Programador Full-stack",
      startDate: "Jan 2024",
      endDate: "Present",
      country: "México",
      city: "Veracruz",
      accomplishments: [
        "Diseñar y desarrollaste desde cero una plataforma de comercio electrónico completmente funcional",
        "Implemetar un sistema que permite a los clientes personalizar sus fundas, hoodies y t-shirts en tiempo real a través del sitio web",
      ],
    },
  ];
}
