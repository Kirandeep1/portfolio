import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend',
      items: ['Angular (v2+)', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'RxJS'],
    },
    {
      category: 'Styling',
      items: ['TailwindCSS', 'Bootstrap'],
    },
    {
      category: 'Backend & Data',
      items: ['SQL (MySQL)', 'REST APIs', 'Node.js'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Docker', 'Postman', 'Retool (Low Code)'],
    },
    {
      category: 'Testing',
      items: ['Karma', 'Jasmine'],
    },
    {
      category: 'Analytics',
      items: ['Apache Superset', 'Mixpanel', 'Datadog'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS Services', 'GitHub Actions', 'CI/CD'],
    },
    {
      category: 'Familiar With',
      items: ['React', 'Go', 'GraphQL', 'gRPC'],
    },
    {
      category: 'Soft Skills',
      items: ['Mentoring', 'Team Collaboration', 'Documentation', 'Problem Solving'],
    },
  ];
}
