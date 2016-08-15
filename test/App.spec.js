/* eslint-env mocha*/

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow } = require('enzyme')
const { shows } = require('../public/data')

describe('<Seach />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })
})
