import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prostogramm',
  templateUrl: './prostogramm.component.html',
  styleUrls: ['./prostogramm.component.css']
})
export class ProstogrammComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(){
    const elem:HTMLElement = document.querySelector("#wrapper");
    elem.classList.add("active");
  }

}
