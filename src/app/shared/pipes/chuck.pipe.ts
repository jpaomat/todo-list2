import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { chunk } from 'lodash';

@Pipe({
  name: 'chuck'
})
export class ChuckPipe implements PipeTransform {

  transform(value: Todo[]): Todo[][] {
    if ( value === undefined ) {
      return [];
    }
    return chunk(value, 10);
  }

}
