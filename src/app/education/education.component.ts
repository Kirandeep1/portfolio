import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  employment = {
    internships: [
      {
        title: 'Software Developer Intern',
        company: 'ABC Company',
        duration: 'Jan 2021 - Jun 2021',
        responsibilities: [
          'Developed key features for internal tools.',
          'Collaborated with the QA team for testing.',
        ],
      },
    ],
    jobs: [
      {
        title: 'Software Engineer',
        company: 'XYZ Corporation',
        duration: 'Jul 2021 - Present',
        responsibilities: [
          'Implemented scalable APIs for key projects.',
          'Led a team of 4 to deliver a high-priority feature.',
        ],
      },
    ],
  };
  
}
