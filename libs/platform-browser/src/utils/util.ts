import { symbolNames, blackListedMap, stopSymbol } from '../token';

export const isBlackListedEvent = function(eventName: string) {
  if (!blackListedMap) {
    return false;
  }
  return blackListedMap.hasOwnProperty(eventName);
};

export const globalListener = function(event: Event) {
  const symbolName = symbolNames[event.type];
  if (!symbolName) {
    return;
  }
  const taskDatas: TaskData[] = this[symbolName];
  if (!taskDatas) {
    return;
  }
  const args: any = [event];
  if (taskDatas.length === 1) {
    const taskData: any = taskDatas[0];
    if (taskData.zone !== Zone.current) {
      return taskData.zone.run(taskData.handler, this, args);
    } else {
      return taskData.handler.apply(this, args);
    }
  } else {
    const copiedTasks = taskDatas.slice();
    for (let i = 0; i < copiedTasks.length; i++) {
      if ((event as any)[stopSymbol] === true) {
        break;
      }
      const taskData: any = copiedTasks[i];
      if (taskData.zone !== Zone.current) {
        taskData.zone.run(taskData.handler, this, args);
      } else {
        taskData.handler.apply(this, args);
      }
    }
  }
};
