import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, value: any) {
    let x = JSON.stringify(value);
    localStorage.setItem(key, x);
  }



  public getData(key: string): any {
    const data = localStorage.getItem(key);
    if (data != null) {
      return JSON.parse(data);
    }
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public resetData() {
    localStorage.clear();
  }
}
