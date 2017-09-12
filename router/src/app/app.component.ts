import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // 类的构造函数 在类里面 在实例化的时候只执行一次
  // 构造函数里面注入
  constructor(private router: Router) {

  }

  toProductDetails() {
    // 动态导航
    this.router.navigate(['/product',3]);
  }
}
