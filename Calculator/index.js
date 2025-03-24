// function compute(){
//     p = document.getElementById("principal").value;
// }
function updateRate(){
    var rateval = document.getElementById('rate');
    document.getElementById('rate_val').innerHTML = rateval.value;
}
function compute(){
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal * years * rate /100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById('result');
    var year = new Date().getFullYear() + parseInt(years);
    var reset = document.getElementById('reset')
   
    if(parseInt(principal)<=0){
        alert("The amount must be greater than 0");
        document.getElementById("principle").focus();
    }else{
        result.innerHTML = result.innerHTML = "If you deposit $" + "<mark>"+ principal + "<mark>" + ",\<br\>at an interest rate of " + "<mark>"+ rate + "<mark>"+ "%\<br\>You will receive an amount of $"+ "<mark>" + amount + "<mark>"+ ",\<br\>in the year " + year + "\<br\>";
        reset.classList.remove('hidden')
    }
}
function reset(){
    var resetButton = document.getElementById('reset')
    resetButton.addEventListener('click',()=>{
        document.getElementById('rate').value = "";
        updateRate();
        document.getElementById('years').value = "";
        document.getElementById('principal').value = "";
        document.getElementById('result').innerHTML = "";
        resetButton.classList.add('hidden')
    })
}