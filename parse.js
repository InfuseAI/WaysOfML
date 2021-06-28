const parse = require('csv-parse')
const fs = require('fs')
const input = fs.readFileSync('./data/landscape.csv')
const stages = JSON.parse(fs.readFileSync('./data/stages.json'))

parse(input, {columns: true, bom: true}, (err, out) => {
  fs.writeFileSync('./data/out.json', JSON.stringify(
    out
    .filter(x => x.Name !== '')
    .filter(x => x[stages[0]] !== '' || x[stages[1]] !== '' || x[stages[2]] !== '' || x[stages[3]] !== '')
    .sort((x, y) => x.Name.localeCompare(y.Name)))
  )
})
