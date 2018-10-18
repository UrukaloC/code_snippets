import { Component, OnInit } from '@angular/core';
import { DataTest } from '../models/snippet.model';
import { TestDataService } from '../services/test-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@Component({
  selector: 'app-my-snippets',
  templateUrl: './my-snippets.component.html',
  styleUrls: ['./my-snippets.component.css']
})
export class MySnippetsComponent implements OnInit {
  dataList: DataTest[];
  $key: string;
  dataForm: boolean;
  data: DataTest = new DataTest();
  userId: string;
  constructor(private dataService: TestDataService, private route: ActivatedRoute, private router: Router,
  private afAuth: AngularFireAuth) {
    // subscribe na firebase.User
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        console.log(this.userId);
      }
    });
  }

  ngOnInit() {
    this.dataService.getData().snapshotChanges().subscribe(item => {
      this.dataList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        console.log(y);
        y['$key'] = element.key;
        if (y['userId'] === this.userId) {
          this.dataList.push(y as DataTest);
        }
      });
    });
  }

  onView(edit: DataTest) {
    this.dataService.selectedData = Object.assign({}, edit);
    this.router.navigate(['/test-data-details']);
  }

  onEdit(edit: DataTest) {
    this.dataService.selectedData = Object.assign({}, edit);
    this.router.navigate(['/test-data-edit']);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.dataService.deleteData(key);
    }
  }

  onSubmit(dataForm: NgForm) {
    if (dataForm.value.$key == null) {
      this.dataService.insertData(dataForm.value);
    } else {
      this.dataService.updateData(dataForm.value);
  }
}
}
