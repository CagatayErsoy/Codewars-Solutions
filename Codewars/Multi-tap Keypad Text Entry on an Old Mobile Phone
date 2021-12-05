function presses(phrase) {
  var totalPress=0;
  const arr=phrase.toUpperCase().split('')
    arr.forEach(y=>{
          if("ABCDEFGHIJKLMNOTUV".indexOf(y)>-1){
            totalPress+="ABCDEFGHIJKLMNOTUV".indexOf(y)%3+1
          }
          else if("PQRSWXYZ".indexOf(y)>-1){
            totalPress+="PQRSWXYZ".indexOf(y)%4+1       
            }
          else if(y===" " || y==="#" || y==='*'|| y==="1"){
            totalPress+=1;}
            else if("234568".indexOf(y)>-1){
              totalPress+=4
            }
            else if("79".indexOf(y)>-1){
              totalPress+=5
            }
            else if(y==="0"){
              totalPress+=2
            }
          
    })
  return totalPress
    
 

}
