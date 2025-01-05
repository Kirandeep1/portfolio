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
          'Had the opportunity to start an in-house project "Market Data on Demand" from scratch with the collaboration of UI/UX designers.',
          'Enhancements done in the in-house project "Vendor Management Project"',
          'Utilized APIs and Postman to fetch and display data on the UI.',
          'Learned Git, GitHub, markdown language, and wrote README files for projects.'
        ],
      },
    ],
    jobs: [
      {
        title: 'Software Developer',
        company: 'Zversal Pvt. Ltd.',
        duration: 'Jun 2021 - Present',
        responsibilities: [
          'Maintaining various in-house Angular projects, consistently updating functionalities to meet evolving requirements.',
          'Migrated project from Angular v7 to v13 to ensure future compatibility.',
          'Replaced Bootstrap & plain CSS with TailwindCSS in two existing in-house projects.',
          'Enhanced functionalities within a legacy AngularJS 1.x project.',
          'Integrated Mixpanel analytics in assigned projects to analyze user interactions to improve app usability.',
          'Wrote unit test cases with Karma and Jasmine.',
          'Improved code-quality by integrating enhancement tools - ESLint, Prettier & Husky in applications',
          'Working on Retool, a low-code platform to build internal tools helping the QA and business teams to automate their tasks.',
          'Familarized with SQL, docker and AWS services.'
        ],
      },
    ],
  };
}
