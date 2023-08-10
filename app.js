let button = document.getElementById('btn');
let name = document.getElementById('name');
let email=document.getElementById('email');
let phone = document.getElementById('tel');
let password= document.getElementById('password');

button.addEventListener('click',
(e)=>{
    if(name.value==''||email.value==''||phone.value==''||password.value==''){
     
 alert('Fill out all Mandatory Fields')
    }
    else {
        location.replace('main.html')
    }
    

})