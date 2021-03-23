import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }
  scrollForward(){
    const element:HTMLElement = document.querySelector(".line");
    element.scrollLeft += 35 ;
  }
  scrollBack(){
    const element:HTMLElement = document.querySelector(".line");
    element.scrollLeft -= 35 ;
  }
}
