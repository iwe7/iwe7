export class AntdButtonProps {
  selector: string = 'antd-button';
  nzType: string = 'primary';
  nzShape: string = '';
  nzSize: string = 'default';
  nzGhost: boolean = false;
  nzLoading: boolean = false;
  text: string = 'i am a button';
  icon: string = 'anticon anticon-poweroff';
  width: number;
  height: number;
}

export class AntdButtonSettingProps extends AntdButtonProps {
  selector: string = 'antd-button-setting';
}
