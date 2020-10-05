//Entries, ovoj metod gi pecati elementite od nizata kako kluc/vrednost
//odnosno indexot kako kluc a vrednosta kako vrednost

const numbers = [15, 356, 25, 89, 46, 402, 16, 58, 259];
const number = numbers.entries();

for (x of number){
    console.log (x)
}


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

const person = people.entries ()
for (y of person) {
    console.log (y)
}

