import { Component, OnInit } from '@angular/core';
import{ Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  thing = "Learn Angular";
  career = " ITS GOING TO End in AI" 

  goals:Goal[]=[
    new Goal( 1,'Learn ANgular','i need to learn this framework',new Date (2022,4,5)),
    new Goal( 2, 'Learn Django','this is my beginning in Python',new Date (2022,8,5)),
    new Goal( 3, 'Learn Flask','this is to top up my backend',new Date (2022,7,5)),
    new Goal( 4, 'Learn Softskills','they enable me communicate ',new Date (2022,6,5)),
  ];
  //logic to toggle the goal detals
  toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
 //logic to delete a goal
  completeGoal(isComplete:any, index:any){
    if(isComplete){
      this.goals.splice(index, 1)//splice removes the item at the indes specified
      
    }
  }
//logic to add new goal after event is emited and received from form

    addNewGoal(goal:any){
      let goalLength = this.goals.length
      goal.id = goalLength + 1
      goal.completeDate = new Date (goal.completeDate)
      this.goals.push(goal)
    }
 
  constructor() { }

  ngOnInit(): void {//helper method run when class is initialized
  }

}
