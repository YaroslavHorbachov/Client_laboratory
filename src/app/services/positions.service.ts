import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PositionsService {

  constructor(
    private _httpConfig: HttpService,
    private _h: HttpClient
  ) { }
  savePositionRequest(form) {
    return this._h.post(this._httpConfig.positionsPost.addUser, form, this._httpConfig.HTTP_OPTIONS);
  }


}
