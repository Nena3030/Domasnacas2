//For each, ovaa funkcija raboti isto kako ciklusot for,  go pominuva sekoj element od nizata i gi pecati zadadenite parametri
// ovaa funkcija ne raboti so return, se pisuva samo console.log

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

const random = drzavi.forEach (dr=>{
  console.log (`Drzavata` + drzavi.drzava + `so glaven grad` + glavenGrad.drzavi + `ima` + drzavi.populacija `ziteli`)
})
const clubs = [
    {
      name: 'Arsenal',
      stadium: 'Emirates',
      capacity: '65000',
    },
    {
      name: 'Barcelona',
      stadium: 'Camp Nou',
      capacity: '95000',
    },
    {
      name: 'Juventus',
      stadium: 'Torino',
      capacity: '35000',
    },
    {
      name: 'Man City',
      stadium: 'Etihad',
      capacity: '95000',
    }
  ]
  
  const sitetimovi = clubs.forEach (tim=>{
      console.log(tim.name)
  })

  const stadion = clubs.forEach (std=>{
      console.log (std.stadium)
  })

