function reverseWords(str) {
    let Arr=str.split(" ") 
    let result=[]
    Arr.forEach(
      element=>{ 
        result.push(element.split("").reverse().join(""))
      })
    console.log(result.join(" "))
    return result.join(" ");
  }