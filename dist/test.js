"use strict";
// //1.ts특징
// interface Obj{
//     name:string;
// }
// //없는 것을 넣으면 error
// // const obj: Obj = {
// //     name: 'hello',
// //     xyz: 'abc',
// // }
// // function main(obj: Obj){}
// // main({
// //     name: 'hello',
// //     xyz: 'abc',
// // })
// //외부 변수를 활용하면 정상작동
// function main(obj: Obj){}
// const obj = {
//     name: 'hello',
//     xyz: 'abc',
// };
// main(obj);
// //2.interface 특징
// interface Obj{
//     name:string;
//     //interface 자체가 public을 의미하므로 private, protected 사용x
//     // private name: string;
//     // protected name: string;
// }
// //-> interface를 private/protected로 사용하길 원할때
// //추상클래스 abstract를 사용
// abstract class AC{
//     public hello: string;
//     constructor(hello: string){
//         this.hello = hello;
//     }
// }
// const ac: AC = {
//     hello: 'world', 
// }
// interface AC2 {
//     hello: string;
// }
// //2-1. ts특징
// //+ ts는 같은 모양이면 같은 타입으로 정의함(구조적 타이핑, structural/duck typing)
// //위 객체들의 같은 hello를 가지므로 같은 타입으로 정의됨
// //3. 간략히 사용하기
// abstract class A {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }
// abstract class A {
//     constructor(public/private/protected readonly name: string){}
// }
// //4.interface는 다중 구현 가능
// // abstract class는 다중 구현 불가능
// interface Runnable{
//     run(): void;
// }
// interface Walkable{
//     walk(): void;
// }
// class A implements Runnable, Walkable {
//     run(){};
//     walk(){};
// }
// //단일 상속 언어이므로 두개이상상 상속x
// abstract class B {}
// abstract class C {}
// class A extends B,C {}
// //5. abstract class는 js로 컴파일 후에도 남아있어 더 권장하나
// // 다중 객체가 필요할 때는 interface로
// //ts
// interface Runnable{
//     run(): void;
// }
// interface Walkable{
//     run(): void;
// }
// //js
// class Runnable{
//     run(){
//         throw new Error('하위 클래스에서 구현하세요.');
//     }
// }
// class Walkable{
//     walk(){
//         throw new Error('하위 클래스에서 구현하세요.');
//     }
// }
// class RunAndWalkable extends Walkable{
//     run(){
//         throw new Error('하위 클래스에서 구현하세요.');
//     }
// }
// class B extends RunAndWalkable{
//     override walk() {};
//     override run() {};
// }
