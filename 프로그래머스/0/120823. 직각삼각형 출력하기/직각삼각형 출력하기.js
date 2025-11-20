const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let arr = [];
for(let i=1; i<=n; i++){
    for(let j=0; j<i; j++){
        arr.push("*");
    }
    if (i !== n) arr.push("\n"); 
}
console.log(arr.join(""));