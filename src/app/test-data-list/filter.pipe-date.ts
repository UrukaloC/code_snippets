import { Pipe, PipeTransform } from '@angular/core';
import { DataTest } from '../models/snippet.model';

@Pipe({
  name: 'date',

})

export class FilterPipeDate implements PipeTransform {
    transform(
      value: DataTest[] | null,
      ascending?: boolean
    ): DataTest[] {
      if (value !== null) {
        if (!ascending) {
          value = value.reverse();
        }
        return value;
      } else {
        return [];
      }
    }
  }
