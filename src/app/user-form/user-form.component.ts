import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BasicValidators} from "../shared/basicValidators";
import {FormComponent} from "../shared/form-component.component";
import {UsersService} from "../users/users.service";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../users/user";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
    providers: [UsersService]
})
export class UserFormComponent implements OnInit, FormComponent {


    form: FormGroup;
    user = new User();
    title: string;


    constructor(fb: FormBuilder,
                private _router: Router,
                private _uService: UsersService,
                private _route: ActivatedRoute) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.emailCheck],
            phone: [''],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })


        })
    }

    ngOnInit() {


        var userId = this._route.snapshot.params['id'];

        this.title = userId ? "Edit user" : "New User";

        if (!userId)
            return;


        this._uService.getUser(userId)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                }
            );


    }

    hasUnsavedChanges() {

        if (this.form.dirty == true)
            return true;

        return false;
    }

    save() {

        this._uService.addUser(this.form.value)
            .subscribe(x => {
                this.form.markAsPristine();
                this._router.navigate(['users']);
            });

    }

}
