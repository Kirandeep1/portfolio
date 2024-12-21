import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-baner',
  imports: [],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent {
@HostBinding('class.pc') pcMode = false;
// dynamically adds or removes the pc class on the host element based on the value of the pcMode property.
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe({next: result => {
      for (let breakpoint of Object.keys(result.breakpoints)) {
        console.log("breakpoint: ", breakpoint);
        if (result.breakpoints[breakpoint]) {
          if (breakpoint === Breakpoints.HandsetPortrait) {
            this.pcMode = false;
          } else if (breakpoint === Breakpoints.WebLandscape) {
            this.pcMode = true;
          }
        }
      }
    }});
  }
}
