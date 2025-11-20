function solution(x) {
    let digits = String(x).split('');
    
    let sum = digits.reduce((acc, cur) => acc + Number(cur), 0);
    
    return x % sum === 0;
}
