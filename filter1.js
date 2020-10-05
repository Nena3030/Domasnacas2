const clubs = [
    {
      name: 'Vardar',
      country: 'Macedonia',
      population: '2077000',
      stadium: 'Filip II',
      capacity: '36400'
    },
    {
      name: 'Barcelona',
      country: 'Spain',
      population: '46572028',
      stadium: 'Camp Nou',
      capacity: '85000'
    },
    {
      name: 'Juventus',
      country:'Italy',
      population: '60317116',
      stadium: 'Torino',
      capacity: '35000'
    },
    {
      name: 'Man City',
      country: 'England',
      population: '56286961',
      stadium: 'Etihad',
      capacity: '95000',
    }
  ]

  const filteredClubs = clubs.filter (club=>{
      return club.population >50000000 || club.capacity > 80000
  })
  console.log (filteredClubs)