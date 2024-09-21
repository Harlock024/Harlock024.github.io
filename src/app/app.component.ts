import { Component } from "@angular/core";
// import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./Components/header/header.component";
import { WorkExperienceComponent } from "./Components/work-experience/work-experience.component";
import { EducationComponent } from "./Components/education/education.component";
import { SkillComponent } from "./Components/skill/skill.component";
import { ArchivementsComponent } from "./Components/archivements/archivements.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    ArchivementsComponent,
    SkillComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "cv_project";
}
