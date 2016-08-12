const React = require('react')
const ReactDOM = require('react-dom')

// const MyFirstComponent = function () {
//   return (
//     <div>
//       <MyTitle title='whatever' color='rebeccapurple' />
//       <MyTitle title='LOL' color='papayawhip' />
//       <MyTitle title='OMG' color='mediumaquamarine' />
//       <MyTitle title='HelloWorld' color='peru' />
//       <MyTitle title='Chicago' color='#f06d06' />
//     </div>
//   )
// }

const App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browser-all'> or Browse All</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
