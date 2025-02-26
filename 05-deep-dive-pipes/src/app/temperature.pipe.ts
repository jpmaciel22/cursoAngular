import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform{
transform(value:number | string, ...args:any[]){
  let val: number;
  if(typeof value === 'string'){
    val = Number(value);
  }else{
    val = value;
  }

  const outputTemp = val * (9/5) + 32

  if(args[0] === 'fahrenheit'){
    const outputToCelsius = (val-32) * 5/9
    return outputToCelsius.toFixed(2)
  }

  return `${outputTemp.toFixed(2)} °F`;
}
}
