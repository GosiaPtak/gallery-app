import { Component } from '@angular/core';
import { GalleryService } from './gallery/gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GalleryService]
})
export class AppComponent {
  title = 'gallery-app';
}
