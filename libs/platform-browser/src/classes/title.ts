import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getDOM } from '../utils/dom';
@Injectable()
export class Title {
  constructor(@Inject(DOCUMENT) private _doc: any) {}
  getTitle(): string {
    return getDOM().getTitle(this._doc);
  }
  setTitle(newTitle: string) {
    getDOM().setTitle(this._doc, newTitle);
  }
}
