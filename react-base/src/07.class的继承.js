class Animal {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
  eat() {
    console.log("吃肉");
  }
}

// 语法：  class 子类 extends 父类 {}
class Dog extends Animal {
  // 爱好是dog独有的，就不适合挂载到父类上；
  constructor(age, gender, love) {
    // 问题1：为什么一定要在 constructor 中调用 super
    //   答案： 因为，如果一个子类，通过 extends 关键字继承了父类，那么，在子类的 constructor 构造函数中，必须 优先调用一下 super()
    // 问题2：super 是个什么东西？
    //   答案： super 是一个函数，而且，它是 父类的 构造器；子类中的 super,其实就是父类中，constructor 构造器的一个引用；
    // 问题3：为什么 调用了 super() 之后，a1 实例的 name 和 age 都变成 undefined 了？
    //因为super 是父类 constructor 构造器的一个引用，没有对应的参数传过去，所以就是 undefined了。
    super(age, gender);
    // 语法规范：在子类中， this 只能放到 super 之后使用
    this.love = love;
  }
  run() {
    console.log("run一下");
  }
}

let dog = new Dog(12, "man", "玩个球");
console.log(dog);
dog.eat();
dog.run();

class Cat extends Animal {}

let cat = new Cat(20, "woman");
console.log(cat);
cat.eat();
