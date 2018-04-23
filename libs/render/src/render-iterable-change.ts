// 监听数组变化
import { IterableDiffer, NgIterable, IterableChanges } from '@angular/core';
import { Subject } from 'rxjs';
import {
  DefaultIterableDifferFactory,
  DefaultIterableDiffer
} from './iterable-differ';
export class RenderIterableChange<T> {
  private _differ: DefaultIterableDiffer<T>;
  private data: NgIterable<T>;
  private change$: Subject<IterableChanges<T>> = new Subject();
  private _differs: DefaultIterableDifferFactory = new DefaultIterableDifferFactory();
  constructor(
    // 数据
    data: { [key: number]: any },
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

  onChanges(): Subject<IterableChanges<T>> {
    return this.change$;
  }
}
