import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import * as firebase from 'firebase';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _authService: AuthService) { }
  user: User;
  public isBlocked: Observable<boolean>;


  ngOnInit() {
    this.isBlocked = this._authService.isBlocked();
  }

}
