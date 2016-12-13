//a() => 5, typeof a() => number

function a() {
  return 5; 
}

//b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10, typeof b() => number

function sum(a, b) {
  return (a + b);
}

//c(2,2) => 4, c(3,3) => 27, c(4,5) => 1024, typeof c() => number

function pow(c, n) {
  return Math.pow(c, n);
}

//d(1) => {a:1}, d(123) => {a:123}, typeof d() => object

function d(x) {
  obj = {
    a : x
  }
  return obj;
}

//e(55)() => 55, e(123)() => 123, typeof e() => function

function e(x) {
  return function () {
    return x;
  }
}

//f(1,3) => [1,1,1], f('x',5) => ['x','x','x','x','x'], f(-1,2) => [-1,-1], typeof f() => object (array)

function f(a, b) {
  var arry = [];
  for (var i; i < b; i++) {
    arry.push(a);
  }
  return arry;
}

//g() => 99, g(1) => 1, g(2) => 2, g(3) => 3, g(99) => 99, typeof g() => number

function g(a) {
  if (a) {
    return a;
  }
  else {
    return 99;
  }
}

//h(function(){return 5}) => 5, h(function(){return 123}) => 123, typeof h() => number

function h(func) {
  return func();
}

//j([1,2,3]) => 6, j([12,34,56]) => 102, typeof j() => number

function j(arry) {
  var sum = 0;
  for (var i = 0; i < arry.length; i++) {
    sum += arry[i];
  }
  return sum;
}

//k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137, typeof k() => number

function k(obj) {
  var sum = 0;
  for (var num in obj) {
    sum += obj[num];
  }
  return sum;
}

//m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2], typeof m() => object (array)

function m(arr1, arr2) {
  var arrSum = [];
  for (var i = 0; i < arr1.length; i++) {
    arrSum[i] = arr1[1] + arr[2];
  }
  return arrSum;
}

//n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2, typeof n() => number

function n(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
