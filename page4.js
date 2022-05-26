/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById("output")

fetch(ENDPOINT)
 .then(resp=>resp.json())
 .then(appendData)
 .catch(e=>console.log(e))

 function appendData(data){
  
    data.map(x =>{
        let card = document.createElement("card")
        card.classList.add("card")
        card.innerHTML=
        `
        <h2>Brand:</h2>
        <h1>${x.brand}</h1>
        
        <div class="models">
          <h2>Models:</h2>
          <p>${x.models}</p>
      
        </div>
        
        `
        output.append(card)
    })

     console.log(data)
 }