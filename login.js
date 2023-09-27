let login = document.getElementById("login");
let signup = document.getElementById("signup");
let shade = document.getElementById('switch');

function onChangeLeft(e) {
    shade.classList.remove('toRight');
    shade.classList.add('toLeft');
};

function onChangeRight(e) {
    shade.classList.remove('toLeft');
    shade.classList.add('toRight');
};

let handleLogin = (event) => {

    let logName = document.getElementById('logName').value;
    let passName = document.getElementById('logPass').value;

    if ((localStorage["userName"] === logName) && (localStorage["password"] === passName)) {
        event.preventDefault();
        // localStorage.setItem("userName", logName);
        // localStorage.setItem("password", passName);
        location.replace('./amazon.html');
    }
    else {
        alert("you dont have a account")
    }
}

let handleSignup = (event) => {
    let signName = document.getElementById('signName').value;
    let signPass = document.getElementById('signPass').value;
    let confirmPass = document.getElementById('signConfirmPass').value;

    if ((localStorage["userName"] !== "signName") && (localStorage["password"] !== "signPass")) {
        event.preventDefault();
        localStorage.setItem("userName", signName);
        localStorage.setItem("password", signPass);
        location.replace('./amazon.html');
    }
    else {
        alert("incorrect name or password");
    }

}


