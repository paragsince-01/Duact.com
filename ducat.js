// function changeoccur(){
//     var changeOccur = document.getElementById("main-body");
//     if(changeOccur.style.opacity === "1"){
//         changeOccur.style.opacity = "0.95";
//     } 
//     else{
//         changeOccur.style.opacity = "1";
//     }
// }
function popupenquiry(){
    var popUp = document.querySelector(".pop-up");
    if(popUp.style.display === "none"){
        popUp.style.display = "block";
    }   
    else{
        popUp.style.display = "none";
    }
}
function removeBc(){
    document.getElementById("cls-24").style.backgroundColor = "#193e56";
    document.getElementById("cls-25").style.backgroundColor = "#ffa600";
}

//show course-1 and hide all others courses
const button1 = document.getElementById("myBtn1");
const showCourse1 = document.getElementById("course-1");
const hideCourse2 = document.getElementById("course-2");
const hideCourse3 = document.getElementById("course-3");
const hideCourse4 = document.getElementById("course-4");
const hideCourse5 = document.getElementById("course-5");
const hideCourse6 = document.getElementById("course-6");


//add a click event 
button1.addEventListener('click', function(){
    //apply display: grid
    showCourse1.style.display = 'grid'; 
    //apply display: none
    hideCourse2.style.display = 'none';
    //apply display: none
    hideCourse3.style.display = 'none';
    //apply display: none
    hideCourse4.style.display = 'none';
    //apply display: none
    hideCourse5.style.display = 'none';
    //apply display: none
    hideCourse6.style.display = 'none';
});
//show course-2 and hide all others courses
const button2 = document.getElementById("myBtn2");
const showCourse2 = document.getElementById("course-2");
const hideCourse1 = document.getElementById("course-1");
const hideCourse3a = document.getElementById("course-3");
const hideCourse4a = document.getElementById("course-4");
const hideCourse5a = document.getElementById("course-5");
const hideCourse6a = document.getElementById("course-6");

    //add a click event 
    button2.addEventListener('click', function(){
    //apply display: grid
    showCourse2.style.display = 'grid';
    //apply display: none
    hideCourse1.style.display = 'none';
    //apply display: none
    hideCourse3a.style.display = 'none';
    //apply display: none
    hideCourse4a.style.display = 'none';
    //apply display: none
    hideCourse5a.style.display = 'none';
    //apply display: none
    hideCourse6a.style.display = 'none';
});
//show course-3 and hide all others courses
const button3 = document.getElementById("myBtn3");
const showCourse3 = document.getElementById("course-3");
const hideCourse1a = document.getElementById("course-1");
const hideCourse2a = document.getElementById("course-2");
const hideCourse4b = document.getElementById("course-4");
const hideCourse5b = document.getElementById("course-5");
const hideCourse6b = document.getElementById("course-6");

    //add a click event 
    button3.addEventListener('click', function(){
    //apply display: grid
    showCourse3.style.display = 'grid';
    //apply display: none
    hideCourse1a.style.display = 'none';
    //apply display: none
    hideCourse2a.style.display = 'none';
    //apply display: none
    hideCourse4b.style.display = 'none';
    //apply display: none
    hideCourse5b.style.display = 'none';
    //apply display: none
    hideCourse6b.style.display = 'none';
});
//show course-4 and hide all others courses
const button4 = document.getElementById("myBtn4");
const showCourse4 = document.getElementById("course-4");
const hideCourse1b = document.getElementById("course-1");
const hideCourse2b = document.getElementById("course-2");
const hideCourse3c = document.getElementById("course-3");
const hideCourse5c = document.getElementById("course-5");
const hideCourse6c = document.getElementById("course-6");

    //add a click event 
    button4.addEventListener('click', function(){
    //apply display: grid
    showCourse4.style.display = 'grid';
    //apply display: none
    hideCourse1b.style.display = 'none';
    //apply display: none
    hideCourse2b.style.display = 'none';
    //apply display: none
    hideCourse3c.style.display = 'none';
    //apply display: none
    hideCourse5c.style.display = 'none';
    //apply display: none
    hideCourse6c.style.display = 'none';
});
//show course-5 and hide all others courses
const button5 = document.getElementById("myBtn5");
const showCourse5 = document.getElementById("course-5");
const hideCourse1c = document.getElementById("course-1");
const hideCourse2c = document.getElementById("course-2");
const hideCourse3b = document.getElementById("course-3");
const hideCourse4c = document.getElementById("course-4");
const hideCourse6d = document.getElementById("course-6");

    //add a click event 
    button5.addEventListener('click', function(){
    //apply display: grid
    showCourse5.style.display = 'grid';
    //apply display: none
    hideCourse1c.style.display = 'none';
    //apply display: none
    hideCourse2c.style.display = 'none';
    //apply display: none
    hideCourse3b.style.display = 'none';
    //apply display: none
    hideCourse4c.style.display = 'none';
    //apply display: none
    hideCourse6d.style.display = 'none';
});
//show course-2 and hide all others courses
const button6 = document.getElementById("myBtn6");
const showCourse6 = document.getElementById("course-6");
const hideCourse1d = document.getElementById("course-1");
const hideCourse2d = document.getElementById("course-2");
const hideCourse3d = document.getElementById("course-3");
const hideCourse4d = document.getElementById("course-4");
const hideCourse5d = document.getElementById("course-5");

    //add a click event 
    button6.addEventListener('click', function(){
    //apply display: grid
    showCourse6.style.display = 'grid';
    //apply display: none
    hideCourse1d.style.display = 'none';
    //apply display: none
    hideCourse2d.style.display = 'none';
    //apply display: none
    hideCourse3d.style.display = 'none';
    //apply display: none
    hideCourse4d.style.display = 'none';
    //apply display: none
    hideCourse5d.style.display = 'none';
});
const menu = document.getElementById("menu");
const showNav2 = document.getElementById("pages");
const close = document.getElementById("close");
menu.addEventListener('click',function(){
   pages.style.display = 'block';
   close.style.display = 'block';
});
const close1 = document.getElementById("close");
close1.addEventListener('click',function(){
   pages.style.display = 'none';
   close.style.display = 'none';
});




