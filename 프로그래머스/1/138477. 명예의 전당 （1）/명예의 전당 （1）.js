function solution(k, score) {
    let result = [];
    let hall = [];
    
    score.forEach(v => {
        hall.push(v);
        
        if(hall.length > k){
            const minValue = Math.min(...hall);
            const minIndex = hall.indexOf(minValue);
            hall.splice(minIndex, 1);
        }
        
        result.push(Math.min(...hall));
    })
    return result;
}