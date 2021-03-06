/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director,budget){
        this.title = title,
        this.director = director,
        this.budget = budget
    }

  
    wasExpensive(){
       if(this.budget >=100000000 ){
          console.log(`${this.title} biudzetas virsyjo 100mln usd`)
        
           
       }else  {
            console.log(`${this.title} biudzetas nevirsyjo 100mln usd`)
            
       }
       
    }
    get revenue(){
        return this.wasExpensive
    }

        
}

 const avengers  = new Movie("Avengers: Endgame", "Petras petrauskas",63300) 
 const batman = new Movie ("Batman: The Begining", "Jonas Jonaitis", 1000000000)

batman.revenue()
avengers.revenue()