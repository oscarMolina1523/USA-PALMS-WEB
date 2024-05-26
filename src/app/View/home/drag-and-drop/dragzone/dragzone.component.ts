import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dragzone',
  templateUrl: './dragzone.component.html',
  styleUrls: ['./dragzone.component.css'],
})
export class DragzoneComponent implements OnInit {
  @Input() plant: string[] = [];
  @Input() bg: string = '';
  @ViewChild('contentToConvert') contentToConvert!: ElementRef;
  plantsList: { id: number; name: string }[] = [];
  private idCounter = 0;
  idDelete? :number;

  ngOnInit(): void {}

  updatePlants(ruta: string): void {
    this.plantsList.push({ id: ++this.idCounter, name: ruta });
  }

  deletePlant(): void {
    const id = this.idDelete
    this.plantsList = this.plantsList.filter((plant) => plant.id !== id);
    console.log(this.plantsList);
  }


  convertToImage(): void {
    const element = this.contentToConvert.nativeElement;
    // Configuramos las opciones para que el fondo sea transparente
    const options = {
      backgroundColor: null,
    };

    html2canvas(element, options).then((canvas) => {
      this.downloadImage(canvas);
    });
  }

  downloadImage(canvas: HTMLCanvasElement): void {
    // Convertir el canvas a una URL de datos
    const image = canvas.toDataURL('image/png');

    // Crear un enlace para descargar la imagen
    const link = document.createElement('a');
    link.href = image;
    link.download = 'imagen.png';

    // Simular el clic en el enlace para iniciar la descarga
    link.click();
  }

  toggleActive(elementId: string): void {
    this.idDelete =  parseInt(elementId);
    let element = document.getElementById(elementId);
  
    if (element) {
      element.classList.toggle('active');
    }
  }  
}
