import { Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { TestDataService } from '../services/test-data.service';
import {Router} from '@angular/router';
import { DataTest } from '../models/snippet.model';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-test-data-details',
  templateUrl: './test-data-details.component.html',
  styleUrls: ['./test-data-details.component.css']
})
export class TestDataDetailsComponent implements OnInit{


  list: DataTest;
  highlighted: boolean = false;

  constructor(private dataService: TestDataService, private router: Router, private _location: Location) { }


  ngOnInit() {
  }

  backClicked() {
    this._location.back();
   }
}


