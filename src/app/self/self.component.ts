import { Component, OnInit } from '@angular/core';
import {Self} from './self.js';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {
  self = new Self();

  constructor() { }

  ngOnInit() {
     let el = document.getElementById('expBarProgress');
    let width = 1;
    let id = setInterval(() => {
      if (width>= 100) {
        clearInterval(id);
      }
      else {
        width+= 0.1;
        el.style.width = width + "%";
      }
    }, 10); 
  }

  levelUp() {
    
  }

}
