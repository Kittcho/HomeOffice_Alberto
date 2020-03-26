import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rutaImg'
})
export class RutaImgPipe implements PipeTransform {

  transform(value: string): string {
    return `assets/img/${ value }`;
  }

}
