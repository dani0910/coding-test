function solution(a, b, n) {
    let total = 0; 
    
    while(n>=a){
        let exchangeCount = Math.floor(n/a);
        let received = exchangeCount * b;
        total += received;
        
        n = received + (n % a);
    }
    return total
}