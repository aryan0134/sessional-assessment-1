var btn=document.getElementById("nightmode");
var icons=document.getElementsByClassName("baby");
var bg=document.getElementById("frame");
var ab=document.getElementById("about");
var skill=document.getElementById("Skills");
var education=document.getElementById("education");
var contact=document.getElementById("contact");
var count=0;
function toggleMode(){
    if(count%2==0){
        bg.style.backgroundColor="black";
        bg.style.transition="ease-in-out 1s";
        ab.style.backgroundColor="black";
        ab.style.borderColor="white";
        ab.style.transition="ease-in-out 1s";
        skill.style.backgroundColor="black";
        skill.style.borderColor="white";
        skill.style.transition="ease-in-out 1s";
        education.style.backgroundColor="black";
        education.style.borderColor="white";
        education.style.transition="ease-in-out 1s";
        contact.style.background="black";
        contact.style.borderColor="white";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-sun fa-2x baby"></i>'
        console.log(count+" Dark Mode");


    }
    else{
        bg.style.backgroundColor="#b19181";
        bg.style.transition="ease-in-out 1s";
        ab.style.backgroundColor="#ADD8E6";
        ab.style.borderColor="black";
        ab.style.transition="ease-in-out 1s";
        skill.style.backgroundColor="#C19A6B";
        skill.style.borderColor="black";
        skill.style.transition="ease-in-out 1s";
        education.style.backgroundColor="#DCDCDC";
        education.style.borderColor="black";
        education.style.transition="ease-in-out 1s";
        contact.style.background="linear-gradient(30deg,#42E695,#3BB2B8)";
        contact.style.borderColor="black";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-moon fa-2x "></i>'
        console.log(count+" Light Mode");
    }
    count+=1;
}
btn.addEventListener("click",toggleMode)