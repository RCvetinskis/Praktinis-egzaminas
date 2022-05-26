/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

//  1 variantas
//  function Calculator(n1, n2){
//       this.n1 = n1,
//       this.n2 = n2,
//      this.sum = function(){
//       return this.n1 + this.n2
//      }
//      this.subtraction = function(){
//       return this.n1 - this.n2
//      }
//      this.multiplication = function(){
//       return this.n1 * this.n2
//      }
//      this.division = function(){
//       return this.n1 / this.n2
//      }
     
//  }

//  const plus = new Calculator(3,3)
//  const subtraction = new Calculator(3,3)
//  const multiplication = new Calculator(3,3)
//  const division = new Calculator(3,3)

//  console.log(plus.sum())
//  console.log(subtraction.subtraction())
//  console.log(multiplication.multiplication())
//  console.log(division.division())

// 2variantas

class Calculator{
    constructor(n1,n2){
        this.n1 =n1,
        this.n2=n2
    }
    sum(){
        return this.n1 + this.n2
    }
    subtraction(){
        return this.n1 - this.n2
    }
    multiplication(){
        return this.n1 * this.n2
    }
    division(){
        return this.n1 / this.n2
    }
}

const plus = new Calculator(20,30)
 const subtraction = new Calculator(3,3)
 const multiplication = new Calculator(3,3)
 const division = new Calculator(3,3)

 console.log(plus.sum())
 console.log(subtraction.subtraction())
 console.log(multiplication.multiplication())
 console.log(division.division())



 

