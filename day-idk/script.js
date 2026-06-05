let button = document.getElementById("mybutton");
// button.onclick = function(){
//     alert("Hi, i'm button and I got clicked!!");
// }
// console.log("Hi, i'm Pulkit, we are going to deploy a website today")
// NOW WE'LL GONNA CHANGE THE COLOR OF BUTTON TO RED WHEN IT GET'S CLICKED
// button.onclick = function(){
//     button.style.backgroundColor = "red";
// }
// Now we'll gonna make a color toggle that will change to blue and red
button.onclick = function () {
    if (button.style.backgroundColor == "blue") {
        button.style.backgroundColor = "red";
    }
    else {
        button.style.backgroundColor = "blue";
    }
}
