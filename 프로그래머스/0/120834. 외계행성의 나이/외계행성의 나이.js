function solution(age){
      const ageArr = ['a','b','c','d','e','f','g','h','i','j']
      console.log(Array.from({length:10}, (v,i)=> v))
      return String(age).split('').map((v,i)=> ageArr[v]).join('')
    }