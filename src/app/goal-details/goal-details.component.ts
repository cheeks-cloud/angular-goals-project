import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import{ Goal} from '../goal';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
//this is the logic file for  the goal details
export class GoalDetailsComponent implements OnInit {
// the input decorator is used to pass data from parent to child
  @Input()goal!: Goal;
  @Output() isComplete = new EventEmitter <boolean> ()
//we use the output decorator to define an eventemitter that takes in a boolean
  //the output emits what we want the parent to get


 goalComplete(complete:boolean){ // this is the function that calls the emit method it emits the boolean value paswsed in
  
    this.isComplete.emit(complete)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
