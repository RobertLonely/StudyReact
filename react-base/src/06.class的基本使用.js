// 使用function创建一个动物的构造函数
function Animal(name, age) {
  this.name = name;
  this.age = age;
}
//静态属性
Animal.color = "pink";
//实例方法
Animal.prototype.eat = function(food) {
  console.log("我吃" + food);
};
//静态方法
Animal.say = function() {
  console.log("物竞天择，适者生存");
};

//实例化一个动物的对象
let dog = new Animal("大黄", 12);
console.log(dog);
console.log(Animal.color); //通过构造函数直接访问静态属性
dog.eat("骨头"); //实例对象调用实例方法
Animal.say(); //通过构造函数直接访问静态方法

console.log("---------------------------------------------------");

//使用class关键字创建一个汽车的类
class Car {
  constructor(name, color) {
    //实例属性
    this.name = name;
    this.color = color;
  }
  //静态属性
  static wheel = 4;

  //实例方法
  run() {
    console.log("今天你run了嘛");
  }
  //静态方法
  static limit() {
    console.log("限重无");
  }
}
let landRover = new Car("路虎", "white");
console.log(landRover);
console.log(Car.wheel); //通过类名直接访问静态属性
landRover.run(); //实例对象调用实例方法
Car.limit(); //通过类名直接访问静态方法
