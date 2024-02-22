import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if(!value){
      return '';
    }

    switch(targetUnits){
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1.609344 * 1000;
      case 'cm':
        return value * 1.609344 * Math.pow(1000, 2);
      default:
        throw new Error('Target unit not supported');
    }
  }

}
