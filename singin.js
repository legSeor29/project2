let log = document.querySelectorAll(".login_inp")
 
let login_but = document.querySelector(".login_but")
Users.get()
let users = JSON.parse(localStorage.getItem("data2"))
login_but.addEventListener("click", function() {
     
    
    console.log(users.length)
    let flag = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].nickname == log[0].value && users[i].pass == log[1].value) {
            flag = true;
            break
        }
    } 
    if (flag == true) {
        document.location.replace('meetingpage.html');
        localStorage.setItem("login",  log[0].value)
        localStorage.setItem("pass",   log[1].value)
    }
    else {
        alert("Wrong login or password")
    }
})
