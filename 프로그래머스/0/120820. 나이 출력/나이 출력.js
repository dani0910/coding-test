function solution(age) {
        if(age == 1){
            answer = 2022;
        }else if (age > 1 && age <= 120){
            answer = 2022-(age-1);
        }
    return answer;
}