import { Component, OnInit } from '@angular/core';
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {

  constructor(private _postService: PostsService) {  }

  posts;
  loaded = true;

  ngOnInit() {
    this._postService.getPosts()
        .subscribe(res =>  this.posts = res,
                  null,
                  () => {this.loaded = false;} );

  }



}
