import { BehaviorSubject } from 'rxjs';

export const data = {
  'iwe7-welcome-index': {
    props: new BehaviorSubject({
      view: 'iwe7-welcome-index',
      text: 'hello iwe7',
      desc: '双击探索'
    }),
    title: '首页',
    key: 'iwe7-welcome-index'
  },
  'nz-calendar': {
    props: new BehaviorSubject({
      view: 'nz-calendar',
      nzMode: 'month',
      nzFullscreen: true,
      nzCard: false
    }),
    title: '日历',
    key: 'nz-calendar'
  },
  'nz-affix': {
    props: new BehaviorSubject({
      view: 'nz-affix',
      nzOffsetBottom: 10,
      nzOffsetTop: 20,
      content: new BehaviorSubject({
        view: 'nz-button',
        text: 'nz-affix'
      }),
    }),
    title: '固钉',
    key: 'nz-affix'
  }
};
