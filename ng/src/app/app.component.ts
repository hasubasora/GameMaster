import { Component } from '@angular/core';//在核心模块引入了Component装饰器
// 元数据
//定义了一个组件 组件元数据装饰器
// 所有组件都必须@Component注解 创建组件里面就是元数据
@Component({
  selector: 'app-root', // 通过app-root 标签调用
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 组件
// AppComponent其实是 typescript类 告诉ng 是个组件 需要把元数据附加到类上 
export class AppComponent {
  title = 'app'; // {{title}} 调用
 
}

// 命令行創建組件
// ng g component 組件名字
