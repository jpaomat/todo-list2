import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], searchValue: string= ''): Todo[] {
    if ( value === undefined ) {
      return [];
    }
    return value.filter(todos1 => {
      return todos1.title.includes(searchValue);
    });
  }

}
