import { Component } from '@angular/core';

@Component({
  selector: 'app-plant-palm-component',
  templateUrl: './plant-palm-component.component.html',
  styleUrl: './plant-palm-component.component.css'
})
export class PlantPalmComponentComponent {
  ImgPalm = 'assets/img/Elipse.png';
  ImgIcon = 'assets/img/nest_eco_leaf.png';
  img='assets/img/partly_cloudy_day.png';
  termoIcon= 'assets/img/device_thermostat.png';
  HojasIcon= 'assets/img/Temp.png';
  CiervoIcon= 'assets/img/ciervo.png';
  plant='assets/img/planta 1.png'

  item = [
    {
        title: 'Year-Round Tropical Greenery',
        imgSrc: this.ImgPalm,
        imgIconSrc: this.ImgIcon,
        altImg: 'Palm Tree',
        altIcon: 'Icon Image'
    },
    {
      title: 'Drought-Tolerant',
      imgSrc: this.ImgPalm,
      imgIconSrc: this.img,
      altImg: 'Palm Tree',
      altIcon: 'Icon Image'
  },
  {
      title: 'Cold-Hardy',
      imgSrc: this.ImgPalm,
      imgIconSrc: this.termoIcon,
      altImg: 'Palm Tree',
      altIcon: 'Icon Image'
  },
  {
    title: 'No Fall Leaves',
    imgSrc: this.ImgPalm,
    imgIconSrc: this.HojasIcon,
    altImg: 'Palm Tree',
    altIcon: 'Icon Image'
},
{
  title: 'Deer-Resistant',
  imgSrc: this.ImgPalm,
  imgIconSrc: this.CiervoIcon,
  altImg: 'Palm Tree',
  altIcon: 'Icon Image'
},
{
  title: 'Non-Invasive Root System',
  imgSrc: this.ImgPalm,
  imgIconSrc: this.plant,
  altImg: 'Palm Tree',
  altIcon: 'Icon Image'
},
];

}
