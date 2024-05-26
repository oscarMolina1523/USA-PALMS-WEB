import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './View/home/home.component';
import { AboutComponent } from './View/about/about.component';
import { GalleryComponent } from './View/Gallery/gallery.components';

export const routes: Routes = [

    { 
        path:'Home', component: HomeComponent
    },
    {
        path: 'About', component: AboutComponent
    },
    {
        path: 'Gallery', component: GalleryComponent
    },
    {
        path:'',
        redirectTo: 'Home',
        pathMatch: 'full'
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash : true});
