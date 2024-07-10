// this service is created to keep tracks of the todos id
// that can be provided to all components

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdCountService {
  id = 0;
  constructor() {}
  getId() {
    return this.id;
  }
  addId() {
    this.id++;
  }
}
