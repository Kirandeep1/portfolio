import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillSet = [  
    {
    name: 'Angular',
    percent: 75
    },
    {
      name: 'Javascript',
      percent: 80
    },
    {
      name: 'Typescript',
      percent: 70
    },
    {
      name: 'HTML',
      percent: 90
    },
    {
      name: 'CSS',
      percent:80
    },
    {
      name: 'Bootstrap',
      percent: 70
    },
    {
      name: 'TailwindCSS',
      percent: 70
    },
    {
      name: "REST",
      percent: 60
    },
    {
      name: "GIT",
      percent: 70
    },
    {
      name: "Github",
      percent: 80
    },
    {
      name: "Retool",
      percent: 90
    }
  ]
}
