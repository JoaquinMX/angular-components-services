import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'encryptVowels'
})
export class EncryptVowelsPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replaceAll("e", "3");
    value = value.replaceAll("o", "0");
    value = value.replaceAll("i", "1");
    value = value.replaceAll("a", "4");
    value = value.replaceAll("u", "9");

    return value;
  }


}
