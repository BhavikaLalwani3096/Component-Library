// read input
var input = document.querySelector("#input-txt");
console.log(input)

// show output
var Output = document.querySelector("#output");
console.log(Output)
//processing
var clickButton = document.querySelector("#buttonX");

clickButton.addEventListener("click", function buttonClickHandler(){
    console.log("button clicked");
    console.log(input.value);
    alert("Welcome "+input.value+"!");
    var year=prompt("Please enter the year you were born in");
    var check=4;
    if(isNaN(year)){
        alert("Year in wrong format!");
     }
     else{
       if ((year % check) == 0) {
       console.log("You were born in a leap year!");
       var result="You were born in a leap year!";
       Output.innerText=result; 
     }
     else {
        console.log("You were not born in a leap year!");
        var result1="You were not born in a leap year!";
        Output.innerText=result1; 
     }
     }
})

