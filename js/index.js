const inputField = document.getElementById("squareSide")
const countButton = document.getElementById("countButton")

inputField.addEventListener('input', function(){
    const inputValue = inputField.value.trim()
    if(validateInput(inputValue)){
        countButton.disabled = false
    } else {
        countButton.disabled = true
    }
})

function validateInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}

function count(){
    var squareSide = document.getElementById('squareSide').value;
 
    var luas = squareSide*squareSide;
    var kel = 4*squareSide;

    document.getElementById("result").innerHTML = "L = s * s <br>L = " + squareSide +" * " + squareSide +"<br>Luas: " + luas + "<br><br>Keliling = 4 * s <br>L = 4 * " + squareSide +"<br>Keliling: " + kel;
}

function resetForm(){
    document.getElementById("squareSide").value = "";
    document.getElementById("result").innerHTML = "";
}