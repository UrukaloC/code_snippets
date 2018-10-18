import { Pipe, PipeTransform } from '@angular/core';
import { DataTest } from '../models/snippet.model';

@Pipe({
  name: 'filters'

})
export class FilterPipeLanguage implements PipeTransform {

  transform(data: any, language: any): any {
    if (language === undefined) { return data; }
    // tslint:disable-next-line:no-shadowed-variable
    return data.filter(function(data) {
      return data.programmL.toLowerCase().includes(language.toLowerCase());
        });
  }

}
