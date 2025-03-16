import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent {
  constructor(private element:ElementRef) { }
  scrollToProjects() {
    const projectsSection = document.querySelector('app-projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }
  downloadResume(): void {
    const resumeUrl = 'Kirandeep_Kaur_Resume.pdf'; // Replace with your resume's actual path
    const link = this.element.nativeElement.ownerDocument.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kirandeep_Kaur_Resume.pdf';
    link.click();
  }

  ngOnInit() {
  }
}
