function solution(n) {
    // let arr = [];
    let sum = 0;
    
    for(let i=1; i<=(Math.sqrt(n)); i++){
        if(n%i==0){
            // arr.push(i);
            sum += i;
            if(i !== n/i){
                // arr.push(n/i);
                sum += n/i;
            }
        }
    }
    // const sum = arr.reduce((acc,cur)=> acc + cur, 0);
    // console.log(sum);
    return sum;
}