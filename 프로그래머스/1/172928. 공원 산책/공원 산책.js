function solution(park, routes) {
            console.log(park);
            let [H, W] = [0, 0] //좌표 세팅

            //세로 좌표
            for (let i = 0; i < park.length; i++) {
                console.log(park[i])
                let S = park[i].indexOf("S");
                if (S != -1) {
                    [H, W] = [i, S];
                    break;
                }
                console.log("시작 위치: ", H, W);
                
            }

            console.log('routes:', routes);
            console.log("좌표 가로 길이",park[H].length)

            //방향 이동키
            const dir = {
                N : [-1, 0],
                S : [1, 0],
                W : [0, -1],
                E : [0, 1],
            }

            for (let j of routes){
                let [op, n] = j.split(" ");
                n = Number(n);
                let [dir_H, dir_W] = dir[op]; //받아온 방향을 미리 정해둔 dir 객체를 통해 구조분해할당 해줌
                let move = true; //실행 가능 여부
                let [tmp_H, tmp_W] = [H,W]; //복사

                console.log("op,n :", op, n);
                console.log("방향키",dir_H, dir_W);
                
                for (let k=1; k<=n; k++){
                    //방향키만큼 복사본 좌표에 더해줌
                    tmp_H += dir_H 
                    tmp_W += dir_W 
                    console.log(`${op}로 ${k}칸째 이동: ${tmp_H} ${tmp_W}`)

                    if(tmp_H < 0 || tmp_W < 0 || tmp_H >=park.length || tmp_W >= park[H].length){
                        console.log("경로 벗어남");
                        move = false; 
                        break;
                    }else if(park[tmp_H][tmp_W] === "X"){
                        console.log("장애물");
                        move = false;
                        break;
                    }
                }

                if(move){
                    H = tmp_H;
                    W = tmp_W;
                }
                console.log("현재 좌표: ",H,W) 
            }
            console.log("최종 좌표:",H,W)
            return [H,W]
}