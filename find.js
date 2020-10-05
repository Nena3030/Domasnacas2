//Funkcija Find, ovaa funkcija ni ovozmozuva da pronajdeme odreden element od nizata
//i go pecati prviot element od nizata koj ke go zadovoli uslovot true zadaden vo callback funkcijata
//Dokolku ni eden element ne go ispolnuva zadadeniot uslov vraka undifined


const people = [
    {
        ime: 'Dejan',
        godini: '32',
        profesija: 'Doktor',
    },
    {
        ime: 'Viktor',
        godini: '28',
        profesija: 'Producent',

    },

 {
        ime: 'Vlatko',
        godini: '62',
        profesija: 'Penzioner',

    },
    {
        ime: 'Ivan',
        godini: '18',
        profesija: 'Student',

    },

 {
        ime: 'Kristijan',
        godini: '43',
        profesija: 'Pilot',

    },
]

const ePilot = people.find (person=>{
    return person.profesija === 'Pilot'
})
console.log (ePilot)

const povekeod60 = people.find (person=>{
    return person.godini > 60
})

console.log(povekeod60)
