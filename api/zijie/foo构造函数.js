// 写一个构造函数Foo，该函数每个实例为一个对象，形如{id:N},其中N表示第N次调用得到的。
// 要求：
// 1、不能使用全局变量
// 2、直接调用Foo()也会返回实例化的对象
// 3、实例化的对象必须是Foo的实例
function Foo() {
  if (!(this instanceof Foo)) {
    return new Foo();
  }

  // 属性值 id 表示第 N 次调用得到的数字 N
  if (typeof Foo.counter === 'undefined') {
    Foo.counter = 0;
  }
  Foo.counter++;
  this.id = Foo.counter;
}

var foo1 = new Foo();
console.log(foo1);  // 输出: Foo { id: 1 }

var foo2 = new Foo();
console.log(foo2);  // 输出: Foo { id: 2 }

var foo3 = Foo();
console.log(foo3);  // 输出: Foo { id: 3 }
