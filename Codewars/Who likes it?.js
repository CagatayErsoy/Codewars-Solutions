function likes(names) {
    var tempArray="";
    var result=" likes this";
    for(var i=0; i<=names.length; i++){
      
      if(names.length===0)
        {
         return 'no one likes this'
        }
      else if (names.length===1){
      
         return names[0]+result;
      }
      else if (names.length<4){
        var lastElement=names.pop();
        return names.join(', ')+" and "+lastElement+" like this"
      }
        else 
          { return names[0]+', '+names[1]+ ' and '+(names.length-2)+" others like this"}
    }
    }
