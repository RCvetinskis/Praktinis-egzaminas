/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const button = document.getElementById("btn__element")
const buttonView = document.getElementById("btn__state")
let clicks = 0

    button.onclick = function(){
        let counter =  ++clicks
       buttonView.innerText = counter
         console.log(counter)

    }
   



  
