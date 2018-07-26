import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

export interface Fragmentation {
    id: String;
    name: String;
    listOfFilters: Array<String>;
    childs: Array<any>
}


@Injectable()
export class FragmentationData {
    public fragmentations: Array<Fragmentation>;
    constructor( private _http: Http) {

    }

    public get() {
        return new Promise(resolve => {
            if (this.fragmentations) {
                resolve(this.fragmentations);
            } 
            else {
                this.load().subscribe((response: any) => {
                    this.fragmentations = response.data;
                    resolve(this.fragmentations);
                });
            }
        })
    }

    public load(): Observable<Fragmentation[]> {
        return  this._http.get('data.json').map(res => res.json());
    }

    public getFragmentationById(id) {
        let item
        for (let group of this.fragmentations) {
            for (let child of group.childs) {
                if (child.id === id) {
                    item = child;                
                }
            }
        }
        return item
    }

}
