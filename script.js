function display(value)
{
  document.getElementById("result").value+=value;
}
function calculate(){
 let r=document.getElementById("result").value;
 let  t=eval(r);
document.getElementById("result").value=t;
}
function clearScreen(){
  document.getElementById("result").value="";
}