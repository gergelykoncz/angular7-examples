import { Pipe, PipeTransform } from '@angular/core';

export enum EvenOddEnum {
  Even = 'even',
  Odd = 'odd'
}

@Pipe({ name: 'evenodd' })
export class EvenOddPipe implements PipeTransform {
  transform(value: any[], filter: EvenOddEnum) {
    if (!value || !Object.values(EvenOddEnum).includes(filter)) {
      return value;
    }
    return value.filter((item, index) => {
      switch (filter) {
        case EvenOddEnum.Even:
          return index % 2 === 1;
        case EvenOddEnum.Odd:
          return index % 2 === 0;
      }
    });
  }
}
