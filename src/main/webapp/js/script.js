// Simple login simulation
document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("submit", function(e){
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            if(username === "customer" && password === "1234"){
                window.location.href = "index.html";
            } else {
                document.getElementById("errorMsg").innerText = "Invalid username or password!";
            }
        });
    }
});
