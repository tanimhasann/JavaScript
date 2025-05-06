let a=20;//global varriable cause we can use it anywhere 
let b=30;
function add(x,y)//its function
{
    console.log(x+y);
}
add(30,40);//we are calling and pass the value from here
add(20,40);
add(a,b);
function hello()

{
    console.log("Hello loVe");
    console.log(a+b);
}
hello();