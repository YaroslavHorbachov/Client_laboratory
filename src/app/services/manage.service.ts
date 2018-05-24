import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ManageService {
  _mock: any = {
    positions: [{ value: 'QA' }, { value: 'Backend' }, { value: 'Frontend' }, { value: 'PM' }]
  };
  _positions$: BehaviorSubject<Array<Object>> = new BehaviorSubject(this._mock.positions);
  constructor() { }
  public setPositions(value) {
    this._positions$.next(value);
  }
  public getPositions() {
    return this._positions$;
  }


}
