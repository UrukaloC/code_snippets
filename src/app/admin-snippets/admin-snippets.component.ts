import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../services/test-data.service';
import { Observable } from 'rxjs';
import { DataTest } from '../models/snippet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-snippets',
  templateUrl: './admin-snippets.component.html',
  styleUrls: ['./admin-snippets.component.css']
})
export class AdminSnippetsComponent implements OnInit {
  dataList: DataTest[];
  $key: string;
  dataForm: boolean;
  public searchString: string;
  constructor(private dataService: TestDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dataService.getData().snapshotChanges().subscribe(item => {
      this.dataList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.dataList.push(y as DataTest);
      });
    });
  }
  onView(view: DataTest) {
    this.dataService.selectedData = Object.assign({}, view);
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
