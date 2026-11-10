import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  title: string = 'About Me';
  description: string[] = [
    "I'm a Software Engineer with 5.5+ years of experience building and maintaining web applications in the financial data domain. My focus is Angular, TypeScript, and delivering practical, user-focused solutions.",
    "At Zversal Pvt. Ltd., I've led framework upgrades, built internal business applications on Retool, developed analytics dashboards with Apache Superset, and modernized frontend architecture with TailwindCSS while keeping legacy applications stable.",
    "I enjoy collaborating with cross-functional teams (designers, backend engineers, and business stakeholders) to turn requirements into reliable, maintainable software.",
  ];

  quickFacts = [
    { icon: 'fas fa-briefcase', label: 'Experience', value: '5.5+ Years' },
    { icon: 'fas fa-building', label: 'Currently At', value: 'Zversal Pvt. Ltd.' },
    { icon: 'fas fa-location-dot', label: 'Based In', value: 'Mohali, India' },
    { icon: 'fas fa-graduation-cap', label: 'Education', value: 'B.E. Information Technology' },
  ];
}
