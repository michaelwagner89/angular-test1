import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PostsService {

    private _url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {
    }

    getPosts() {

        return this._http.get(this._url)
            .map(res => res.json());

    }

    getPostComments(postId) {

        return this._http.get(this._url + "/" + postId + "/comments")
            .map(res => res.json());

    }

}
