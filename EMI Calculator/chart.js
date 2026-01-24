
let loan = document.getElementById("loan");
let rate = document.getElementById("rate");
let years = document.getElementById("years");

let loanVal = document.getElementById("loanVal");
let rateVal = document.getElementById("rateVal");
let yearsVal = document.getElementById("yearsVal");

let emiTxt = document.getElementById("emi");
let interestTxt = document.getElementById("interest");
let principalTxt = document.getElementById("principal");
let totalTxt = document.getElementById("total");

let chart;

function calc() {
    let P = parseInt(loan.value);
    let R = parseFloat(rate.value) / 12 / 100; // interest rate = rate/12/princial 100
    let N = parseInt(years.value) * 12; // number of months = years * 12

    let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);   //[P x R x (1+R)^N] / [(1+R)^N-1]
    let total = emi * N; // emi ki value multiply by N years in months
    let interest = total - P;  //  total payment - principal amount

    emiTxt.innerText = "₹" + Math.round(emi); 
    principalTxt.innerText = "₹" + P;
    interestTxt.innerText = "₹" + Math.round(interest);
    totalTxt.innerText = "₹" + Math.round(total);

    loanVal.innerText = P;
    rateVal.innerText = rate.value;
    yearsVal.innerText = years.value;
    

}




loan.addEventListener("input", calc);
rate.addEventListener("input", calc);
years.addEventListener("input", calc);






