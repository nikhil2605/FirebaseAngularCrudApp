import { PipeTransform, Pipe } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
    name: "simplePipe"
})
export class SimplePipe implements PipeTransform {
    str: string = "";

    transform(value: string) {

        for (var i = 0; i <= value.length; i++) {
            if (i % 2 == 0) {
                this.str += value.charAt(i).toUpperCase();
            } else {
                this.str += value.charAt(i).toLowerCase();
            }
        }
        return this.str;
    }
}
