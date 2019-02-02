import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {ErrorComponent} from './error/error.component';
import {UseridGuard} from "./userid.guard";

const ROUTES = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailComponent, canActivate: [UseridGuard]},
  {path: 'error', component: ErrorComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
