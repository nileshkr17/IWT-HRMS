function regiValidator(){
const name= document.getElementById("name").value
const uni= document.getElementById("uni").value
const clg=document.getElementById("clg").value
const branch=document.getElementById("branch").value
const dob=document.getElementById("dob").value
const email=document.getElementById("email").value
const password=document.getElementById("pass").value
const mob=document.getElementById("mob").value


if(name==""){
       // alert("Please enter your name")
        document.getElementById("error").innerHTML = "Please enter your name"
        return false
    }
if(uni==""){
    //alert("Please enter your university name:")
    document.getElementById("error").innerHTML="Please enter your university name"
    return false
}
if(clg==""){
    //alert("Please enter your college name: ")
    document.getElementById("error").innerHTML="Please enter your college name!"
    return false
}

if(branch==""){
    //alert("Please enter your branch name: ")
    document.getElementById("error").innerHTML="Please enter your branch name!"
    return false
}
if(dob==""){
   // alert("Please enter your dob: ")
    document.getElementById("error").innerHTML="Please enter your dob"
    return false
}
if(dob==""){
    // alert("Please enter your dob: ")
    document.getElementById("error").innerHTML="Please enter your dob"
    return false
}

let atPos = email.indexOf('@')
let dotPos = email.lastIndexOf('.')
   
if(atPos<1 || dotPos<1 || dotPos - atPos < 4 || dotPos == email.length-1){
        //alert("Please enter a valid email address")
        document.getElementById("error").innerHTML="Please enter vaild email!"
        return false
    }
    
 else if(password==""){
        document.getElementById("error").innerHTML = "Please enter your password"
        return false
    } else if(password.length < 6 || password.length >15){
        document.getElementById("error").innerHTML="Password length must be >6 and <15"
        return false
    }

    else  {
        document.getElementById("success").innerHTML="Success!! Please Wait .."
       }
}
