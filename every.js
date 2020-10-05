//Funkcija Every, ovaa funkcija proveruva dali site elementi vo nizata go zadovoluvaat uslovot (postaven vo callback funkcijata)
//dokolku naide na element koj nema da go zadovoluva uslovot ke vrati false i nema da navleguva vo drugite elementi
//Ovaa funkcija ke vrati true dokolku site elementi go ispolnuvaat uslovot

const numbers = [15, 356, 25, 89, 46, 402, 16, 58, 259]

const broevipogolemiod20 = numbers.every (number=>{
    return number>20
})
console.log (broevipogolemiod20)

//False, zatoa sto 15 ne e pogolem od 20

const broevipogolemiod10 = numbers.every (number =>{
    return number>10
})
console.log (broevipogolemiod10)
//True, site elementi se pogolemi od 10