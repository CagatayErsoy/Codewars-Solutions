function findEvenIndex(arr)
{
  for(let i=0;i<arr.length;i++){
    let backArray=[],forwardArray=[],backArraySum, forwardArraySum
  for(let j=0;j<i;j++){
    backArray.push(arr[j])
  }
    forwardArray=arr.slice(i+1)
  backArray.length>0?  backArraySum=backArray.reduce((acc,cum)=>acc+cum,0):backArraySum=0
  forwardArray.length>0?  forwardArraySum=forwardArray.reduce((acc,cum)=>acc+cum,0):forwardArraySum=0     
  if(backArraySum===forwardArraySum){
     return i;
   }
  }
  return -1;
}
