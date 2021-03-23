import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit, AfterViewChecked {

  faLink = faLink;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewChecked(){
    const elem:HTMLElement = document.querySelector(".container-fluid");
    elem.classList.add("active");
  }

}
