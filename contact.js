const submitBtn = document.querySelector(".sub-but");

submitBtn.addEventListener("click",()=>{
    const name = document.querySelector(".con-info[type='name']").value
    const email = document.querySelector(".con-info[type='email']").value
    const message = document.querySelector(".con-info[type='message']").value

    if (!name || !email || !message){
        alert("Please Fill All Fields")
    }else{
        alert("Thank You"  + name +  "! Your Message Is Sent.")
    }
})

document.getElementsByTagName("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";


//  Subscribe Button Alert

const subBtn = document.querySelector(".btn1");

subBtn.addEventListener("click",()=>{
    const email = document.querySelector(".subscribe input[type='email']").value;
    const name = document.querySelector(".subscribe input[type='name']").value;

    if (email === "" || name ===""){
        alert (" Please Enter Your Name And Email To Subscibe!");
    }else{
        alert(`${name},You Have Sucessfully Subscribe To Our Newsletters!`)
    }
})
