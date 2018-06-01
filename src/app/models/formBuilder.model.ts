import { FormGroup, FormBuilder } from "@angular/forms";

export default class FormBuilderInit {
    form: FormGroup;
    constructor(formOptions, fb: FormBuilder) {
        console.log(formOptions);
        this.form = fb.group(formOptions);
    }
}