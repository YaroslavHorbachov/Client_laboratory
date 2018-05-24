import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderToolbarComponent implements OnInit {
  @Input() head: string;
  constructor() { }

  ngOnInit() {
  }

}
