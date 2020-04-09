var error = false;

const validate = () => {
    let name = document.getElementById('fname').value;
    let out = document.getElementById('output')
    out.style.color= "red";
    if(name == ' '||name==""){
       out.innerText="Please enter first name";
       error = true
    }else{
        out.innerText=""
        error = false
    }

}


const validatel  = () => {
    let lname = document.getElementById('lname').value;
    let out = document.getElementById('output')
    out.style.color= "red";

    if(lname.length<8){
        out.innerText="Min length should be 8"
        document.getElementById('submit').disabled=true;
        error = true
    }else{
        out.innerText=""
        document.getElementById('submit').disabled=false;
        error = false

    }
}


function emailvalid(){
    let email = document.getElementById('email').value;
    let out = document.getElementById('output')
    out.style.color= "red";
    if(email==' '||email==""){
        out.innerText="Please enter email"
        error = true
    }else{
        if(email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$') == null){
            out.innerText="Please enter valid email"
            error = true
        }else{
            out.innerText=""
            error = false
        }
    }
}

const finalVallidate =() => {
    console.log(error)
    let out = document.getElementById('output')
    if(error==true){
        out.innerText="Please fix the error"
    }else{
        out.innerText=""
        error = false
    }
}

console.log(error)