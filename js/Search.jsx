const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string } = React.PropTypes
const { connector } = require('./Store')

// Method #1
const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

// Method #2
// class Search extends React.Component {
//   constructor(props) {
//    super(props)
//    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)  => bind in pure function
//   }
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
module.exports = connector(Search)
