/* global describe, it, beforeEach */
import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import CheeseCard from '../../src/components/CheeseCard'

describe('CheeseCard tests', () => {

  let wrapper

  beforeEach(done => {
    const props = {
      _id: 1,
      name: 'Cheddar',
      image: 'cheddar.png',
      origin: 'England',
      user: {
        username: 'John'
      }
    }
    wrapper = shallow(< CheeseCard {...props} />)
    done()
  })
  it('should render the correct HTML', done => {
    // console.log(wrapper.debug());
    expect(wrapper.find('.card').length).to.eq(1)
    expect(wrapper.find('Link').length).to.eq(1)
    expect(wrapper.find('.card-header').length).to.eq(1)
    expect(wrapper.find('.card-image').length).to.eq(1)
    expect(wrapper.find('.card-content').length).to.eq(1)
    done()
  })

  it('should render the correct data', done => {
    expect(wrapper.find({ to: '/cheeses/1' }).length).to.eq(1)
    expect(wrapper.find('.card-header-title').text()).to.eq('Cheddar')
    expect(wrapper.find('figure').prop('style').backgroundImage).to.eq('url(cheddar.png)')
    expect(wrapper.find('.card-content .content').contains(<p><strong>Origin:</strong> England</p>))
    expect(wrapper.find('.card-content .content').contains(<p><strong>Uploaded by:</strong> John</p>))
    done()
  })


})
