export class AppModel {
  inputs: any = {};
  outputs: any = [];
  children: any = {};
  selector: string = 'base-view';
  constructor() {}
}

export const initialApp: AppModel = {
  selector: 'base-view',
  inputs: {},
  outputs: ['change$'],
  children: {}
};
