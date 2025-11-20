function solution(cards1, cards2, goal) {
    let c_cards1 = [...cards1];
    let c_cards2 = [...cards2];
    
    for(i of goal){
        if(c_cards1[0] === i){
            c_cards1.shift();
            continue;
        }else if(c_cards2[0] === i){
            c_cards2.shift();
            continue;
        }else{
            return "No"
        }
    }
    return "Yes"
}