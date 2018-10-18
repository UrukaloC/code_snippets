import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestDataService } from '../services/test-data.service';
import { Router } from '@angular/router';
import { DataTest } from '../models/snippet.model';


@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
  data: DataTest = new DataTest();

  constructor(private dataService: TestDataService, private router: Router) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data, null, 2));

    this.dataService.getData();
    this.resetForm();
    this.dataService.selectedData = {title: null, date: null, notes: null, code: null, programmL: null, $key: null};

  }

  isDataPrivate(p: boolean): void {
    this.data.isPrivate = p;

    console.log(this.data.isPrivate);
  }

  onSubmit(dataForm: NgForm) {
    const submitData = new DataTest();
    Object.assign(submitData, dataForm.value);
    submitData.date = new Date();

    if (dataForm.value.$key == null) {
      this.dataService.insertData(submitData);
    } else {
      this.dataService.updateData(dataForm.value);
      this.resetForm(dataForm);
    }
    this.router.navigate(['/test-data-list']);
  }

  resetForm(dataForm?: NgForm) {
    if (dataForm != null) {
      dataForm.reset();
      this.dataService.selectedData = {
        $key: null,
        title: '',
        notes: '',
        programmL: '',
        date: new Date(),
        code: ''
      };
    }
  }

}
