import {CanDeactivate} from "@angular/router";
import {FormComponent} from "./form-component.component";

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {

    canDeactivate(component: FormComponent) {
        if (component.hasUnsavedChanges())
            return confirm("You have unsaved Changes. Are you sure you want to navigation away?");

        return true;
    }


}