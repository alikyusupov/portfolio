import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-slavehunter-main',
  templateUrl: './slavehunter-main.component.html',
  styleUrls: ['./slavehunter-main.component.css']
})
export class SlavehunterMainComponent implements OnInit {


  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }


}
