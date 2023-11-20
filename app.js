const start = document.getElementsByClassName("start");
const load = document.getElementsByClassName("load");
start[0].addEventListener('click', (e) =>{
    load[0].style.width = 0;
    load[1].style.width = 0;
    start[0].innerHTML = "";
    start[0].style.padding = 0;
});

const LGTG = document.getElementsByClassName("LGTG");
const all = document.getElementsByClassName("all");
const FS = document.getElementsByClassName("furtherSteps");
const CFS = document.getElementsByClassName("crossFurtherSteps");
const FSsocial = document.getElementsByClassName("socialsR");
LGTG[0].addEventListener('click', (e) =>{
    all[0].style.opacity=0.3;
    all[0].style.pointerEvents="none";
    FS[0].style.left="50%";
    FS[0].style.height="70%";
    FS[0].style.color="var(--clrBlack)";
    CFS[0].style.visibility="visible";
    FSsocial[0].style.visibility="visible";
});
CFS[0].addEventListener('click', (e) =>{
    all[0].style.opacity=1;
    all[0].style.pointerEvents="unset";
    FS[0].style.left="-50%";
    // FS[0].style.height="0%";
    // FS[0].style.color="transparent";
    // CFS[0].style.visibility="hidden";
});

// const r = document.querySelector(':root');
// const rs = getComputedStyle(r);
// const DL = document.getElementsByClassName("lightMode");
// const DLD = getComputedStyle(DL[0]);
// function darkLight() {
//     if (DLD.backgroundColor === 'rgb(247, 247, 247)') {
//         r.style.setProperty('--clrBlue', 'darkblue');
//         r.style.setProperty('--clrPurple', 'purple');
//         r.style.setProperty('--clrBlack', 'rgb(247, 247, 247)');
//         r.style.setProperty('--clrWhite', 'rgb(3, 3, 3)');
//     }
//     else{
//         r.style.setProperty('--clrBlue', 'rgb(113, 97, 239)');
//         r.style.setProperty('--clrPurple', 'rgb(149, 127, 239)');
//         r.style.setProperty('--clrBlack', 'rgb(3, 3, 3)');
//         r.style.setProperty('--clrWhite', 'rgb(247, 247, 247)');
//     }
// }