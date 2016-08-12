const React = require('react')
const shows = require('../public/data.json')

const Search = () => (
  <pre><code>
    {JSON.stringify(shows, null, 4)}
  </code></pre>
)

module.exports = Search
