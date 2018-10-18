import { Component, OnInit } from '@angular/core';

import { TestDataService } from '../services/test-data.service';
import { DataTest } from '../models/snippet.model';
import { NgForm } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './test-data-list.component.html',
  styleUrls: ['./test-data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataList: DataTest[];
  data: DataTest;
  $key: string;
  dataForm: boolean;
  constructor(private dataService: TestDataService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.dataService.getData().snapshotChanges().subscribe(item => {
      this.dataList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        console.log(y);
        y['$key'] = element.key;
        if (y['isPrivate'] === 'false') {
          this.dataList.push(y as DataTest);
        }
      });
    });
  }

  onEdit(edit: DataTest) {
    // this.dataService.selectedData = {$key: null};
    this.dataService.selectedData = Object.assign({}, edit);
    this.router.navigate(['/test-data-details']);

  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.dataService.deleteData(key);
    }
  }
}
