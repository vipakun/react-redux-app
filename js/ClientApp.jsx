const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { shows } = require('../public/data.json')

const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
    // console.log('nextState', nextState, 'showArray', showArray)
    if (showArray.length < 1) {
      return replace('/')  // back to home page if cannot find
    }
    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Router path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
