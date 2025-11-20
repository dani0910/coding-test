function solution(n) {
    console.log(n);
    const quot = Math.floor(n/2);
    console.log(quot);
    return n % 2 === 0 ? "수박".repeat(quot) : "수박".repeat(quot) + "수"
}