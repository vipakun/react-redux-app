const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data.json')

// Method #1
const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'This is my search term'
    }
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>{this.state.searchTerm}</h1>
          <input value={this.state.searchTerm}
            className='search-input' type='text'
            placeholder='Search'
            onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

// Method #2
// class Search extends React.Component {
//   render () {
//     return (
//       <div className='container'>
//         <header className='header'>
//           <h1 className='brand'>svideo</h1>
//           <input className='search-input' type='text' placeholder='Search'></input>
//         </header>
//         <div className='shows'>
//           {data.shows.map((show) => (
//             <ShowCard {...show} key={show.imdbID} />
//           ))}
//         </div>
//       </div>
//     )
//   }
// }
module.exports = Search
