let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
//Logic starts here
let L=parseInt(readLine())
let N=parseInt(readLine())
function royAndPhoto(L,N){
    for(let i=0;i<N;i++){
        let [W,H]=readLine().split(" ").map(Number)
        if(W<L || H<L){
            console.log("UPLOAD ANOTHER")
        }
        else if(W>=L && H>=L){
            if((W==L && H==L)|| W==H){
                console.log("ACCEPTED");
            }
            else{
                console.log("CROP IT");
            }
        }
    
    }
}
royAndPhoto(L,N)