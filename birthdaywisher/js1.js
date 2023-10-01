function namefunc(e) {
    e.preventDefault();
    let xyz=document.getElementById("name");
    const wish=document.getElementById("wish");
    //wish.innerText(`HAPPY BiRTHDAY ${xyz.value}`)
    const name = xyz.value;
              if (name) {
                wish.innerText = `HAPPY BIRTHDAY ${name}`;
            } else {
                wish.innerText = "Please enter a name.";
            }
}
const btn=document.getElementById("btn");
btn.addEventListener("click",namefunc);