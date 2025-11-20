function solution(array){
    let freq = {};

    array.forEach(v=> freq[v] = (freq[v] || 0) +1);

    let maxKey = Number(Object.keys(freq).reduce((a,b) => {
        if(freq[a] > freq[b]) return a
        else if(freq[a] == freq[b]) return -1
        else return b
    }));
    console.log("최빈값",maxKey);

    return maxKey;

}