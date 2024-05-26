import { Component } from '@angular/core';

@Component({
  selector: 'app-palm-expert',
  templateUrl: './palm-expert.component.html',
  styleUrl: './palm-expert.component.css'
})
export class PalmExpertComponent {
  ImgPalm = 'assets/img/Rectangle 2.png';
  items = [
    {
      id: 1,
      icon: 'fas fa-truck',
      title: 'Fast, No-Damage Delivery',
      text: '$ 149 Local Delivery* or Free In-Store Pickup',
    },
    {
      id: 2,
      icon: 'fas fa-medal',
      title: 'Guaranteed Healthy Palm Trees',
      text: 'Every Palm is backed by our 60-day guarantee',
    },
    {
      id: 3,
      icon: 'fas bi-star',
      title: '200 + 5 - Star Reviews',
    }
  ];
}
