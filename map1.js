let niza = [1, 10, 15, 20, 36, 50, 75]

let result = niza.map (broj=>{
    return broj * 3
})
console.log (result)

let result1 = niza.map (broj=>{
    return broj+5
})
console.log (result1)

let result2 = niza.map (broj=>{
    return 13
})
console.log (result2)

const drzavi = [
    {
        drzava: "Makedonija",
        glavenGrad: "Skopje",
        populacija: "2000000",
    },
    {
        drzava: "Svedska",
        glavenGrad: "Stokholm",
        populacija: "10000000",
    },
    {
        drzava: "Norveska",
        glavenGrad: "Oslo",
        populacija: "5500000",
    },
    {
        drzava: "Juzen Sosed",
        glavenGrad: "Atina",
        populacija: "10700000",
    },
    {
        drzava: "Malta",
        glavenGrad: "Valleta",
        populacija: "514000",
    },
    
  ]

  const drz = drzavi.map (dr=>{
      return dr.drzava
  })
  console.log (drz)

  const grad = drzavi.map (glaven=>{
    return glaven.glavenGrad
})

console.log (grad)
const ziteli = drzavi.map (zitel=>{
    return zitel.populacija
})
console.log (ziteli)



