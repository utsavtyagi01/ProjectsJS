function random(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let print=document.getElementById("print")
    print.innerText=(`Color Selector ${r},${g},${b}`);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
}

const btn=document.querySelector("button");
btn.addEventListener("click",random);