function solution(n) {
    let result = 0;
   for(i=0; i<=n; i++){
       if(i%2==0){
        result+=i;
       }
   } 
    return result;
}
