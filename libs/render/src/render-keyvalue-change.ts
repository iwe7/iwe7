// 监听object变化
import {
  DefaultKeyValueDifferFactory,
  DefaultKeyValueDiffer
} from './keyvalue-differ';
import { Subject } from 'rxjs';
import { KeyValueChanges, KeyValueDiffer } from '@angular/core';
export class RenderKeyValueChange<T> {
  private _differ: KeyValueDiffer<string, T>;
  private data: { [key: string]: T };
  private change$: Subject<KeyValueChanges<string, any>> = new Subject();
  private _differs: DefaultKeyValueDifferFactory<
    string,
    T
  > = new DefaultKeyValueDifferFactory();
  constructor(
    // 数据
    data: { [key: string]: T }
  ) {
    // 初始化时先执行一次changes
    this._differ = this._differs.create();
    this.doChanges(data, true);
  }
  private doCheck(): void {
    if (this._differ) {
      let changes = this._differ.diff(this.data);
      if (changes) {
        // 变化监听
        this.change$.next(changes);
      }
    }
  }
  // 首次调用一次 之后每次变化调用
  doChanges(data: any, isFirst: boolean = false): void {
    // 如果不是首次变化 先检测变化
    if (!isFirst) {
      this.doCheck();
    }
    this.data = data;
    // 如果是首次变化 后检测变化
    if (isFirst) {
      this.doCheck();
    }
  }
  // 监听变化
  onChanges(): Subject<KeyValueChanges<string, T>> {
    return this.change$;
  }
}
