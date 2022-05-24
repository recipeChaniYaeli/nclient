import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: Number): unknown {
   let hard:String="";
   let j;
   for( j=value; j<5; j++) {
    hard+="🤍";
  }
    for(let i=0;i<value&&i<5;i++){
      hard+="❤";
    } 
   
    return hard;
  }

}
