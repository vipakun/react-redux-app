const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data.json')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((showelement) => (
        <ShowCard show={showelement} key={showelement.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
