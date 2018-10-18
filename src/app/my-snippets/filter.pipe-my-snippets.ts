import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipeDataList implements PipeTransform {

  transform(data: any, list: any): any {
    if (list === undefined) { return data; }
    // tslint:disable-next-line:no-shadowed-variable
    return data.filter(function(data) {
      return data.title.toLowerCase().includes(list.toLowerCase());
    });
  }

}
