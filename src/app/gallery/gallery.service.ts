import images from '../../assets/images.json';


export class GalleryService {
  thumbsDomain: string = images.properties.photos.items.properties.image.chance.url.domain.replace('/300/150', '/200/133');
  thumbsUrls: string[] = [];
  imagesDomain: string = images.properties.photos.items.properties.image.chance.url.domain.replace('/300/150', '/600/400');
  imagesNumber: string[] = ['?image=1001', '?image=1002', '?image=1003'];
  displayedImage: string = this.imagesDomain + this.imagesNumber[0];

getUrls = () => {
  this.imagesNumber.forEach((value) =>  this.thumbsUrls.push(this.thumbsDomain + value));
  //
}
onDislayImage = (i: number) => { 
  this.displayedImage = this.imagesDomain + this.imagesNumber[i];
 // console.log(this.displayedImage);
}

}
