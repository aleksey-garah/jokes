import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { DATE_FORMAT } from '../constants';

@Pipe({
  name: 'euDate'
})
export class EuDatePipe extends DatePipe implements PipeTransform {

  public transform(value: string): string {
    return super.transform(new Date(value), DATE_FORMAT);
  }

}
