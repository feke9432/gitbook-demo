# 面试题整理

## 1. angular 的生命周期

* ngOnInit（）组件初始化调用，一般用于处理接口请求
* ngOnChange（）组件数据变化时调用
* ngOnDestroy（）组件被销毁前调用，取消订阅，释放定时器
* 其他随用随查

## 2. angular 的数据传值

* 父传子 props
* 子传父 EventEmitter
* 本地变量模式，父组件中给子组件标签添加本地变量名，
* 不相干组件的使用 共享 service 传值
* 进一步可以用 localStorage 、路由传值、等

## 3. 说说observable 和 promise 的区别

* promise 无论是否调用then，都会立即执行，ob则是调用才执行
* promise 不可取消，ob可以（unsubscribe），p只有三种状态，ob有多种
* ob 有很多内置的工具函数(map、filter、merge 等)，p没有
* ob 可以多处订阅，p只能一处执行
* p有且只有一个数据，ob可以有多个数据

## 4. map 和 switchMap 的区别

* 