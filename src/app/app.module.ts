import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViewModule } from './View/View.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, AppRoutingModule, ViewModule,  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule {}
