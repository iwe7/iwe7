export interface HammerInstance {
  on(eventName: string, callback?: Function): void;
  off(eventName: string, callback?: Function): void;
}
