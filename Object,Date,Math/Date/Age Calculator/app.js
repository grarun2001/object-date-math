let age=()=>{

let date= new Date(document.getElementById('date').value);
let currentdate = new Date();

let year = currentdate.getFullYear()-date.getFullYear()
let month =currentdate.getMonth()-date.getMonth()
let day=currentdate.getDate()-date.getDate();


if(month<0||(month===0&&date<0)){
    year--;
    month+=12;
}
if(date<0){
    month--
    let newdate=new Date(currentdate.getFullYear(),currentdate.getMonth());
    newday=newdate.getDate()-date.getDate()+currentdate.getDate();
}

document.getElementById('year').innerText=year
document.getElementById('month').innerText=month
document.getElementById('day').innerText=day
}

document.getElementById('agebtn').addEventListener('click',age)