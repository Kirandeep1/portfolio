import { Component } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent {
  scrollToProjects() {
    const projectsSection = document.querySelector('app-projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
