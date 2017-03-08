import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PostsService {

    private _url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {
    }

    getPosts(filter?) {

        var url = this._url;
        if (filter && filter.userId > 0)
            url += "?userId=" + filter.userId;

        return this._http.get(url)
            .map(res => res.json());

    }


    getPostsByUserId(userId) {

        return this._http.get(this._url + '?userId=' + userId)
            .map(res => res.json());

    }

    getPostComments(postId) {

        return this._http.get(this._url + "/" + postId + "/comments")
            .map(res => res.json());

    }

}
