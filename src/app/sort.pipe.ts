import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string, asc = true): any {
    if (value === null || value.length < 2) {
      return value;
    }
    let resultArray = value.sort((a, b) => {
      return a[propName].localeCompare(b[propName]);
    });
    if (!asc) {
      resultArray = resultArray.reverse();
    }
    return resultArray;
  }

}
