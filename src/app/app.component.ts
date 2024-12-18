import { Component } from '@angular/core';
import { BanerComponent } from './baner/baner.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [BanerComponent, SkillsComponent, ContactComponent, EducationComponent, PersonalInformationComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  name = "Kirandeep";
}
