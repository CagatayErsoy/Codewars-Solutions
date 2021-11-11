function persistence(num) {
  let index=0;
  let number=num;
        while(number>9){
        index++
        let digits =number.toString().split('')
        let realDigits=digits.map(Number)
        number=realDigits.reduce((acc,curr)=>acc*curr)}
  return index;
  }
