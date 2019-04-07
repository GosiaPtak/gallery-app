import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ThumbnailsComponent } from './gallery/thumbnails/thumbnails.component';
import { ImagesComponent } from './gallery/images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ThumbnailsComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
