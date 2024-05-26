import { Component } from '@angular/core';

@Component({
  selector:'app-galeria-menor',
  templateUrl:'./galeria-menor.component.html',
  styleUrl:'./galeria-menor.component.css'
})
export class GaleriaMenorComponent {

  Galeria = [{ direccion: "./../../../assets/img/planta5.png" },
  { direccion: "./../../../assets/img/planta1.png" },
  { direccion: "./../../../assets/img/planta2.png" },
  { direccion: "./../../../assets/img/planta3.png" },
  { direccion: "./../../../assets/img/planta4.png" },
  { direccion: "./../../../assets/img/planta5.png" }];

}
