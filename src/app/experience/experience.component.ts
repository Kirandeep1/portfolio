import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  roles = [
    {
      title: 'Senior Frontend Developer',
      company: 'Zversal Private Limited',
      duration: 'Jun 2021 - Present',
      responsibilities: [
        'Build and maintain Angular applications in the financial data domain, focusing on performance, scalability, and user experience.',
        'Led framework upgrades across applications, including migration from Angular v7 to v13 and subsequent version updates.',
        'Developed and enhanced internal business applications using Retool, streamlining QA, operational, and business workflows.',
        'Built analytics dashboards using Apache Superset, and leveraged Mixpanel and Datadog to monitor product usage and application health.',
        'Modernized frontend architecture by adopting TailwindCSS and implementing code quality practices with ESLint, Prettier, Karma, and Jasmine.',
        'Contributed to deployment workflows through GitHub Actions and CI/CD, and adopted AI-assisted development tools.',
        'Collaborated closely with business stakeholders, designers, and engineering teams to deliver practical solutions.',
      ],
    },
    {
      title: 'Angular Developer Intern',
      company: 'Zversal Private Limited',
      duration: 'Jan 2021 - Jun 2021',
      responsibilities: [
        'Contributed to building "Market Data on Demand" from scratch in collaboration with UI/UX and backend teams.',
        'Worked on feature enhancements and bug fixes for the existing Vendor Management Project.',
        'Integrated REST APIs and tested endpoints using Postman.',
        'Maintained technical documentation using Markdown and version control with Git and GitHub.',
      ],
    },
  ];
}
