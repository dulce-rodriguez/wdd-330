//window.alert("hello");
alert("Follow prompts, and see console to view this weeks notes");

//prompt
/*const input = prompt();
alert(input);*/

//confirm 
if(confirm("Do you want to quit?")) {
    console.log("Ok");
}
else {
    console.log("No");
}


//Width and Height
let x;

x = window.outerHeight;
x = window.outerWidth;

//Inner width
x = window.innerHeight;
x = window.innerWidth;

//location Object
x = window.location;

x = window.location.hostname;
x = window.location.port;
x = window.location.href;

//Redirect
//window.location.href = "https://apple.com";

//Reload
//window.location.reload();

x = window.navigator;

console.log(x);