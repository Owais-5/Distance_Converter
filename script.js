(function(){
    
    "use strict";

    let convertType = "miles";
    let heading = document.querySelector("h1");
    let answerDiv =document.getElementById("Answer")
    let intro = document.querySelector("p");
    let form = document.getElementById("convert");

    document.addEventListener("keydown", function(event){

        let key = event.code;
       
        if(key === "KeyK"){
            convertType="kilometers";
            heading.innerHTML = "kilometers to Miles Converter";
            intro.innerHTML = "Enter in Kilometer";
        }
        else if(key === "KeyM"){
            convertType="miles";
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Enter in Miles";
        }


    })

    document.addEventListener("submit", function(event){
        
        event.preventDefault();

        let distance = parseFloat(document.getElementById("distance").value);

        if(distance){
            if(convertType == "miles"){
                let converted = (distance * 1.609344).toFixed(3);

                answer.innerHTML = `${distance} miles converted to ${converted} kilometers.`;
            }
            else{
                let converted = (distance * 0.621371192).toFixed(3);

                answer.innerHTML = `${distance} kilometers converted to ${converted} miles.`;
            }
        }
        else{
            answer.innerHTML = "<h2>Please Enter Valid Number.</h2>"
        }

    })

})();