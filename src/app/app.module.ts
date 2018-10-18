import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TestDataComponent } from './test-data/test-data.component';
import { TestDataService } from './services/test-data.service';
import { DataListComponent } from './test-data-list/test-data-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRouterModule } from './app.router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { EqualStringsDirective } from './directives/equal-strings.directive';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { TestDataDetailsComponent } from './test-data-details/test-data-details.component';
import { SharedModule } from './shared.module';
import { AdminSnippetsComponent } from './admin-snippets/admin-snippets.component';
import { CustomEmailValidatorDirective } from './directives/custom-email-validator.directive';
import { MySnippetsComponent } from './my-snippets/my-snippets.component';
import { FilterPipeSearch } from './test-data-list/filter.pipe-search';
import { FilterPipeDate } from './test-data-list/filter.pipe-date';
import { TestDataEditComponent } from './test-data-edit/test-data-edit.component';
import { FilterPipeLanguage } from './test-data-list/filter-pipe-language';
import { FooterComponent } from './footer/footer.component';
import { FilterPipeDataList } from './my-snippets/filter.pipe-my-snippets';
// import { HighlightModule } from 'ngx-highlightjs';
// import { CommonModule } from '../../node_modules/@angular/common';
// import { PrismModule } from '../../node_modules/@ngx-prism/core'




@NgModule({
  declarations: [
    AppComponent,
    TestDataComponent,
    DataListComponent,
    FilterPipeDate,
    FilterPipeSearch,
    FilterPipeDataList,
    FilterPipeLanguage,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    EqualStringsDirective,
    AdminPanelComponent,
    TestDataDetailsComponent,
    AdminSnippetsComponent,
    CustomEmailValidatorDirective,
    MySnippetsComponent,
    TestDataEditComponent,
    TestDataEditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRouterModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    // HighlightModule.forRoot({ theme: 'agate'}),
    // CommonModule,
    // PrismModule


  ],
  providers: [TestDataService, UserService],
  bootstrap: [AppComponent],
  exports: [ TestDataDetailsComponent ]
})
export class AppModule { }
