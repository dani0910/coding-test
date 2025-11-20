def solution(str_list,ex):
    a = [i for i in str_list if ex not in i]
    return ''.join(a)