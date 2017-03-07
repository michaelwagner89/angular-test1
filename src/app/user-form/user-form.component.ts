import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BasicValidators} from "../shared/basicValidators";
import {FormComponent} from "../shared/form-component.component";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, FormComponent {


    form: FormGroup;


    constructor(fb: FormBuilder) {
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
    }

    hasUnsavedChanges() {

        if (this.form.dirty == true)
            return true;

        return false;
    }

}
