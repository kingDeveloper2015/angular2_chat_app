import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2'
@Injectable()
export class HelperService {

  constructor( @Inject(FirebaseApp) private fb: any) { }

  getImageUrlObservable(url: string): Observable<string> {
    let promise = this.fb.storage().ref().child(url).getDownloadURL();
    return Observable.fromPromise(<Promise<string>>promise).map((str) => {
      return str;
    });
  }
}