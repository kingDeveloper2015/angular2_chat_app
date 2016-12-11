import { Observable } from 'rxjs/Rx';
import  * as firebase  from 'firebase';
export class HelperUtil {

  constructor(private fb: firebase.app.App) { }

  getImageUrlObservable(url: string): Observable<string> {
    let promise = this.fb.storage().ref().child('').getDownloadURL();
    return Observable.fromPromise(<Promise<string>>promise);
  }
}