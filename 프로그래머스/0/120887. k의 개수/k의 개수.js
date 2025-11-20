function solution(i,j,k){
            k = String(k);
            let count = 0; 

            for(let num=i; num<=j; num++){

                let str = String(num);
                count += str.split(k).length-1;
                
            }

            console.log(count);
            return count
        }