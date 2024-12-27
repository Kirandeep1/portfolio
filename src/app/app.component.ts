import { Component } from '@angular/core';
import { BanerComponent } from './baner/baner.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { AboutMeComponent } from "./about-me/about-me.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [BanerComponent, ResponsiveDirective, SkillsComponent, EducationComponent, PersonalInformationComponent, ProjectsComponent, AboutMeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  name = "Kirandeep";
}
