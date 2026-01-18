function solution(left, right) {
    let result = 0;
    let count = 0;
    
    for (let i=left; i<=right; i++){
        console.log("1.left와 rigth 사이 수",i)
        //i의 약수 개수
        for (let j=1; j<=Math.sqrt(i); j++){
            console.log("2.j",j);
            if(i%j==0){
                count += 2;
                console.log("3.약수 개수",count)
                if(j==i/j){
                    count -= 1;
                    console.log("4.완전 제곱수를 고려한 약수 개수",count)
                }
                
            }
        }
        result = count%2==0 ? result + i : result - i
        count = 0;
    }
    console.log(result)
    return result
}