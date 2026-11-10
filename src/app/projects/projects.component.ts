import { Component } from '@angular/core';
interface Project {
  title: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
  time_worked: string;
}
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
title: string = "Projects";
isOpen: boolean[] = [];
projects: Project[] = [
  {
    title: 'Market Data on Demand',
    technologies: ['Angular', 'GraphQL', 'Node.js', 'Go'],
    description:
      'A financial data platform delivering end-of-day market data to users and exchanges, covering equities, mutual funds, bonds, and debts.',
    responsibilities: [
      'Initiated the project from scratch with a focus on scalable, modular Angular architecture, in close collaboration with UI/UX and backend teams.',
      'Continued maintaining and enhancing the application post-launch, adapting to evolving business requirements.',
    ],
    time_worked: "Jun 2021 - Present"
  },
  {
    title: 'gRPC Service Management Tool',
    technologies: ['Retool', 'gRPC'],
    description:
      'An internal tool built on Retool to streamline gRPC service requests across QA and operations teams.',
    responsibilities: [
      'Improved cross-team coordination and significantly reduced manual effort in managing service requests.',
      'Integrated back-end services and collaborated with the operations team to gather and implement requirements.',
    ],
    time_worked: "Aug 2024 - Present"
  },
  {
    title: 'Vendor Management System',
    technologies: ['Angular', 'Java', 'SQL'],
    description:
      'A vendor and client data distribution system managing user access to financial products between users and exchanges.',
    responsibilities: [
      'Contributed to feature enhancements, UI improvements, and bug fixes.',
      'Maintained application compatibility through multiple Angular version upgrades over time.',
    ],
    time_worked: "Jan 2021 - Present"
    },
    {
      title: 'Agreement App',
      technologies: ['AngularJS 1.x', 'Java'],
      description:
        'A client-facing application enabling users to fill out and submit agreements and receive authorization updates from exchanges.',
      responsibilities: [
        'Delivered enhancements and bug fixes on a legacy AngularJS 1.x codebase while ensuring continued stability.',
      ],
      time_worked: "Oct 2022 - Apr 2024"
      },
];

toggleDetails(index: number) {
  this.isOpen[index] = !this.isOpen[index];
}
  
}
