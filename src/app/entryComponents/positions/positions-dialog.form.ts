import { Validators } from "@angular/forms";

export const formFields = (value = '') => ({
    name: [value, [Validators.required, Validators.minLength(5)]]
});