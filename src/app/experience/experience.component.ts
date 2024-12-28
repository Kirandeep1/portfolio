import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  employment = {
    internships: [
      {
        title: 'Angular Developer Intern',
        company: 'Zversal Pvt. Ltd.',
        duration: 'Jan 2021 - Jun 2021',
        responsibilities: [
          'Enhanced an in-house Angular project by consistently updating functionalities according to requirements.',
          'Learned Git, GitHub, and markdown language, and wrote README files for the projects.',
          'Utilized APIs and Postman to fetch and display data on websites.',
          'Had the opportunity to start a new project from scratch.'
        ],
      },
    ],
    jobs: [
      {
        title: 'Software Developer',
        company: 'Zversal Pvt. Ltd.',
        duration: 'Jun 2021 - Present',
        responsibilities: [
          'Working on Retool, a low-code platform to build internal tools helping the QA and business teams to automate their tasks.',
          'Maintaining various in-house Angular projects, consistently updating functionalities to meet evolving requirements.',
          'Worked on a project to build a website from scratch.',
          'Migrated a project from Angular 7 to Angular 13.',
          'Replaced Bootstrap & plain CSS with Tailwind CSS in projects.',
          'Enhanced functionalities within legacy Angular JS 1.x project.',
          'Integrated Mixpanel analytics in a project to track user interactions.',
          'Familarized with SQL, docker and AWS services.'
        ],
      },
    ],
  };
}
