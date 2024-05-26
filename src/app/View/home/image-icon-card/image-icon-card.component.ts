import { Component } from '@angular/core';

@Component({
  selector: 'app-image-icon-card',
  templateUrl: './image-icon-card.component.html',
  styleUrl: './image-icon-card.component.css'
})
export class ImageIconCardComponent {
  Planta='assets/img/Rectangle 4.png';
  Card='assets/img/Rectangle 5.png';
  Card2='assets/img/Rectangle 6.png';


  item = [
    {
      id: 1,
      image: this.Planta, 
      title: 'Needle Palm',
      text: 'Rhapidophyllum hystrix',
      buttonText: 'Add to Cart'
    },
    {
      id: 2,
      image: this.Card, 
      title: 'Windmill Palm',
      text: 'Trachycarpus fortunei',
      buttonText: 'Add to Cart'
    },
    {
      id: 3,
      image: this.Card2, 
      title: 'Dwarf Palmetto',
      text: 'Sabal minor',
      buttonText: 'Add to Cart'
    }
  ];

}
