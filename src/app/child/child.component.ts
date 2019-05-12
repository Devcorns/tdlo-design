import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  @Output() valueChange = new EventEmitter();
  @Output() valC = new EventEmitter();
  counter = 0;
  newVal = 10;
 
    valueChanged() { // You can give any function name

        this.counter = this.counter + 1;
        this.valueChange.emit(this.counter);
    }
    printV(){
      this.newVal = this.newVal-1;
      this.valC.emit(this.newVal);
    }

}
