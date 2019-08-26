import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-firebase-blog';

  blogCollection$ = this.db.collection('blogs');
  blogs$: Observable<any> = this.blogCollection$.valueChanges();

  constructor(public db: AngularFirestore) {}

  saveBlogEntry(value: any) {
    const newId = this.db.createId();
    this.blogCollection$.doc(newId).set(value);
  }
}
