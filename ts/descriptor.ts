/*
 * @Author: Dylight
 * @Date: 2021-08-17 17:32:13
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-01 18:16:23
 * @FilePath: /front-end-repo/ts/descriptor.ts
 * @Description:
 */

function logFactory(prefix: string) {
  return function log(
    _target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
      console.log(`method ${propertyKey} called`);
      return originalMethod.apply(this, arguments);
    };
  };
}
class Test {
  @logFactory("[debug]")
  static sayHello() {
    console.log("hello");
  }
  @logFactory("[info]")
  static sum() {
    return 1 + 1;
  }
}
Test.sayHello();
export {};
