function solution(d, budget){
            console.log(d,budget);
            //작은 순으로 정렬
            d.sort((a,b)=>a-b);
            console.log(d);
            let count = 0;
            while(budget >= d[count]  && count < d.length){
                console.log(`${count}번째 : ${d[count]}`)
                budget -= d[count];
                console.log(budget);
                count ++;
            }
            console.log("count",count)
            return count
        }