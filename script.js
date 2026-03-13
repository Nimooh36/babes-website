function checkName(){

let name = document.getElementById("nameInput").value;

let allowedName = "faith ndanu";

if(name === allowedName){

document.getElementById("content").style.display = "block";
document.querySelector(".login-box").style.display = "none";

}else{

document.getElementById("error").innerText =
"Sorry, this heart only belongs to one person ❤️";

}

}

