import { Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { TestDataService } from '../services/test-data.service';
import {Router} from '@angular/router';
import { DataTest } from '../models/snippet.model';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-test-data-edit',
  templateUrl: './test-data-edit.component.html',
  styleUrls: ['./test-data-edit.component.css']
})
export class TestDataEditComponent implements OnInit{


  list: DataTest;
  highlighted: boolean = false;
  data: DataTest = new DataTest();

  constructor(private dataService: TestDataService, private router: Router, private _location: Location) { }


  ngOnInit() {
  }

  backClicked() {
    this._location.back();
   }

   isDataPrivate(p: boolean): void {
    this.data.isPrivate = p;

    console.log(this.data.isPrivate);
  }
   
  onSubmit(dataForm: NgForm) {
    console.log(dataForm.value);
      this.dataService.updateData(dataForm.value);
  
  this.router.navigate(['/test-data-list']);
}
}
