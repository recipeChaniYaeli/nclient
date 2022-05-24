import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  pure:false
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
   
    let hours = Math.floor((value/60));
    var minutes =value % 60;
   if(minutes<10)
    return hours + ':0' + minutes  ;
  return hours + ':' + minutes  ;
  }

}
