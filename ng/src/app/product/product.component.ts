import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 声明一个数组存储商品数据
  private products: Array<Product>;

  constructor() { }

  //这是生命周期中的一个钩子会在被实例化后调用一次
  ngOnInit() {
    // 初始化
    this.products = [
      new Product(1,'名字',1.99,3.5,'第一个商品',['da','b']),
      new Product(2,'名字',1.99,3.5,'第一个商品',['ds','b']),
      new Product(3,'名字',1.99,3.5,'第一个商品',['d','ab']),
      new Product(4,'名字',1.99,3.5,'第一个商品',['d','sb']),
      new Product(5,'名字',1.99,5,'第一个商品',['da','b']),
      new Product(6,'名字',1.99,3.5,'第一个商品',['d','b']),
    ]
  }

}

// 封装产品信息
export class Product {
  constructor(
    public id: number,//id
    public title: string,//标题
    public price: number,//价格
    public rating: number, //经济评价
    public desc: string, //描述
    public categories: Array<string>// 类别
  ) {

  }
}