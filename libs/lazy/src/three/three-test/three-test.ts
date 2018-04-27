import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';
import { from, merge, Subject } from 'rxjs';
import { tap, map, flatMap, switchMap, filter } from 'rxjs/operators';
import { MeepoRender } from 'meepo-render';
import * as THREE from 'three.js';
@Component({
  selector: 'three-test',
  templateUrl: './three-test.html',
  styleUrls: ['./three-test.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThreeTest implements OnInit {
  camera: any;
  scene: any;
  renderer: any;
  geometry: any;
  material: any;
  mesh: any;
  constructor(public ele: ElementRef) {}
  ngOnInit() {
    this.init();
    this.animate();
  }

  init() {
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    this.camera.position.z = 1;
    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.ele.nativeElement.appendChild(this.renderer.domElement);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  };
}
