function calculateaAge() {

    let date = document.getElementById("Birthdate").value;
    let birthdate = new Date(date);

    let currentdate = new Date();

    if (birthdate > currentdate) {
        document.getElementById('result1,result2,result3,result4,result5').innerHTML = "Invalid Date";
        return;
    }

    let totalmilliseconds = currentdate - birthdate;

    let totalseconds = Math.floor(totalmilliseconds / 1000);

    let totalminutes = Math.floor(totalseconds / 60);

    let totalhours = Math.floor(totalminutes / 60);

    let totalDay = Math.floor(totalhours / 24);

    let age = currentdate.getFullYear() - birthdate.getFullYear();
    const monthDifference = currentdate.getMonth() - birthdate.getMonth();
    const dayDifference = currentdate.getDate() - birthdate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }


    document.getElementById('result1').innerHTML = `👉🏻 Your age is ${age} Years`
    document.getElementById('result2').innerHTML = `Total Days: ${totalDay} Days...!`
    document.getElementById('result3').innerHTML = `Total Hours: ${totalhours} Hours...!`
    document.getElementById('result4').innerHTML = `Total minutes: ${totalminutes} minutes.!`
    document.getElementById('result5').innerHTML = `Total milliseconds: ${totalmilliseconds} milliseconds...!`
}
