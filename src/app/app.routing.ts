import { Router, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";
import {UsersComponent} from "./users/users.component";

export const routing = RouterModule.forRoot([
    { path: '' ,        component: HomeComponent},
    { path: 'users' ,   component: UsersComponent},
    { path: 'posts' ,   component: PostsComponent},
    { path: '**' ,      component: HomeComponent}
])