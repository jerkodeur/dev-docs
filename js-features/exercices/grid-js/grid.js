const gotTable = [
  ["John", "Snow", "male", "true"],
  ["Tyrion", "Lannister", "male", "true"],
  ["Margeary", "Tyrell", "female", "false"],
  ["Catelyn", "Stark", "female", "false"],
  ["Daenerys", "Targaryen", "female", "false"],
  ["Rob", "Stark", "male", "false"]
]

//TODO With a table of datas
new gridjs.Grid({
  //TODO Define the columns of the table
  columns: ["Name", "Family", "gender", "alive"],
  data: () => {
    // Mock an database call with setTimeOut
    return new Promise(resolve => {
      setTimeout(() =>
        resolve(gotTable), 1000)
    })
  } //select the html element to render the table
}).render(document.getElementById('table'))


//TODO With an api or server
new gridjs.Grid({
  columns: [
    {
      name: 'Title',
      //TODO define column width
      width: '10%',
    },
    'Director',
    'Productor'
  ],
  //TODO Add a search input
  search: true,
  //TODO Add sort input
  sort: true,
  //TODO Add pagination
  pagination: {limit: 3},
  server: {
    url: 'https://swapi.dev/api/films/',
    then: data => data.results.map(movie =>
      [movie.title, movie.director, movie.producer]
    )
  },
  //TODO Stylise with existing css properties
  className: {
    table: 'table-test-style',
    td: 'td-test-style',
    th: 'th-test-style'
  }
}).render(document.getElementById('dTable'))

//TODO With object
new gridjs.Grid({
  search: true,
  data: [
    { name: 'John', email: 'john@example.com' },
    { name: 'Mark', email: 'mark@gmail.com' },
    { name: 'Eoin', email: 'eo3n@yahoo.com' },
    { name: 'Nisen', email: 'nis900@gmail.com' }
  ],
  //TODO Stylise the table
  style: {
    table: {
      border: '2px groove black'
    },
    th: {
      backgroundColor: 'darkGrey',
      color: 'white',
      textAlign: 'center',
    },
    td: {
      'border-width': '5px',
      'border-bottom-color': 'lightGrey',
      textAlign: 'center',
    }
  }
}).render(document.getElementById('objTable'))