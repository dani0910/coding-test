function solution(s) {
    let len = s.length;
    let mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        // 짝수 
        return s[mid - 1] + s[mid];
    } else {
        // 홀수        
        return s[mid];
    }
}
