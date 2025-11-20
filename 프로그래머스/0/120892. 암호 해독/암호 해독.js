function solution(cipher,code){
      let newCipher = '';
      for(let i=0; i<cipher.length; i++){
        if((i+1)%code === 0){
          newCipher += cipher[i]
        }
      }
      return newCipher
    }