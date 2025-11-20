function solution(sizes) {
  let maxSize = [0,0];

  sizes.forEach(([a, b]) => { //forEacth에서 item을 구조분해로 처음부터 간결하게 받아옴
    const [w, h] = a > b ? [a, b] : [b, a]; // 큰값이 앞에 오도록 정렬
    if (w > maxSize[0]) maxSize[0]= w;
    if (h > maxSize[1]) maxSize[1]= h;
  });

  return maxSize[0]* maxSize[1];
}