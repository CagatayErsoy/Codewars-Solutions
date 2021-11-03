function isValidWalk(walk) {
    var wArray=walk.filter(walk=>walk==='w')
    var nArray=walk.filter(walk=>walk==='n')
    var sArray=walk.filter(walk=>walk==='s')
    var eArray=walk.filter(walk=>walk==='e')
    if((wArray.length===eArray.length && wArray.length>0 && wArray.length+eArray.length===10)||(nArray.length===sArray.length && nArray.length>0 &&nArray.length+sArray.length===10)){
       return true}
    else if( wArray.length>0 && nArray.length>0 && sArray.length>0 &&eArray.length>0 && walk.length===10){
      if (wArray.length===eArray.length && nArray.length===sArray.length){
        return true
      }
      else {return false}
    }
        
     else {return false}  
  }