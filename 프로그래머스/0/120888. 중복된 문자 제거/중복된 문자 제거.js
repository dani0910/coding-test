function solution(my_string){
            const arr = my_string.split('')
            let newArr = [];
            arr.forEach((v)=>{
                if(!newArr.includes(v)){
                    newArr.push(v)
                }
            })
            return newArr.join('')
        }