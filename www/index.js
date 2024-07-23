async function run(){

    const importObj = {
        console:{
            log:()=>{
                console.log('hello world');
            },
            error:()=>{
                console.log('error');
            }
        }
    }
    const response = await fetch('test2.wasm')
    const buffer = await response.arrayBuffer()
    const wasm = await WebAssembly.instantiate(buffer,importObj)

    const addTwoFunc = wasm.instance.exports.addTwo
     

    const result  = addTwoFunc(2,2)
    console.log(result);
}

run()