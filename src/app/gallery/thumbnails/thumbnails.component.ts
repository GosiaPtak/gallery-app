import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit, OnDestroy {
thumbnails: string[];
  constructor(private thumbsService: GalleryService) {}

  ngOnInit() {
    this.thumbsService.getUrls();
    this.thumbnails = this.thumbsService.thumbsUrls;
    
  }
  onSetDislayedImage(id: number) {
    this.thumbsService.onDislayImage(id);
  }
  ngOnDestroy() {}
}

