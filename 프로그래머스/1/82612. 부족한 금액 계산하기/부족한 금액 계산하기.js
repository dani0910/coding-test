function solution(price,money,count){
            let acc = 0;
            for(let i=1; i<=count; i++){
                console.log(price*i);
                acc += price*i;
                console.log("총합",acc);
            }
            return money < acc ? acc-money : 0
        }