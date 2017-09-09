import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 创建接收数值评级星星  
  // @Input()输入元数据
  // @Input()装饰器的意思是 StarsComponent 父组件把rating传过来 
  @Input()
  public rating: number = 0;
  
  // 创建星星数组
  public stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i <= 5; i++) {//2.5,循环 1>2.5=false 3>2.5=true
      this.stars.push(i > this.rating)
    }
    // this.stars = [false, false, true, true, true];
  }

}
