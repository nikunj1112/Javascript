const Email = document.getElementById("email");
const Password = document.getElementById("password");
const LoginBtn = document.getElementById("loginBtn");
const Input = document.getElementById("input");

const emailRegx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
const passwordRegx = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

LoginBtn.addEventListener("click", () => {

    if (Email.value == "" || Password.value == "") {
        alert("Please enter both email and password...!");

    }
    else if (emailRegx.test(Email.value) && passwordRegx.test(Password.value)) {
        alert("✅ Login successful...!")
        Input.textContent = " ";
       
    }
    else if (!emailRegx.test(Email.value) && !passwordRegx.test(Password.value)) {
        Input.textContent = "Invalid email or password...!";
        Input.style.color = "#c12525";
        // alert("Invalid email or password...!")
    }
    else if (!emailRegx.test(Email.value)) {
        Input.textContent = "Email is invalid...!";
        Input.style.color = "#c12525";
        // alert("Email is invalid...!")
    }
    else if (!passwordRegx.test(Password.value)) {
        Input.textContent = " password is invalid..! Must be 8+ characters with uppercase, lowercase, and number/symbol.";
        Input.style.color = "#c12525";
        // alert(" password is invalid...!")
    }
});