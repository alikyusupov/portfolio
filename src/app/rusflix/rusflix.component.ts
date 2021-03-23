import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rusflix',
  templateUrl: './rusflix.component.html',
  styleUrls: ['./rusflix.component.css']
})
export class RusflixComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(){
    const elem:HTMLElement = document.querySelector(".container-fluid");
    elem.classList.add("active");
  }
}
