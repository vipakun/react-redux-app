const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

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

const MyFirstComponent = () => (
  <div>
    <MyTitle title='whatever' color='rebeccapurple' />
    <MyTitle title='LOL' color='papayawhip' />
    <MyTitle title='OMG' color='mediumaquamarine' />
    <MyTitle title='HelloWorld' color='peru' />
    <MyTitle title='Chicago' color='#f06d06' />
  </div>
)
ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
