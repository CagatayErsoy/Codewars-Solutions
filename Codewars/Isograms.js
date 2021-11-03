var isIsogram=(str)=>{
    str=str.toLowerCase();
    var arr=str.split("");
    for(var i=0; i<arr.length-1 ;i++){
     for (var j=1 ;j<arr.length;j++){
      if(arr[i]==arr[j+i]){
        return false;
        }
      }
    }
    return true;
  }