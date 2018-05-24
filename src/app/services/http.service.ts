import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    HTTP_OPTIONS = {
        'Content-Type': 'application/json',
        'withCredentials': true
    };
}
