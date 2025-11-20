import java.util.*; //ArrayList 사용하기 위해

class Solution {
    public int[] solution(int n) {
        List<Integer> answer = new ArrayList<>();
        answer.add(n);
        
        while(n!=1){
            n = (n % 2 == 0) ? n / 2 : 3*n + 1;
            answer.add(n);
        }
        
        //List<Integer> -> int[] 변환
        return answer.stream().mapToInt(i->i).toArray();
    }
}