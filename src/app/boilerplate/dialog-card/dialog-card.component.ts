import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css'],

})
export class DialogCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
}
