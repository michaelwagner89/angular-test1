import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home/home.component';

import {routing} from './app.routing';
import {UserFormComponent} from './user-form/user-form.component';
import {PreventUnsavedChangesGuard} from "./shared/prevent-unsaved-changes-guard.service";
import {SpinnerComponent} from "./shared/spinner.component";
import {SharedModule} from "./shared/shared.module";
import {AngularFireModule} from "angularfire2";
import {CommentComponent} from './comment/comment.component';
import {PaginationComponent} from './pagination/pagination.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBtTMiehNPS8FjzlRZqSLYDmdmjJ640TP4",
    authDomain: "fstone-ddaa9.firebaseapp.com",
    databaseURL: "https://fstone-ddaa9.firebaseio.com",
    storageBucket: "fstone-ddaa9.appspot.com",
    messagingSenderId: "257799165992"
};

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        UsersComponent,
        PostsComponent,
        HomeComponent,
        UserFormComponent,
        CommentComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [PreventUnsavedChangesGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
