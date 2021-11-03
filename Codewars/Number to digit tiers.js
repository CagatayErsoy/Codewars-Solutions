function createArrayOfTiers(num) {
    let stringNum=num.toString(), arr=[];
    for(let i=stringNum.length-1;i>-1;i--){
      
      arr.push(Math.floor(num/Math.pow(10,i)))
    }
   return arr.map(element=>element.toString());
  }