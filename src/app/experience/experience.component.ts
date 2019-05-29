import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'portfolio-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() { }

  ngOnInit() {
  }

}
