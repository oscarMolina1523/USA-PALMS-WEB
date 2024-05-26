import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dataPlants } from '../../../utilities/dataPlants';
import { DragzoneComponent } from './dragzone/dragzone.component';
import { background } from '../../../utilities/dataPlants';
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css',
})
export class DragAndDropComponent implements OnInit {
  @ViewChild('dragzone') dragzone!: DragzoneComponent;
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  bg = background;
  done: boolean = false;

  reading: boolean = false;

  imageUrl: string | null = null;

  onUpload: boolean = false;
  plants: any[] = [];
  etiquetas: any[] = [
    { id: 1, name: 'Etiqueta1' },
    { id: 2, name: 'Etiqueta2' },
    { id: 3, name: 'Etiqueta3' },
    { id: 4, name: 'Etiqueta4' },
    { id: 5, name: 'Etiqueta5' },
    { id: 6, name: 'Etiqueta6' },
    { id: 7, name: 'Etiqueta7' },
    { id: 8, name: 'Etiqueta8' },
  ];
  etiquetaSeleccionada: any[] = [];

  dragImgs: string[] = [];
  ngOnInit(): void {
    this.plants = dataPlants;
  }

  addOrSupEti(index: number) {
    const etiqueta = this.etiquetas[index];

    if (this.etiquetaSeleccionada.some((eti) => eti === etiqueta)) {
      const index = this.etiquetaSeleccionada.findIndex(
        (eti) => eti === etiqueta
      );

      if (index !== -1) {
        this.etiquetaSeleccionada.splice(index, 1);
      }
    } else {
      this.etiquetaSeleccionada.push(etiqueta);
    }

    console.log(this.etiquetaSeleccionada);
  }

  etiquetaActiva(id: number): boolean {
    return this.etiquetaSeleccionada.some((eti) => eti.id === id);
  }

  agrevarImagen(ruta: string): void {
    this.dragImgs.push(ruta);
    console.log(this.dragImgs);
    this.dragzone.updatePlants(ruta);
  }

  onFileChanged(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  triggerFileInput(): void {
    this.fileInput?.nativeElement.click();

    console.log('click');
  }

  clean() {
    this.imageUrl = null;
    this.dragImgs = [];
    this.dragzone.plantsList = [];
  }
  isDone() {
    this.done = true;
  }

  async descargar() {
    this.reading = true;
    console.log('descargando....');
    await this.dragzone.convertToImage();
    this.reading = false;
    console.log('descargado');
  }

  eliminar(){
    this.dragzone.deletePlant();
  }
}
