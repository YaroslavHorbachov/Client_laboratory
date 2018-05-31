import { Component, OnInit, Input, OnChanges, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-control',
  templateUrl: './error-control.component.html',
  styleUrls: ['./error-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorControlComponent implements OnChanges {
  @Input() control: FormControl;
  errorMessage = '';
  listErrors: Object = {
    'required': 'This field is required',
    'minlength': `This input must be `,
    'maxlength': `This input must be `
  };
  ngOnChanges(changes) {
    const { control: { currentValue } } = changes;
    console.log(currentValue);
    return currentValue ? this.defineError(currentValue) : (this.errorMessage = '');
  }
  private defineError(err) {
    const [key] = Object.keys(err);
    switch (key) {
      case 'required':
        this.renderError(`${this.listErrors[key]}`);
        break;
      case 'minlength':
      case 'maxlength':
        const { requiredLength, actualLength } = err[key];
        this.renderError(`${this.listErrors[key]} ${actualLength} / ${requiredLength}`);
        break;
      default:
        this.renderError('');
        break;
    }
  }
  private renderError(value) {
    this.errorMessage = value;
  }
}
