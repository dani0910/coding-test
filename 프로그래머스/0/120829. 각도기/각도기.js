function solution(angle) {
    // if(angle>0 && angle <90){
    //     return 1
    // }else if(angle == 90){
    //     return 2
    // }else if(angle>90 && angle <180){
    //     return 3
    // }else if(angle == 180){
    //     return 4
    // }
    if(angle <=90){
        return angle == 90?2:1
    }else if(angle>90){
        return angle == 180?4:3
    }   
}