function isValidIP(ip) { 
    if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/g.test(ip)){
        let numbers=ip.split(".");
       return numbers.every(element=>{if(/^[0]\d+$/g.test(element)){
         return false
       }
         else if(element>-1&&element<256) return true;
       })
      
  }
    return false;
  }