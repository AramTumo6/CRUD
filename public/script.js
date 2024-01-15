
let button = document.getElementById("sub").addEventListener("click", myFunction);

function myFunction(params) {
    let nameInput = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;

    fetch("/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body:JSON.stringify({name : nameInput, age : ageInput} )
    });
}



