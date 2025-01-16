class Grimpan{
    private static instance : Grimpan;  //하단 static과 통일
    constructor(canvas: HTMLElement | null){
        if(!canvas || !(canvas instanceof HTMLCanvasElement)){
            throw new Error('canvas 엘리먼트 입력')
        }
    }
    initialize(){}
    initializeMenu(){}

    //1. 다르게 그림판 생성
    //2. 유일하다는 것을 보장
    //-> 단일책임 원칙 위반함
    static getInstance(){
        if(!this.instance){
            this.instance = new Grimpan(document.querySelector('canvas'))
        }
        return this.instance;
    }
}
export default Grimpan;

//OCP: 개방폐쇄 원칙
//위반
function main(type){
    if(type === 'a'){
        doA();
    }else if(type === 'b'){
        doB();
    }else if(type === 'c'){
        doC();
    }else if(type === 'd'){
        doD();        
    }else{
        
    }
}

//해결
interface Doable {
    do(): void;
}
function main(type: Doable){
    type.do();
}
const a = {do(){}}
const b = {do(){}}
const c = {do(){}}


//LSP: 리스코프치환 원칙
class Animal{
    isAnimal(){
        return true;
    }
}
class Bird extends Animal{
    fly(){
        return '파닥파닥';
    }
    isBird(){
        return true;
    }
}
class Penguin extends Bird{
    override fly(){
        throw new Error('못날아');  
        //type:never return
        //부모의 타입을 자식이 다르게 정의하면 위반됨
    }
}

console.log(new Animal().isAnimal()); //true
console.log(new Penguin().fly().at(1)); //error
console.log(new Penguin().isAnimal()); //false


//ISP
interface IBird{    
    fly(): string;
    quack(): string;
    //필요이상의 속성을 가져서 활용되지 못함
    //분리할 필요가 있음음
}
class Bird extends Animal implements IBird{
    fly(){
        return '파닥파닥';
    }
    quack(){
        return '짹짹';
    }
    isBird(){
        return true;
    }
}
class Penguin extends Bird{
    fly(){
        throw new Error('못날아')
    }
}

//DIP
interface Grimpan{}
class Grimpan implements IGrimpan{
    private static instance: Grimpan;
    private constructor(canvas: HTMLElement | null){
        if(!canvas || !(canvas instanceof HTMLCanvasElement)){
            throw new Error('canvas엘리먼트 입력')
        }
    }
}
function main(grimpan: Grimpan){
    grimpan.initialize();
}

main(Grimpan.getInstance())
main(IEGrimpan.getInstance())
main(ChromeGrimpan.getInstance())


interface IObj{}
class Obj implements IObj{}

class A{
    constructor(obj?: IObj){}
    setObj(obj: IObj){}
}
new A(new Obj())
new A().setObj(new Obj())