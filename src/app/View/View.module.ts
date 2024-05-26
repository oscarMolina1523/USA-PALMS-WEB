import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ResizableModule } from 'angular-resizable-element';
import { SharedModule } from './Shared/shared.module';
import { AboutComponent } from './about/about.component';
import { BlogMenorComponent } from './home/blog-Menor/blog-menor/blog-menor.component';
import { ClientReviewComponent } from './home/client-Review/client-review/client-review.component';
import { DragAndDropComponent } from './home/drag-and-drop/drag-and-drop.component';
import { DragzoneComponent } from './home/drag-and-drop/dragzone/dragzone.component';
import { GaleriaMenorComponent } from './home/galeria-Menor/galeria-menor/galeria-menor.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { PalmExpertComponent } from './home/palm-expert/palm-expert.component';
import { PlantPalmComponentComponent } from './home/plant-palm-component/plant-palm-component.component';
import { TropicalInstantComponent } from './home/tropical-instant/tropical-instant.component';
import { JustArrivedComponent } from './just-Arrived/just-arrived/just-arrived.component';

import { GalleryComponent } from './Gallery/gallery.components';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    DragAndDropComponent,
    DragzoneComponent,
    HeaderComponent,
    PalmExpertComponent,
    PlantPalmComponentComponent,
    TropicalInstantComponent,
    GaleriaMenorComponent,
    BlogMenorComponent,
    JustArrivedComponent,
    GalleryComponent,
  ],
  imports: [CommonModule, SharedModule, CdkDrag, ResizableModule, CdkDragHandle, ClientReviewComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewModule { }
