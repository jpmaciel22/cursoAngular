import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host:{
    '(click)': 'onLeavePage($event)'
  }
})
export class SafeLinkDirective {
  queryParam = input('myapp', {alias: 'appSafeLink'})
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  constructor(){
  }
  onLeavePage(event: MouseEvent ){
    const r = window.confirm('Você quer realmente sair da página?');
    if(r){
      // const address = (event.target as HTMLAnchorElement).href;
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam()
      return;
    }
    else{
      event.preventDefault();
    }
  }
}
