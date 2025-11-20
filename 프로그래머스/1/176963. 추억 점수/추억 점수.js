function solution(name,yearning,photo){
            //name,yearning 매칭되는 객체 만들기
            let score = {};
            let result = [];
            for (let i=0; i<name.length; i++){
                score[name[i]] = yearning[i]; //온점 표기법 말고 대괄호로
            }

            //photo의 속성값과 score객체를 매칭시켜서 각 점수를 더해줌
            photo.map((v,i)=>{
                let sum = 0;
                v.map((k,i)=>{
                    if(score[k]!==undefined){
                        sum += score[k];
                        // console.log("sum1",sum);
                    }
                })
                result.push(sum);
            })
            console.log(result);
            return result;
        }