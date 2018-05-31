import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-position-dialog',
  templateUrl: './position-dialog.component.html',
  styleUrls: ['./position-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionDialogComponent {
  @Input() form: FormGroup;
  @Input() valid: boolean;
  @Output() save: EventEmitter<void> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  public savePosition() { this.save.emit(); }
  public cancelPosition() { this.cancel.emit(); }
}
