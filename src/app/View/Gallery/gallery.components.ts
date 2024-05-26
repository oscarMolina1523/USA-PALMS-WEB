import { Component } from '@angular/core';

@Component({
  selector:'app-gallery1',
  templateUrl:'./Gallery.component.html',
  styleUrl:'./Gallery.component.css'
})
export class GalleryComponent {
ImgHeadG='assets/img/gallery-banner.png' 
ImgPlG='assets/img/planta1.png' 
ImgP2G='assets/img/Rectangle 4.png'
ImgP3G='assets/img/Rectangle 5.png'
ImgP4G='assets/img/Rectangle 6.png'
ImgP5G='assets/img/Rectangle 7.png'
ImgP6G='assets/img/Rectangle 8.png'
ImgP7G='assets/img/Rectangle 9.png'

Btns=[  
  {
    id:1, name:"Titulo1" 
  },
  {
    id:2, name:"Titulo2" 
  }
];
}