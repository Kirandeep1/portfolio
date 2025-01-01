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
    title: 'Market Data on Demand Application',
    technologies: ['Angular', 'GraphQL', 'Node.js', 'Go'],
    description:
      'A financial data application that provides end of day market data to clients on demand. Supports data requests for multiple securities via CSV or Excel import.',
    responsibilities: [
      'Developed the front-end using Angular from scratch; now maintained by another team.',
    ],
    time_worked: "06/2021-03/2024"
  },
  {
    title: 'gRPC Service Management Tool',
    technologies: ['Retool', 'gRPC'],
    description:
      'A Retool-based tool for managing gRPC services, improving coordination between operations and development teams.',
    responsibilities: [
      'Built and maintaining the tool independently.',
      'Integrated back-end services and collaborated with operations for requirements.',
    ],
    time_worked: "08/2024-Present"
  },
  {
    title: 'Vendor Management System',
    technologies: ['Angular', 'Java'],
    description:
      'Manages vendor and client data distribution for financial products, focusing on authentication and authorization.',
    responsibilities: [
      'Responsible for the enhancements and bug fixes of the app.',
    ],
    time_worked: "01/2021-Present"
    },
    {
      title: 'Agreement App',
      technologies: ['AngularJS 1.x', 'Java'],
      description:
        'Allows clients to sign agreements online for exchange data access, enabling product authorization.',
      responsibilities: [
        'Involved in the maintenance and bug fixes of the app.',
      ],
      time_worked: "10/2022-Present"
      },
];

toggleDetails(index: number) {
  this.isOpen[index] = !this.isOpen[index];
}
  
}
