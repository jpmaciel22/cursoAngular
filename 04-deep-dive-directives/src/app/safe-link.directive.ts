import { Directive } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host:{
    '(click)': 'onLeavePage()'
  }
})
export class SafeLinkDirective {
  constructor(){
  }
  onLeavePage(event: MouseEvent ){
    const r = window.confirm('Você quer realmente sair da página?');
    if(r){
      return;
    }
    else{
      event.preventDefault();
    }
  }
}
