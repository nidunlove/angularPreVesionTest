# angularPreVesionTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#angular低版本练习
```
前言：之前一直用1的，现在从低版本到最新的版本再学习一遍
一开始想练习 angular2的。
```
angular2: https://v2.angular.io/docs/ts/latest/
```
之后装了
cnpm install -g @angular/cli@1.0.0
最后从package.json发现自己练习的的是angular4
````
angular4: https://v4.angular.io/docs
里面的demo是参照

当前最新的angular6。（2018.5.26）
https://www.angular.cn/tutorial
下面的写法是angular6的，官方示例。

##安装


###这是最新的，6的，
https://angular.cn/guide/quickstart
npm install -g @angular/cli
ng new angularPreVesionTest



###卸载，装低版本 @angular/cli: 1.0.0

1. https://blog.csdn.net/j15533415886/article/details/78578326
npm uninstall -g @angular/cli
cnpm install -g @angular/cli@1.0.0

ng -v
@angular/cli: 1.0.0
node: 8.10.0
os: win32 x64

ng new angularPreVesionTest
cd angularPreVesionTest
cnpm install
2. 安装很慢，可能我的电脑或者国内的原因。
启动报错
ng serve
cnpm install -g typescript@2.2.2 typings
3. ng serve还是报错
https://www.cnblogs.com/shiyinan/p/7520913.html
npm remove webpack -g
npm i webpack --save-dev
4. 还是报错
https://stackoverflow.com/questions/49022391/cannot-read-property-thiscompilation-of-undefined-in-visual-code
npm remove webpack
npm install webpack@3.11.0
5. 删除node_modules，重新cnpm，好了。
ng server
神奇
ng server -open //直接打开浏览器
http://localhost:4200/


##学习 低版本 @angular/cli: 1.0.0
https://angular.cn/tutorial/toh-pt4
1. src/app/heroes/heroes.component.ts  
	ANGULAR教程中，没说要加此 providers，不知道是不是只有angular低版本如此。
    https://blog.csdn.net/qq_15096707/article/details/53979776
    或者

    参考 hero-detail.component.ts 中 import { Optional } from '@angular/core';

2. import { Observable, of } from 'rxjs'; 失败，of报错。
3. src/app/app-routing.module.ts
   src/app/app.module.ts
   ANGULAR教程中,添加路由，--module=app 失败，估计是angular低版本的原因，手动在app.module.ts中和import中加入AppRoutingModule
4. npm install angular-in-memory-web-api --save 报错
	删除 package.json中引入的angular-in-memory-web-ap，删除 node_modules，重新install

### 此后学习 最新版angular（练习此的时候是angular6



