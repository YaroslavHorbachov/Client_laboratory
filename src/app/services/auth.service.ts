import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
    public isAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
