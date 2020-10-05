//Some, ovoj metod proveruva dali elementite ke go ispolnat uslovot (postaven vo funkcijata)
//Dokolku pronajde eden element koj ke go ispolni uslovot funkcijata vraka true bez da gi proveruva ostanatite elementi

const persons = [
    { ime: "Jovan",
    godini: "15",
    },

    {
        ime: "Marko",
        godini: "25",
    },
    {
        ime: "Rajko",
        godini: "30",
    },
    {
        ime: "Petko",
        godini: "60",
    }

]

const person = persons.some (per=>{
    return per.godini >=60
})
console.log (person)

const personname = persons.some (pers=>{
    return pers.ime == "Marko"
})
console.log (personname)

const personime = persons.some (perime =>{
    return perime.ime == "Dejan"
})
console.log (personime)