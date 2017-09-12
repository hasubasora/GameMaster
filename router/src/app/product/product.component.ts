import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 声明一个私有来接收
  private productId: number;
  // 类的构造函数 在类里面 在实例化的时候只执行一次
  // 构造函数里面注入
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

    /**
     * 在查询参数中传递数据
     * /product?id&name=2 => ActivatedRoute.queryParams[name] 拿到name的值
     * 跳转的时候在路由传递数据，上面的方法获取赋值
     *  <a [routerLink]="['/product']" [queryParams]='{id:1}'>CLI</a>
     * 路由显示 '/product?id=1
     *  this.productId = this.routeInfo.snapshot.queryParams['id'];//取查询参数的
     */

    //参数快照snapshot
    // this.productId = this.routeInfo.snapshot.params['id'];//从url中取 

    //参数订阅 有a标签 又有click 跳转就要用订阅
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);// 声明匿名函数获取传递进来的参数
    this.productId = this.routeInfo.snapshot.params['id'];//从url中取 
  }

}
