import initSync,{greet} from "wasm_game";

initSync().then(()=>{
    greet("world");
})