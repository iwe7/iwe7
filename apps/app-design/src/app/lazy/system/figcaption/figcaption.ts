import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { IcssService } from 'iwe7-icss';
import {
  BehaviorSubject,
  fromEvent,
  merge,
  animationFrameScheduler
} from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sys-figcaption',
  templateUrl: './figcaption.html',
  styleUrls: ['./figcaption.scss']
})
export class FigcaptionComponent implements OnInit {
  movement = {
    translation: { x: 10, y: 10, z: 0 },
    rotation: { x: 1, y: 1, z: 0 },
    reverseAnimation: {
      duration: 1500,
      easing: 'easeOutElastic',
      elasticity: 600
    }
  };

  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;
  constructor(
    public icss: IcssService,
    public ele: ElementRef,
    public render: Renderer2
  ) {}

  ngOnInit() {
    let bounds = this.ele.nativeElement.getBoundingClientRect();
    fromEvent(document, 'mousemove')
      .pipe(
        // mouse
        map((e: MouseEvent) => {
          if (e.pageX || e.pageY) {
            return {
              x: e.pageX,
              y: e.pageY
            };
          } else {
            return {
              x:
                e.clientX +
                document.body.scrollLeft +
                document.documentElement.scrollLeft,
              y:
                e.clientY +
                document.body.scrollTop +
                document.documentElement.scrollTop
            };
          }
        }),
        // docScrolls
        map(mousepos => {
          let docScrolls = {
            left:
              document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop
          };
          return {
            x: mousepos.x - bounds.left - docScrolls.left,
            y: mousepos.y - bounds.top - docScrolls.top
          };
        }),
        map((relmousepos: any) => {
          let translation = this.movement.translation;
          let rotation = this.movement.rotation;
          this.setRange(translation);
          this.setRange(rotation);

          let transforms = {
            translation: {
              x:
                (translation.x[1] - translation.x[0]) /
                  bounds.width *
                  relmousepos.x +
                translation.x[0],
              y:
                (translation.y[1] - translation.y[0]) /
                  bounds.height *
                  relmousepos.y +
                translation.y[0],
              z:
                (translation.z[1] - translation.z[0]) /
                  bounds.height *
                  relmousepos.y +
                translation.z[0]
            },
            rotation: {
              x:
                (rotation.x[1] - rotation.x[0]) /
                  bounds.height *
                  relmousepos.y +
                rotation.x[0],
              y:
                (rotation.y[1] - rotation.y[0]) / bounds.width * relmousepos.x +
                rotation.y[0],
              z:
                (rotation.z[1] - rotation.z[0]) / bounds.width * relmousepos.x +
                rotation.z[0]
            }
          };
          return transforms;
        }),
        tap(res => {
          let style = `scaleX(1) scaleY(1) scaleZ(1) translateX(${
            res.translation.x
          }px) translateY(${res.translation.y}px) translateZ(${
            res.translation.z
          }px) rotateX(${res.rotation.x}deg) rotateY(${
            res.rotation.y
          }deg) rotateZ(${res.rotation.z}deg)`;
          this.render.setStyle(this.ele.nativeElement, 'transform', style);
        }),
        tap(res => {
          console.log(res);
        })
      )
      .subscribe();
  }

  setRange(obj) {
    for (let k in obj) {
      if (obj[k] == undefined) {
        obj[k] = [0, 0];
      } else if (typeof obj[k] === 'number') {
        obj[k] = [-1 * obj[k], obj[k]];
      }
    }
    return obj;
  }
}
