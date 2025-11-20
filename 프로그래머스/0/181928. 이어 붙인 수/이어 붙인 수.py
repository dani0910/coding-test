def solution(num_list):
    a =''.join([str(i) for i in num_list if i%2 != 0])
    b =''.join([str(i) for i in num_list if i%2 == 0])
    return int(a)+int(b)