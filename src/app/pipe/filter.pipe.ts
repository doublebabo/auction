import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterField: string, keyword: string): any {
    if (!filterField || !keyword) {
      return value;
    }

    return value.filter(item => {
      // console.log('enter filter');
      const fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
  }

}
