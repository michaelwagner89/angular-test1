import {Component, OnInit} from '@angular/core';
import {PostsService} from "./posts.service";
import {UsersService} from "../users/users.service";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    providers: [PostsService, UsersService]
})


export class PostsComponent implements OnInit {

    constructor(private _postService: PostsService, private _userService: UsersService) {
    }

    posts;
    postsLoading;
    commentsLoading = false;
    masterPost;
    masterPostComments;

    userList;

    ngOnInit() {
        this.loadUserList();
        this.loadPosts();
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

    private loadPosts(filter?) {

        this.postsLoading = true;

        this._postService.getPosts(filter)
            .subscribe(res => this.posts = res,
                null,
                () => {
                    this.postsLoading = false;
                });
    }

    reloadPosts(filter) {
        this.masterPost = null;
        this.masterPostComments = null;

        this.loadPosts(filter);
    }


    private loadUserList() {

        this._userService.getUsers()
            .subscribe(res => this.userList = res);


    }
}