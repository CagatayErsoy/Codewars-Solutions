var validatePIN= (pin)=> {
    console.log(pin);
    var arr=pin.split('');
    let reg=/\D/;
    if(pin.match(reg)){
      return false;
    }
    else if(arr.length===4){
       return true;
    }
    else if (arr.length===6){
      return true;
    }
    
      return false;
    
  }        