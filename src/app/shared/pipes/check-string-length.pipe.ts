import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStringLength',
})
export class CheckStringLengthPipe implements PipeTransform {
  constructor() {}

  transform(str, num): string {
    if (!str) return;
    return str.length >= num ? str.substr(0, num) + '...' : str;
  }
}
