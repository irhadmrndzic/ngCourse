import { Pipe, PipeTransform } from "@angular/core";

// tslint:disable-next-line: use-pipe-transform-interface
// tslint:disable: no-inferrable-types
// tslint:disable: quotemark

@Pipe({
  name: "convertToSpaces" //ime se koristi za pristup putem htmla
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, " ");
  }
}
