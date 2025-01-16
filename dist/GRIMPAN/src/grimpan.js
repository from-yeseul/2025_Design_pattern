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
