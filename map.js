//Map, ovaa funkcija kreira nova niza vo zavisnost od funkcijata koja sto ja povikuvame za sekoj element od nizata

const series = [
    {
        name: 'Friends',
        year: '1994',
        seasons: '10',
    },
    {
        name: 'Simpsons',
        year: '1989',
        seasons: '32',
    },

  {
        name: 'Sopranos',
        year: '1999',
        seasons: '6',
    },
    {
        name: 'Game of thrones',
        year: '2011',
        seasons: '8',
    },
    {
        name: 'Seinfeld',
        year: '1989',
        seasons: '9',
    },
]

const newarray = series.map (ime=>{
    return ime.name
})
console.log(newarray)

const newarray2 = series.map (godina=>{
    return godina.year
})
console.log(newarray2)