function solution(absolutes, signs){
            let result = absolutes.reduce((acc,cur,i)=>{
                console.log(signs[i]);
                let signedNum = signs[i] ? cur : -cur;
                return acc + signedNum;
            },0);
            return result;
            console.log(result);
        }