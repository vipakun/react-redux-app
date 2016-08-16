const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes

// Method #1
const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm}
            className='search-input' type='text'
            placeholder='Search'
            onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
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
module.exports = Search
