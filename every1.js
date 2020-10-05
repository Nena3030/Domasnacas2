const proizvodi = [
    {
        ime: 'mleko',
        cena: '50',
    },
    {
        ime: 'meso',
        cena: '250',
    },
    {
        ime: 'jajca',
        cena: '85',
    },
    {
        ime: 'jogurt',
        cena: '60',
    },
    {
        ime: 'ajvar',
        cena: '150',
    }
]

const eftiniproizvodi = proizvodi.every (proizvod =>{
    return proizvod<100
})
console.log (eftiniproizvodi)
