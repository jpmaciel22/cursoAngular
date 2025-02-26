import { Directive } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host:{
    '(click)': 'onLeavePage($event)'
  }
})
export class SafeLinkDirective {
  constructor(){
  }
  onLeavePage(event: MouseEvent ){
    const r = window.confirm('Você quer realmente sair da página?');
    if(r){
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=myapp'
      return;
    }
    else{
      event.preventDefault();
    }
  }
}
