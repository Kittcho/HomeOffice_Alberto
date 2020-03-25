import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rutaImg'
})
export class RutaImgPipe implements PipeTransform {

  transform(value: string): string {
    console.log({value});
    return `assets/img/${ value }`;
  }

}
