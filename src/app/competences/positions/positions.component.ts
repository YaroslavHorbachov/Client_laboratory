import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { PositionsDialogComponent } from '../../entryComponents/positions/positions-dialog/positions-dialog.component';
import { PositionsService } from '../../services/positions.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  head = 'Positions';

  constructor(
    private _positions: PositionsService,
    private _positionsDialog: MatDialog) { }

  ngOnInit() {
  }

  public addPositions() {
    this._positionsDialog.open(PositionsDialogComponent, {
      minWidth: 700,
      minHeight: 500,
      data: {
        title: 'Add New Position',
        subtitle: 'Input unique name'
      }
    });
  }
  public editPositions() {
    this._positionsDialog.open(PositionsDialogComponent, {
      minWidth: 700,
      minHeight: 500,
      data: {
        title: 'Edit Position',
        subtitle: 'Type new unique name'
      }
    });
  }
}
