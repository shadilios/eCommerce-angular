import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, value: any) {
    JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  public getData(key: string): any {
    return localStorage.getItem(key);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public resetData() {
    localStorage.clear();
  }
}
