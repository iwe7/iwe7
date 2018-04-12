import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { Iwe7DesignBase } from '../../iwe7-design';
import { BehaviorSubject } from 'rxjs';
import { ChacheMemoryService } from 'iwe7/cache/src/chache-memory.service';
import { DesignGroupComponent } from '../../design-group/design-group.component';
import { ZIndexService } from 'iwe7/themes/src/z-index.service';
@Component({
  selector: 'div[design-group-exta]',
  templateUrl: './design-group-exta.component.html',
  styleUrls: ['./design-group-exta.component.scss']
})
export class DesignGroupExtaComponent extends Iwe7DesignBase<any>
  implements OnInit {
  constructor(
    cd: ChangeDetectorRef,
    public cache: ChacheMemoryService<DesignGroupComponent>,
    public zindex: ZIndexService
  ) {
    super(cd);
  }
  onPropsChange(res: any) {}

  openPropsSetting(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    let designGroup: DesignGroupComponent = this.cache.get<
      DesignGroupComponent
    >(this._props._uid);
    if (designGroup.settingStyle) {
      designGroup._settingStyle.display = 'block';
      designGroup._settingStyle.zIndex = this.zindex.getIndex();
      designGroup.settingStyle.next(designGroup._settingStyle);
    } else {
      console.log('不存在', this._props._uid);
    }
  }
}
