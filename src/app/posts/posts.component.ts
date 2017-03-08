import {Component, OnInit} from '@angular/core';
import {PostsService} from "./posts.service";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    providers: [PostsService]
})


export class PostsComponent implements OnInit {

    constructor(private _postService: PostsService) {
    }

    posts;
    isLoading = true;
    commentsLoading = false;
    masterPost;
    masterPostComments;

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(res => this.posts = res,
                null,
                () => {
                    this.isLoading = false;
                });

    }


    activatePost(post) {

        this.commentsLoading = true;

        this.masterPost = post;

        this._postService.getPostComments(post.id)
            .subscribe(res => this.masterPostComments = res,
                null,
                () => {
                    this.commentsLoading = false;
                });

    }
}