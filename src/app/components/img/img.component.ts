import { Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img ='';
  @Input('img')
  set changeImg(newImg: string) {
    //Set will be run every time when InputImg change
    this.img = newImg;
    console.log('change just img => ', this.img);
  }
  @Input() alt  = "";

  @Output() loaded = new EventEmitter<string>();
  imageDefault = "./assets/images/default.png";
  // counter : number = 0;
  // counterFn: number | undefined;
  constructor() {
    //Before Render
    // Not Async -- once time run
    console.log("constructor", "imgValue => ", this.img);
  }

  ngOnInit() {
    //Before render
    //Async - fetch, promises, etc.
    // Once Time run
    console.log("constructor", "imgValue => ", this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log("Run Counter");
    // } ,1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before - during render
    // Aware of Inputs Changes
    //"n" times run by each change to inputs
    console.log("constructor", "imgValue => ", this.img);
    console.log('changes',changes);
  }

  ngAfterViewInit(): void {
    // After Render
    // Handler children
  }

  ngOnDestroy(): void {
    // Delete. ngIf deletees component for example
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log("Log Hijo");
    this.loaded.emit(this.img);
  }
}
