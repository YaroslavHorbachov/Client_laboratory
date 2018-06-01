import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    private root = 'http://localhost:3020/api';
    private positions = '/positions';
    public HTTP_OPTIONS = {
        'Content-Type': 'application/json',
        'withCredentials': true
    };
    public positionsPost = {
        addUser: `${this.root}${this.positions}/addUser`,
        editUser: `${this.root}${this.positions}/editUser`,
        users: `${this.root}${this.positions}/users`,
    };
}
