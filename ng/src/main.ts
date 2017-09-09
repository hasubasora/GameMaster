// import './polyfills.ts';//引入兼容庫
import { enableProdMode } from '@angular/core';//關閉開發者模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';//命令行主模塊
import { environment } from './environments/environment';//環境配置

if (environment.production) {//如果當前是生產環境 就調用
  enableProdMode();
}
// 脚本入口 通过这个启动项目 傳入啟動目錄來啟動應用
platformBrowserDynamic().bootstrapModule(AppModule);
