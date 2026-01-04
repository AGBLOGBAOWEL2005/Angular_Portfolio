import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    onButtonClick(): void {
    const element = document.getElementById('service');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onButtonContactClick():void{
    const element = document.querySelector("#contact");
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }
  onButtonAproposClick():void{
    const element = document.querySelector("#apropos");
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  }
  onButtonPortfolioClick():void{
    const element = document.querySelector("#portfolio");
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  }
}
