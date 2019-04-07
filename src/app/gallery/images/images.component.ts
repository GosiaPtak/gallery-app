import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit, OnDestroy {
fullImage: string;
  constructor(private imagesService: GalleryService) {  }

  ngOnInit() {
    this.fullImage = this.imagesService.displayedImage;
  }
ngOnDestroy(): void {}
}
