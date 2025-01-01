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
    "I am a Frontend Software Engineer with over 3 years of experience, specializing in Angular and web development. I enjoy learning and adapting to new technologies.",
    "I currently work at Zversal Pvt. Ltd., where I help build scalable and user-friendly applications. Recently, I have also worked with low-code platforms like Retool, showing my ability to adapt to changing needs.",
    // "I hold a Bachelor's degree in Information Technology from UIET, Panjab University."
   
  ]
}
