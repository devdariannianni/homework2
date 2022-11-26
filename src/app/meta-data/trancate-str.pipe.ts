import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trancateText'
})
export class TrancateStrPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    let result = value || '';
    if(value){
      const words: string[] = value.split(/\s+/);
      if(words.length > limit){
        if(limit < 0){
          limit *= -1
          result = words.slice(words.length - limit, words.length).join(' ')
        }else{
          result = words.slice(0, limit).join(' ')
        }
      }
    }
    console.log(result);
    
    return result;
  }

}
