import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

export  interface ResponseClass {
    status: string;
    data: any;
    message: string;
}

@Injectable()
export class HttpService {

  constructor(private _http: Http) {  }

  get(url) {
      return new Promise(resolve => {
        this._http.get(url)
            .map(res => res.json())
            .subscribe((res:ResponseClass) => {
                if (res.status === 'success') {
                    resolve(res.data);
                } else {
                    this.showError(res.message);
                    resolve(null);
                }
            },
            err => {
                this.showError(err.statusText);
                resolve(null);
            });
      });
  }
  post(url, body) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this._http.post(url, body, options)
        .map(res => res.json())
        .subscribe((res) => {
            if (res.status === 'success') {
                resolve(res.data)
            }
            else {
                this.showError(res.message);
                resolve(null);
            }
        },
        err => {
            this.showError(err.statusText);
            resolve(null);
        });
    });
  }
  delete(url) {
    return new Promise(resolve => {
        this._http.delete(url)
            .map(res => res.json())
            .subscribe((res:ResponseClass) => {
                if (res.status === 'success') {
                    resolve(res.data);
                } else {
                    this.showError(res.message);
                    resolve(null);
                }
            },
            err => {
                this.showError(err.statusText);
                resolve(null);
            });
      });
  }
  put() {

  }

  showError(message) {
    console.log(message);
  }
}
