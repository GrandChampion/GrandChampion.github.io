import {Component} from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
  school = "University of British Columbia";
  degree = "Bachelor of Science";
  major = "Computer science";
}
