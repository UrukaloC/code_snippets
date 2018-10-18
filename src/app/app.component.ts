import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-snippet-app';

  constructor(private authService: AuthService,
              private afAuth: AngularFireAuth
  ) {
    this.authService.tryToGetLoggedInUser().subscribe(user => {
      console.log(user);
    });
    this.authService.tryToGetLoggedInUser().subscribe(firebaseUser => {
      console.log(firebaseUser);
    });
    this.afAuth.authState.subscribe(firebaseUser => console.log(firebaseUser));
  }
}
