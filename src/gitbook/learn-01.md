# 面试记录

## 1. angular 的生命周期

* ngOnInit（）组件初始化调用，一般用于处理接口请求
* ngOnChange（）组件数据变化时调用
* ngOnDestroy（）组件被销毁前调用，取消订阅，释放定时器
* 其他随用随查

## 2. angular 的数据传值

* 父传子 props
* 子传父 EventEmitter
* 不相干组件的使用 自定义 service 搭桥处理
* 进一步可以用 localStorage 、路由传值、等
