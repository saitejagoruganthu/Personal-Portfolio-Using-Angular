import { Component, OnInit } from '@angular/core';

//@ts-ignore
import AOS from "aos";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}
