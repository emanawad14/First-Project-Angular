import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images:string[]=[
    "/img/portfolio_one.png",
    "/img/portfolio_two.png",
    "/img/portfolio_three.png",
    "/img/portfolio_one.png",
    "/img/portfolio_two.png",
    "/img/portfolio_three.png",
    
    ];

    currentImage:string="";

}
