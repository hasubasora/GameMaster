import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// 声明模块
@NgModule({
  declarations: [ //模块中声明有什么东西 只能声明 组件 指令 管道
    AppComponent
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
