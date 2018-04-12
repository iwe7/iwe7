import { BehaviorSubject } from 'rxjs';

export const data = {
  'iwe7-welcome-index': {
    props: {
      view: 'iwe7-welcome-index',
      text: 'hello iwe7',
      desc: '双击探索'
    },
    title: '首页',
    key: 'iwe7-welcome-index'
  },
  'nz-calendar': {
    props: {
      view: 'nz-calendar',
      nzMode: 'month',
      nzFullscreen: true,
      nzCard: false
    },
    title: '日历',
    key: 'nz-calendar'
  },
  'nz-affix': {
    props: {
      view: 'nz-affix',
      nzOffsetBottom: 10,
      nzOffsetTop: 20,
      content: {
        view: 'nz-button',
        text: 'nz-affix'
      }
    },
    title: '固钉',
    key: 'nz-affix'
  }
};
