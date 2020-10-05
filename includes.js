//Includes, so ovoj metod proveruvame dali nekoja niza sodrzi konkreten element koj go naveduvame
//Dokolku nizata go sodrzi elementot ke vrati true, dokolku ne false

const niza = [10,20,30,40,50,60]
const includes20 = niza.includes (20)
console.log (includes20)

const a = niza.includes (30, 2) //broj, pozicija
console.log (a)

const niza1 = ["mleko", "jajca", "leb", "meso", "jogurt", "domat"]
const b = niza1.includes ("zdenka")
console.log (b)

const c = niza1.includes ("mleko", 0)
console.log (c)