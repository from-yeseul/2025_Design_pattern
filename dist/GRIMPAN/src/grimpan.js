class Grimpan {
    static instance; //하단 static과 통일
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas 엘리먼트 입력');
        }
    }
    initialize() { }
    initializeMenu() { }
    //1. 다르게 그림판 생성
    //2. 유일하다는 것을 보장
    //-> 단일책임 원칙 위반함
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.querySelector('canvas'));
        }
        return this.instance;
    }
}
export default Grimpan;
//OCP: 개방폐쇄 원칙
//위반
function main(type) {
    if (type === 'a') {
        doA();
    }
    else if (type === 'b') {
        doB();
    }
    else if (type === 'c') {
        doC();
    }
    else if (type === 'd') {
        doD();
    }
    else {
    }
}
function main(type) {
    type.do();
}
const a = { do() { } };
const b = { do() { } };
const c = { do() { } };
//LSP: 리스코프치환 원칙
class Animal {
    isAnimal() {
        return true;
    }
}
class Bird extends Animal {
    fly() {
        return '파닥파닥';
    }
    isBird() {
        return true;
    }
}
class Penguin extends Bird {
    fly() {
        throw new Error('못날아');
        //type:never return
        //부모의 타입을 자식이 다르게 정의하면 위반됨
    }
}
console.log(new Animal().isAnimal()); //true
console.log(new Penguin().fly().at(1)); //error
console.log(new Penguin().isAnimal()); //false
class Bird extends Animal {
    fly() {
        return '파닥파닥';
    }
    quack() {
        return '짹짹';
    }
    isBird() {
        return true;
    }
}
class Penguin extends Bird {
    fly() {
        throw new Error('못날아');
    }
}
class Grimpan {
    static instance;
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas엘리먼트 입력');
        }
    }
}
function main(grimpan) {
    grimpan.initialize();
}
main(Grimpan.getInstance());
main(IEGrimpan.getInstance());
main(ChromeGrimpan.getInstance());
class Obj {
}
class A {
    constructor(obj) { }
    setObj(obj) { }
}
new A(new Obj());
new A().setObj(new Obj());
