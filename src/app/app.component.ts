import { Component } from "@angular/core";
// import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./Components/header/header.component";
import { WorkExperienceComponent } from "./Components/work-experience/work-experience.component";
import { EducationComponent } from "./Components/education/education.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, WorkExperienceComponent, EducationComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "cv_project";
}
