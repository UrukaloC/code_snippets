import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { DataTest } from '../models/snippet.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';




@Injectable()
export class TestDataService {
  userId: string;
  author: string;
  dataList: AngularFireList<any>;
  selectedData: DataTest = new DataTest();
  constructor(private firebase: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {this.userId = user.uid;
                this.author = user.displayName;
              console.log(this.author); }
    });
  }

  getData() {
    this.dataList = this.firebase.list('data');
    this.firebase.list('data', ref => ref.orderByChild('data/id/date'));
    return this.dataList;


      // this.firebase.list('data', ref => ref.orderByChild('date'))
  //   firebase.database().ref()
  // .orderByChild('date')
  // .on('value', function(snapshot) {
  // this.data = [];

  // snapshot.forEach(function(child) {
  //   this.data.push(child.val());
  // }.bind(this))

  // }

  }

  insertData(data: DataTest) {
    this.dataList.push({
      title: data.title,
      notes: data.notes,
      programmL: data.programmL,
      date: new Date().toString(),
      code: data.code,
      isPrivate: data.isPrivate,
      userId: this.userId,
      author: this.author
    });
  }

  updateData(data: DataTest) {
    this.dataList.update(data.$key,
      {
      title: data.title,
      notes: data.notes,
      programmL: data.programmL,
      date: new Date(),
      code: data.code,
      isPrivate: data.isPrivate
      });
  }


  deleteData($key: string) {
    this.dataList.remove($key);
  }

}
