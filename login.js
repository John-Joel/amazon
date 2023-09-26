let login = document.getElementById("login");
let signup = document.getElementById("signup");
let shade = document.getElementById('switch');

login.addEventListener("click", function () {
    shade.classList.remove('toRight');
    shade.classList.add('toLeft');
});

signup.addEventListener('click', function () {
    shade.classList.remove('toLeft');
    shade.classList.add('toRight');
});

// function passValue(e) {
//     let logName = document.getElementById('logName').value;
//     localStorage.setItem("userName", logName);
//     location.replace("./amazon.html");
//     // document.getElementById('welcome').innerText = localStorage.getItem('userName');

//     if (localStorage["userName"]) {
//         document.querySelector('#welcome').innerText = localStorage.getItem('userName');
//     }

// }

