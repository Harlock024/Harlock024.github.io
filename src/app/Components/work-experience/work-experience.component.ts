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
      company: "Company 1",
      position: "Position 1",
      startDate: "2019-01-01",
      endDate: "2020-01-01",
      description: "Description 1",
      country: "Country 1",
      city: "City 1",
      accomplishments: ["Accomplishment 1", "Accomplishment 2"],
    },
    {
      company: "Company 2",
      position: "Position 2",
      startDate: "2020-02-01",
      endDate: "2021-02-01",
      description: "Description 2",
      country: "Country 2",
      city: "City 2",
      accomplishments: ["Accomplishment A", "Accomplishment B"],
    },
    {
      company: "Company 3",
      position: "Position 3",
      startDate: "2021-03-01",
      endDate: "2022-03-01",
      description: "Description 3",
      country: "Country 3",
      city: "City 3",
      accomplishments: ["Accomplishment X", "Accomplishment Y"],
    },
    {
      company: "Company 4",
      position: "Position 4",
      startDate: "2022-04-01",
      endDate: "2023-04-01",
      description: "Description 4",
      country: "Country 4",
      city: "City 4",
      accomplishments: ["Accomplishment M", "Accomplishment N"],
    },
    {
      company: "Company 5",
      position: "Position 5",
      startDate: "2023-05-01",
      endDate: "2024-05-01",
      description: "Description 5",
      country: "Country 5",
      city: "City 5",
      accomplishments: ["Accomplishment 10", "Accomplishment 11"],
    },
  ];
}
