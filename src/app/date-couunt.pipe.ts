import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCouunt'
})
//logic to count days to goal completion day
export class DateCouuntPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date()
    let todayWithNoTime:any = new Date(today.getFullYear()
    ,today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime)
    const secondsInDay = 86400
    var datedifferenceinsec = dateDifference * 0.001
    var datecounter = datedifferenceinsec/secondsInDay

     if(datecounter >= 1 && value > todayWithNoTime){
       return datecounter
     }else{
       return 0
     }


  }

}
