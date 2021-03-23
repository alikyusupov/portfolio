import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-slavehunter-header',
  templateUrl: './slavehunter-header.component.html',
  styleUrls: ['./slavehunter-header.component.css']
})
export class SlavehunterHeaderComponent implements OnInit {

  @Output() menuIsClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  menuClicked(){
   this.menuIsClicked.emit();
  }

}
