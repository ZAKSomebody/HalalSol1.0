const start = document.getElementsByClassName("start");
const load = document.getElementsByClassName("load");
start[0].addEventListener('click', (e) =>{
    load[0].style.width = 0;
    load[1].style.width = 0;
    start[0].innerHTML = "";
    start[0].style.padding = 0; 
});