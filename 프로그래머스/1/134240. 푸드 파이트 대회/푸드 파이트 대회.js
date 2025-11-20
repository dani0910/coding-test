function solution(food){
    result = [];
    for(let i=1; i<food.length; i++){
        let quot = Math.floor(food[i]/2);
        for(let j=1; j<=quot; j++){
            result.push(i);
        }
    }
    const str = result.join("")+"0"+result.reverse().join("");
    return str
}