function solution(s) {
    let new_s = s.split(" ");
    
    for (let i=0; i<new_s.length; i++){
        let word = [...new_s[i]];
        
        for(let j=0; j<word.length; j++){
            word[j] = j%2==0 ? word[j].toUpperCase() : word[j].toLowerCase();
        }
        new_s[i] = word.join("");
    }
    return new_s.join(" ");
}