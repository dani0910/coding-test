def solution(num_list):
    sum , mul = 0 , 1
    for i in num_list:
        sum += i
        mul *= i
    return int(mul<sum**2)