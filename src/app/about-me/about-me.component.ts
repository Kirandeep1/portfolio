import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  title:string = 'About Me';
  description:string[] = 
  [
    "I am a Frontend Software Engineer with over 3 years of experience, specializing in Angular and passionate about continuous learning. For now, I am exploring low-code platforms like Retool to enhance my skills and build impactful applications.",
    "Currently, I am working as a software engineer at Zversal Pvt. Ltd., with 3 years of experience in web development. I hold a Bachelor's degree in Information Technology from UIET, Panjab University."
  ]
}
