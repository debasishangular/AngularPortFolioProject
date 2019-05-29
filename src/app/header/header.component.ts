import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 800) {
       const element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
     const element = document.getElementById('navbar');
        element.classList.remove('sticky');
     }
  }
}
