import { input, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform{
transform(value:number | string, inputType: 'cel'|'fah', outputType?: 'cel'|'fah'){
  let val: number;
  if(typeof value === 'string'){
    val = Number(value);
  }else{
    val = value;
  }


  let outputTemp: number;
  if(inputType === 'cel' && outputType === 'fah'){
    outputTemp = val * (9/5) + 32
    outputTemp = Number(outputTemp.toFixed(2))
  }
  if(inputType === 'fah' && outputType === 'cel'){
    outputTemp = (val-32) * (5/9)
    outputTemp = Number(outputTemp.toFixed(2))
  }else{
    outputTemp = val;
  }
  let symbol: '°C' | '°F';
  if(!outputType){
    symbol = inputType === 'cel' ? '°C':'°F';
  }else{
    symbol = outputType === 'cel' ? '°C':'°F';
  }
  return `${outputTemp.toFixed(2)} ${symbol}`
  // if(args[0] === 'celsius'){
  //   const outputToCelsius = (val-32) * 5/9
  //   return `${outputToCelsius.toFixed(2)} °C`
  // }
}
}
