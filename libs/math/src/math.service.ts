import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() {}

  /**
   * 把错误的数据转正
   * strip(0.09999999999999998)=0.1
   */
  strip(num: number, precision = 12): number {
    return +parseFloat(num.toPrecision(precision));
  }

  /**
   * Return digits length of a number
   * @param {*number} num Input number
   */
  digitLength(num: number): number {
    // Get digit length of e
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }

  /**
   * 把小数转成整数，支持科学计数法。如果是小数则放大成整数
   * @param {*number} num 输入数
   */
  float2Fixed(num: number): number {
    if (num.toString().indexOf('e') === -1) {
      return Number(num.toString().replace('.', ''));
    }
    const dLen = this.digitLength(num);
    return dLen > 0 ? num * Math.pow(10, dLen) : num;
  }

  /**
   * 检测数字是否越界，如果越界给出提示
   * @param {*number} num 输入数
   */
  checkBoundary(num: number) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn(
        `${num} is beyond boundary when transfer to integer, the results may not be accurate`
      );
    }
  }

  /**
   * 精确乘法
   */
  times(num1: number, num2: number, ...others: number[]): number {
    if (others.length > 0) {
      return this.times(this.times(num1, num2), others[0], ...others.slice(1));
    }
    const num1Changed = this.float2Fixed(num1);
    const num2Changed = this.float2Fixed(num2);
    const baseNum = this.digitLength(num1) + this.digitLength(num2);
    const leftValue = num1Changed * num2Changed;

    this.checkBoundary(leftValue);

    return leftValue / Math.pow(10, baseNum);
  }

  /**
   * 精确加法
   */
  plus(num1: number, num2: number, ...others: number[]): number {
    if (others.length > 0) {
      return this.plus(this.plus(num1, num2), others[0], ...others.slice(1));
    }
    const baseNum = Math.pow(
      10,
      Math.max(this.digitLength(num1), this.digitLength(num2))
    );
    return (this.times(num1, baseNum) + this.times(num2, baseNum)) / baseNum;
  }

  /**
   * 精确减法
   */
  minus(num1: number, num2: number, ...others: number[]): number {
    if (others.length > 0) {
      return this.minus(this.minus(num1, num2), others[0], ...others.slice(1));
    }
    const baseNum = Math.pow(
      10,
      Math.max(this.digitLength(num1), this.digitLength(num2))
    );
    return (this.times(num1, baseNum) - this.times(num2, baseNum)) / baseNum;
  }

  /**
   * 精确除法
   */
  divide(num1: number, num2: number, ...others: number[]): number {
    if (others.length > 0) {
      return this.divide(
        this.divide(num1, num2),
        others[0],
        ...others.slice(1)
      );
    }
    const num1Changed = this.float2Fixed(num1);
    const num2Changed = this.float2Fixed(num2);
    this.checkBoundary(num1Changed);
    this.checkBoundary(num2Changed);
    return this.times(
      num1Changed / num2Changed,
      Math.pow(10, this.digitLength(num2) - this.digitLength(num1))
    );
  }

  /**
   * 四舍五入
   */
  round(num: number, ratio: number): number {
    const base = Math.pow(10, ratio);
    return this.divide(Math.round(this.times(num, base)), base);
  }
}
