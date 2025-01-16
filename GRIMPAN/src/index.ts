import g1 from './grimpan.js';  //싱글턴
import g2 from './grimpan.js';

console.log(g1 === g2);

import Grimpan from './grimpan.js';

console.log(Grimpan.getInstance() === Grimpan.getInstance());

//main과 Grimpan이 강결합 됨
// function main(){
//     Grimpan.getInstance().initialize();
// }
// main();

// //약결합 됨
// function main(instance: any){
//     instance().initialize();
// }
// main(Grimpan.getInstance());
// main(Editor.getInstance());
// main(MsPaint.getInstance());