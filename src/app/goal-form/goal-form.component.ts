import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
//logic for fom-component
export class GoalFormComponent implements OnInit {


  newGoal = new Goal(0,"","",new Date ())
  @Output() addGoal = new EventEmitter<Goal>()
  //submit function called on submission otuputs an event to parent component that adds the goal
  
    submitGoal(){
      this.addGoal.emit(this.newGoal)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
