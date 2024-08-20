import { Component } from "@angular/core";
// import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./Components/footer/footer.component";
import { HeaderComponent } from "./Components/header/header.component";
import { MainComponent } from "./Components/main/main.component";
import "@fontsource-variable/outfit";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "cv_project";
}
