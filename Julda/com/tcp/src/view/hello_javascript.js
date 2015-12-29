/**
 * Created by 초이 on 2015-12-21.
 */

function HelloFunc(func){
    this.greeting="hello";
}

HelloFunc.prototype.call=function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc=function(greeting){
    console.log(greeting);
}

var objHello=new HelloFunc();
objHello.func=userFunc;
objHello.call();

console.dir(window);