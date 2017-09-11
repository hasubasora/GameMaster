// 面向对象
// 类
class Person {
    // public 默认就有 默认的访问控制符,内外都能访问
    public name;
    // private 私有的只能里面能访问
    private sex;
    // protected 受保护的 
    protected age;
    // 类的构造函数 在类里面 在实例化的时候只执行一次
    constructor(name: string) { //外面没有声明 在这里就要public name:string
        console.info('只在实例化的时候调用一次')
    }
    eat() {
        console.info('我是吃的')
    }
    // eat编译出来是
    // Person.prototype.eat=function(){
    //     console.info('我是吃的')
    // }
}
// extend声明一种继承关系
class Elp extends Person {
    // 在构造员工这个类的时候 首先会去调用父类的constructor方法
    constructor(name: string, code: number) { //外面没有声明 在这里就要public name:string
        // 子类的构造函数必须要调用父类的构造函数
        super(name);//就是在调用父类的constructor方法
        this.code = code;
        console.info('只在实例化的时候调用一次2')
    }
    // 指定新的属性
    code: number;
    work() {
        super.eat();//父类里面的
        this.doWork();
        console.info('我是工作')
    }
    private doWork() {
        console.info('吃完饭干活')
    }
}

// 泛型 指定只能放某个类型 只能放 Person 里面类型的数据 
var words: Array<Person> = [];
// var words:Array<string>=[];
// var words:Array<number>=[];
// var words:Array<boolean>=[];
words[0] = new Person("");
words[1] = new Elp("", 1);
// words[2]= 2;//会报错

// 实例化
var p1 = new Person("构造函数直接传入这的值");
p1.name = "hah";//没有构造函数就可以这么写
p1.eat();

// 实例化Elp
var el = new Elp("我继承了Person父级的东西", 111);
el.work();


// 接口 Interface

// 声明接口 -属性
interface IPer {
    age: number;
    name: string;
}

class Per {
    // IPer作为方法传入的类型声明
    constructor(public config: IPer) {

    }
}
//实例化后 接口参数不能多不能少
var i1 = new Per({
    name: "",
    age: 18
})

// 声明接口 -方法
// 所有调用了这个接口的类必须实现这个方法
interface Animal{
    eat();
}
//实现绵阳这个类实现Animal接口，必须实现接口里面声明的方法，没实现会报错
class Sheep implements Animal{
    eat(){
        console.info('我是羊我要吃')
    };
}
//实现绵阳这个类实现Animal接口，必须实现接口里面声明的方法，没实现会报错
class Tiger implements Animal{
    eat(){
        console.info('我是老虎我要吃肉')
    };
}


// 模块
// a.ts
// 暴露一些东西export暴露出去
export var prop;
var pop;
export function name(params:string) {
    
}
function name3(params:string) {
    
}

export class C1{

}
class C2{

}

// b.ts
// 输入暴露的方法会自动 import 调用一个{}里面加入一个
// import {prop} from "./a";
// console.info(prop)

// 总结
// export 暴露出去 import 引入方法
















