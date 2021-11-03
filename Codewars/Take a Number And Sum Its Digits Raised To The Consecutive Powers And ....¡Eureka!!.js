function sumDigPow(a, b) {
    let arr=[],temp=[],temp2=[];
  
    function powing(element,index){
      return Math.pow(element,(index+1))
    }
    for(let i=a;i<=b;i++){
      if(/^\d{1}$/g.test(i)){ 
        arr.push(i)
      }
      else if(/^\d{2,}/.test(i)){
        temp=i.toString().split("")
        temp2=temp.reduce((acc,curr,index)=> acc+powing(curr,index),0)
        if(i===temp2){
           arr.push(i)
           }
      }
    }
    return arr;
  }