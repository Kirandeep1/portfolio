import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResponsive]',
})
export class ResponsiveDirective implements OnInit {
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) { 
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe(result => {
      for (let breakpoint of Object.keys(result.breakpoints)) {
        if (result.breakpoints[breakpoint]) {
          if (breakpoint === Breakpoints.HandsetPortrait) {
            this.element.nativeElement.classList.remove('pc');
          } else if (breakpoint === Breakpoints.WebLandscape) {
            this.element.nativeElement.classList.add('pc');
          }
        }
      }
    });
  }

  ngOnInit() {
  }

}