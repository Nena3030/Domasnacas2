//Funkcijata Filter kreira nova niza so site elementi koi ke go zadovolat uslovot postaven vo callback funkcijata,
// odnosno interira vo sekoj objekt od nizata movies 
//i vo sekoja interacija ja povikuva callback funkcijata odnosno (return movies.budget < 1000000)
//Callback funkcija e funkcija koja ja prakame kako parametar vo druga funkcija

const movies = [
    {
        name: 'Psiho',
        year: '1960',
        budget: '806947'
    },
    {
        name: 'Citizen Kane',
        year: '1941',
        budget: '686034'
      },
      {
        name: 'Titanic',
        year: '1997',
        budget: '200000000'
      },
      {
        name: 'Gotfather',
        year: '1972',
        budget: '6000000'
      },
      {
        name: 'Casablanca',
        year: '1942',
        budget: '1039000'
      },
  ]

  const filteredMovies = movies.filter (movies=>{
      return movies.budget <1000000
  })
  console.log (filteredMovies)