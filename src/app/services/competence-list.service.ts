import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CompetenceListService {
  private _mock: any = {
    positionGroups: ['Wash floor', 'Create counter', 'Deep dive', 'Talking on']
  };
  private _competence$: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(this._mock.positionGroups);
  constructor() { }
  getCompetenceGroup() {
    return this._competence$;
  }
  setCompetenceGroup(value) {
    return this._competence$.next(value);
  }
}
