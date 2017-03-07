import {FormControl} from "@angular/forms";
export class BasicValidators {

    static emailCheck(control: FormControl) {

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(control.value);

        return valid ? null : {emailCheck: true};

    }
}

