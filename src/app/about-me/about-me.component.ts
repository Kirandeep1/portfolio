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
    "I am a Frontend Developer with over 3 years of experience, specializing in Angular and building dynamic, scalable web applications. I am passionate about learning and adapting to new technologies to deliver impactful, user-focused solutions.",
    "Currently, I work at Zversal Pvt. Ltd., where I contribute to creating user-friendly and efficient applications. Recently, I have explored low-code platforms like Retool, showcasing my adaptability to evolving tools and requirements.",
    // "I hold a Bachelor's degree in Information Technology from UIET, Panjab University."
  ]
}
