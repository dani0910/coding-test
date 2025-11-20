function solution(hp){
      const ant_5 = parseInt(hp / 5)
      const ant_3 = parseInt((hp-5*ant_5)/3)
      const ant_1 = hp - (ant_5*5 + ant_3 *3)
      return ant_5 + ant_3 + ant_1
    }