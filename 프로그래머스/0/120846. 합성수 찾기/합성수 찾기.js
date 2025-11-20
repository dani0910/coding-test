function solution(n){
            let numList = [];
            for (let i=4; i<=n; i++){
                for (let j=2; j<i; j++){
                    if(i%j==0){
                       console.log(i,j)
                       numList.push(i)
                       break;
                    }
                }
            }
            console.log(numList);
            return numList.length;
        }