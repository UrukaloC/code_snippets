import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../services/test-data.service';
import { DataTest } from '../models/snippet.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './test-data-list.component.html',
  styleUrls: ['./test-data-list.component.css']
})
export class DataListComponent implements OnInit {

  data: DataTest;
  dataList: DataTest [];
  publicSnippet = 'false';
  p: any;
  searchString: string;
  filterString: string;

  constructor(private _dataService: TestDataService) {}

  ngOnInit(): void {
    this._dataService.getPublicSnippets(this.publicSnippet).subscribe(list => {
      console.log(list);
      this.dataList = list;
    });
  }

  filterPrivate(data: DataTest) {
    return data.isPrivate = false;
  }
}