import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { Code404Component } from "./code404/code404.component";
import { ProductDescComponent } from "./product-desc/product-desc.component";
import { SellerInfoComponent } from "./seller-info/seller-info.component";
// 路由配置：配置的类型
const routes: Routes = [{
  path: '',//重定向
  redirectTo: '/home', pathMatch: 'full'
},
{
  path: 'home',//不能用/，空白直接跳home
  component: HomeComponent,
  children: []
},
{
  path: 'product/:id',//<a [routerLink]="['/product'，2]">CLI</a>
  component: ProductComponent,
  children: [
    {
      path: '',//不能用/，空白直接跳home
      component: ProductDescComponent,
    }, {
      path: 'seller/:id',//不能用/，空白直接跳home
      component: SellerInfoComponent,
    },
  ]
},
{
  path: '**',
  component: Code404Component,
}
];
/**
 * 在路由传递数据
 * 在查询参数中传递数据
 * /product?id&name=2 => ActivatedRoute.queryParams[name] 拿到name的值
 * 从URL传递数据
 * {path:/product/:id} => /product/1 => ActivatedRoute.Params[name] 拿到id的值
 * 在路径中传递数据
 * {path:/product,component:ProductComponent,data[{isProd:true}]} => ActivatedRoute.data[0][isProd] 拿到isProd的值
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
