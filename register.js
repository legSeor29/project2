let reg = document.querySelectorAll(".register_inp")
 
 
 
let reg_but = document.querySelector(".register_but")

reg_but.addEventListener("click", function() {
    document.location.replace('meetingpage.html');
    let user = {
        nickname:  reg[0].value,
        pass: reg[1].value
    }
    Users.create(user)
    localStorage.setItem("login",  reg[0].value)
    localStorage.setItem("pass",   reg[1].value)
    alert(52)
})