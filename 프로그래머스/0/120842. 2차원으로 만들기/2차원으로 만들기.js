        function solution(num_list, n){
            let dimension2 = [];
            const newList = [...num_list];
            for(let i=0; i<num_list.length/n; i++){
                dimension2.push(new Array);
                for(let j=0; j<n; j++){
                    dimension2[i].push(newList.shift())
                }
            }
            return dimension2
        }