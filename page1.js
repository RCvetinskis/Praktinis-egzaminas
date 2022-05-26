/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const form = document.querySelector("form")
const search = document.getElementById("search")
const outPut = document.getElementById("output")

form.addEventListener("submit", function(e){
    e.preventDefault()
    if(Number(search.value)){

        let kgToLBS = search.value * 2.2046
        let kgToG = search.value / 0.0010000
        let kgToOz = search.value * 35.274
        let table  = document.createElement("table")
        table.classList.add("table-container")
        table.innerHTML =
        `
        <tr>
        <th>Svarus (lb)</th>
        <th>Gramus (g)</th>
        <th>Uncijos (oz)</th>
      </tr>
      <tr>
        <td>${kgToLBS}</td>
        <td>${kgToG}</td>
        <td>${kgToOz}</td>
      </tr>
        
        `
        outPut.append(table)
      
       search.value = ""
    }

 

})

