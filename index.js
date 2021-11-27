
const passwordDiv = document.querySelector("#passwordDiv");
const NameDiv = document.querySelector("#NameDiv");
const btnCheck = document.querySelector("#btnCheck");



btnCheck.addEventListener("click", ()=>{
    if (passwordDiv.value === NameDiv.value) {
        document.getElementById("output").innerHTML =
         " Bravo! Correct one pal";
      } else {
        document.getElementById("output").innerHTML =
          "Oh No, Seems like you need some medicines to remeber the correct password";
      }
});
