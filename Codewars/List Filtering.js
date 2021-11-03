function filter_list(list) {
  
    for(var i=0;i<list.length;i++){
      if(isNaN(list[i])){
        list.splice(i, 1);
        i--
        
       }
      else if(!Number.isSafeInteger(list[i])){
        console.log(list);
        list.splice(i, 1);
        i--
      }
      }
    return list;
  }