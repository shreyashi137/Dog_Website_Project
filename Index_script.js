// Index.Html Page Js
// Get Elemnts
const exploreBtn = document.getElementById("explore-btn");
const actionSection = document.getElementById("action-section");


// When Explore Dongs Button is Clicked
exploreBtn.addEventListener("click",()=>{
    //Make The Hidden Section Visible
    actionSection.style.display = "block";

    //Smooth Scroll To The Section
    actionSection.scrollIntoView({behavior:"smooth"});
});


// Popup Functionality
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".sign-up-btn");
const loginPopup = document.getElementById("login-popup");
const signupPopup = document.getElementById("signup-popup");
const closeBtns = document.querySelectorAll(".close-popup"); 



//Open Login Popup
loginBtn.addEventListener("click",()=>{
    loginPopup.style.display = "flex"
})


// Open Signup Popup
signupBtn.addEventListener("click",()=>{
    signupPopup.style.display = "flex"
})


// ClosePopus When Clicking The "X"
closeBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        loginPopup.style.display = "none";
        signupPopup.style.display = "none";
        ThankyouPopup.style.display = "none"
        clearInputs();
    })
})



//  Forgot Password Opens Sign-Up Popup
const forgotPassword = document.getElementById("forgot-password");

forgotPassword.addEventListener("click",()=>{
    loginPopup.style.display = "none";
    signupPopup.style.display= "flex";
})



// Signup Popup ThankYou Message
const signupEmail = signupPopup.querySelector("input[type='email']");
const signupPassword = signupPopup.querySelectorAll("input[type='password']")[0];
const signupConfirm = signupPopup.querySelectorAll("input[type='password']")[1];
const signupSubmit = signupPopup.querySelector("button");


// When User Sign Up
signupSubmit.addEventListener("click",()=>{
    if(
        signupEmail.value &&
        signupPassword.value &&
        signupConfirm.value &&
        signupPassword.value === signupConfirm.value
    ){
        //Save Signup Details Is LocalStorage
        localStorage.setItem("email",signupEmail.value);
        localStorage.setItem("password",signupPassword.value);

        alert("Account Created Successfully! You Can Now Login")

        signupPopup.style.display="none";
        loginPopup.style.display = "flex"
    }else{
        alert("Please Fill All Fields Correctly And Confirm Your Password")
    }
})


// Login Functionality
const loginEmail = loginPopup.querySelector("input[type='email']");
const loginPassword = loginPopup.querySelector("input[type='password']");
const loginSubmit = loginPopup.querySelector("button");

loginSubmit.addEventListener("click",()=>{
    const savedEmail = localStorage.getItem("email")
    const savedPassword = localStorage.getItem("password")

    if(loginEmail.value === savedEmail && loginPassword.value === savedPassword){
        loginPopup.style.display = "none";
        ThankyouPopup.style.display = "flex";
    }else{
        alert("Incorrect Email Or Password! Plase Try Again");
    }
  
})

// Close Thank You Popup

const ThankyouPopup = document.getElementById("Thankyou-popup"); 
const closeThankyou = document.getElementById("Close-Thankyou"); 

closeThankyou.addEventListener("click",()=>{
    ThankyouPopup.style.display = "none";

    // Hide Action Section And Scroll Back To Top Home Page
    actionSection.style.display = "none";
    window.scrollTo({top:0, behavior: "smooth"})
})



// // ------------------------------------------------------------------------------------------------------------------------------------

