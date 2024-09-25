//Global scope

var globalVar = "I'm a global variable";
let globalLet = "I'm also global but scoped with let"
const globalConst = "I am a global const"


{
    var blockVar = "I am a block-scoped var";
    let blockLet = "I am a block-scoped let";
    const blockConst = "I am a block-scoped const"
}
//Global scope

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block Scope

console.log(blockVar);
//console.log(blockLet);



function show() {
    

    var functionVar  ="I am a block-scoped var";
    let functionLet = "I am a block-scoped let";
    const funcConst = "I am a block-const";

}

show()

console.log(functionVar);
console.log(functioLet);
console.log(functionConst);