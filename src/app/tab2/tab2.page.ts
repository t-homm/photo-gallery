import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    comment:string;

    constructor(
      public photoService: PhotoService
  ) {}
  
  addPhotoToGallery(form:string) {    
      this.photoService.addNewToGallery(form["comment"])
  }

  async ngOnInit() {
    　//写真を削除
    　Storage.clear();
      await this.photoService.loadSaved();
  }
}
