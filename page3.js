/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const outPut = document.getElementById("output")
const button = document.getElementById("btn")
const repos = document.getElementById("repos")
const message= document.getElementById("message")


fetch(ENDPOINT)
 .then(resp => resp.json())
 .then(getUsers)
 .catch(e=>console.log(e))

 function getUsers(data){
    data.map(x=>{
        let userCard = document.createElement("div")
        userCard.classList.add("card")
        userCard.innerHTML =
        `
        <div id="card" class="users-card">
        <img
          src="${x.avatar_url}"
          alt="${x.login}"
        />
        <h2 class="user-name">${x.login}</h2>

      </div>
        
        `
      
        button.addEventListener("click", function(){
            message.innerHTML= ""
          outPut.append(userCard)
      
          
        })
        console.log(data)
    
    })
 

 }

