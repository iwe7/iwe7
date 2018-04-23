// 结构
export interface KeyValue {
  [index: string]: string;
}
// 插座名 视图参数
export interface RenderChildren {
  [index: string]: RenderOptions[];
}
// 事件名 action
export interface RenderOutput {
  [index: string]: string;
}
export interface RenderOptions {
  selector: string;
  inputs: KeyValue;
  outputs: RenderOutput;
  outlet: string,
  // 上级id 0表示最顶级
  fid?: number;
  $loki?: number;
  title?: string;
}
