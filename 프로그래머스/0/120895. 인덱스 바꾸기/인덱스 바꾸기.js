function solution(my_string, num1, num2) {
    const num1Str = my_string[num1]
    let myArr = my_string.split('')
    myArr[num1] = myArr[num2]
    myArr[num2] = num1Str
    return myArr.join('')
}