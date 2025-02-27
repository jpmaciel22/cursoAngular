import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  // pure: false // isso faz com que desabilite o sistema de cache do pipe
  // e ele acabará atualizando diversas vezes, afetando a boa otimizacao do sistema
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'desc'){
    const sorted = [...value];
    sorted.sort((a,b) => {
      if(direction === 'asc'){
        return a>b?1:-1;
      }else{
        return a>b?-1:1;
      }
    });
    return sorted;
  }

}
