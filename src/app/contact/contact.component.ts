import { Component, OnInit } from '@angular/core';
import { faSearchLocation, faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faSearchLocation = faSearchLocation;
  location = faMapMarker;
  phone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
