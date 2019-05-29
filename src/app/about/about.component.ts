import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'portfolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faExternalLinkAlt = faExternalLinkAlt;
  constructor() { }

  ngOnInit() {
  }

}
