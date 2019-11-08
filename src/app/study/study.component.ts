import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  file;
  tat = true;
  imageDetails: any;
  url = '';
  name = '';
  delname = '';
  columnsToDisplay = ['Image_name', 'updated', 'Click'];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }
  onFileChanged($event) {
    this.file = $event.target.files[0];
}
  onSubmit() {
    if (this.file != null) {
      const file = this.file;
      const storage = firebase.storage();
      // Create a storage reference from our storage service
      const storageRef = storage.ref('study/' + file.name);
      storageRef.put(file);
    } else {
      alert('No file selected');
    }
  }
  downloadUrl() {
    const url1 = '';
      // console.log('/farm/'+this.name+'.jpg')
    const storage = firebase.storage();
    const starsRef = storage.ref(`/farm/${this.name}.jpg`);
    starsRef.getDownloadURL().then((url) => {
      this.url = url;
    }).catch((error) =>
        confirm(error.code_));
    starsRef.getMetadata().then((metadata) => {
        console.log(metadata);
    }).catch((error) => {
    });
  }
  viewImage(l, tat) {
    this.tat = !this.tat;
    const storage = firebase.storage();
    console.log(l);
    const starsRef = storage.ref(`${l.fullpath}`);
    starsRef.getDownloadURL().then((url) => {
      this.url = url;
    //  console.log(this.url)
    }).catch((error) =>
        confirm(error.code_));
  }
// study_material = images
// studies = image
// study-list = image-list




}
