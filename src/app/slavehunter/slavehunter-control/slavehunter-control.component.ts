import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slavehunter-control',
  templateUrl: './slavehunter-control.component.html',
  styleUrls: ['./slavehunter-control.component.css']
})
export class SlavehunterControlComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {

  }
  
  onMenuIsClicked(){
    console.log("event is registered")
    const menuEl:HTMLElement = document.querySelector(".dropmenu");
    const mainEL:HTMLElement = document.querySelector(".component-wrapper");
    const footerEl:HTMLElement =  document.querySelector("app-slavehunter-footer");
    if(menuEl.classList.contains("active")){
      menuEl.classList.remove("active");
      mainEL.style.visibility = "visible";
      footerEl.style.display = "block";
    }
    else{
      menuEl.classList.add("active");
      mainEL.style.visibility = "hidden";
      footerEl.style.display = "none";
    }
  }
    ngAfterViewChecked(){
      const elem:HTMLElement = document.querySelector("#wrapper");
      elem.classList.add("active_");
    
  }
}
