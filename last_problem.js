const monthlySavings =(array, value)=>{
     let sum=0;
     for(let i=0;i<array.length;i++){
      if(array[i]>=3000){
        sum+=array[i]-((array[i]*20)/100);
      }
      else sum+=array[i];
     }
     return sum-value;
}
const prompt=require("prompt-sync")({sigint:true}); 
 let userinput=prompt("input:  ");
 let s="";
 if(userinput[0]!='['){
  console.log("Invalid input");
  return 0;
 }
 let i=0;
 for( i=0;i<userinput.length ;i++){
  if(userinput[i]==']')
  {
    s=s+userinput[i];
    break;
  }
   s=s+userinput[i];
  
 }
 i++;
 let s1="";
 for( j=i;j<userinput.length ;j++){
  
   if(userinput[j]=='['){
    console.log("Invalid input")
    return 0;
   }
   if(userinput[j]!=',')
   s1=s1+userinput[j];
   
 }
 let arr=JSON.parse(s);
 let value=Number(s1)
 let ans=monthlySavings(arr,value);
 if(ans<0){
  console.log('"earn more"');
 }
 else
 console.log(ans);
//  console.log(arr,value);


