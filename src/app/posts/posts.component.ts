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

    posts = [];
    pagedPost = [];
    postsLoading;
    commentsLoading = false;
    masterPost;
    masterPostComments;
    pageSize = 10;


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
            .subscribe(res => {
                    this.posts = res;
                    this.pagedPost = this.getPostsInPage(1);
                },
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

    onPageChanged(page) {
        this.pagedPost = this.getPostsInPage(page);
    }

    private getPostsInPage(page) {
        var result = [];
        var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

        for (var i = startingIndex; i < endIndex; i++)
            result.push(this.posts[i]);

        return result;
    }

    private loadUserList() {

        this._userService.getUsers()
            .subscribe(res => this.userList = res);


    }
}