# GameMaster
weCher+SHOP

创建项目
ng new 名字
ng new router --routing

安装插件
npm install jquery --save
告诉插件能用
npm install @types/jquery --save-dev

创建组件
ng g component 组件名字

想用sass在创建项目的时候
ng new Project --style=scss

目前的angular-cli不能通过命令行使项目支持Pug，需要安装pug 和 pug-loader依赖（安装过程中可能有版本不兼容提示，按照要求重新安装就好）。

配置
@Component({
 selector: 'app-root',
 template: require('pug-loader!./app.component.pug')(),
 styleUrls: ['app.component.scss']
})
对于Pug模板中事件绑定可以使用如下方式：

//app.component.pug
div(on-click="func()")

可以避免括号带来的转义的工作。


This is my current "solution":

gulpfile.js:
`JavaScript`
let path = require('path');
let gulp = require('gulp');
let pug  = require('gulp-pug');

let pugFiles = './src/**/*.pug';

gulp.task('compilePug', () => {
  gulp.src( pugFiles )
    .pipe( pug().on('error', () => console.log('JADE ERROR')) )
    .pipe( gulp.dest('./src') );
});

gulp.task('default', ['compilePug'], () => {
  gulp.watch(pugFiles, ['compilePug']);
});
.vscode/settings.json:

{
  "files.exclude": {
      "src/app/**/*.html": {"when": "$(basename).pug"}
  }
}
`JavaScript`
This actually works but it's obviously only a temporary solution..




----------------------------------------------
typescript

安装编译
npm install -g typescript