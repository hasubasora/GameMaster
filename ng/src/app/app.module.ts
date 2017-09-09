import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarpuselComponent } from './carpusel/carpusel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
// 声明模块
@NgModule({
  declarations: [ //模块中声明有什么东西 只能声明 组件 指令 管道
    AppComponent, NavbarComponent, FooterComponent, SearchComponent, CarpuselComponent, ProductComponent, StarsComponent
  ],
  imports: [//声明正常运作需要什么 组件指令服务
    BrowserModule,//浏览器依赖
    FormsModule,//表单依赖
    HttpModule,//服务器

  ],
  providers: [],//聲明模塊中聲明了什麼服務
  bootstrap: [AppComponent]//模塊主組件
})
export class AppModule { }
