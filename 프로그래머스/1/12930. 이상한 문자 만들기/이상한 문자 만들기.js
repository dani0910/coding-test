function solution(s) {
    let arr = s.split(" ");
    console.log(arr);
    for(let i=0; i<arr.length; i++){
        let word = arr[i].split("")
        //문자열 자체로는 인덱스로 수정이 불가하기 때문에 임시 배열로 바꿔준다
        console.log(word);
        for(let j=0; j<word.length; j++){
            console.log(word[j])
            word[j] = (j%2===0) ? word[j].toUpperCase() : word[j].toLowerCase();
            console.log(word[j])
        }
        arr[i] = word.join("")
        console.log(arr[i])
    }
    console.log(arr)
    console.log(arr.join(" "))
    return arr.join(" ")
}