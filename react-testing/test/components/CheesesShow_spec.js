/* global describe, it, before, beforeEach, after */
import React from 'react'
import Promise from 'bluebird'
import axios from 'axios'
import sinon from 'sinon'
import {expect} from 'chai'
import {mount} from 'enzyme'
import {MemoryRouter, Route} from 'react-router-dom'

import CheesesShow from '../../src/components/CheesesShow'

describe('CheeseShow tests', () => {
  let wrapper, response

  before(done => {
    //response is a Promise because it needs a .then after
    response = Promise.resolve({
      data: {
        _id: 1,
        name: 'Cheddar',
        origin: 'England',
        image: 'cheddar.png',
        tastingNotes: 'Fairly bland'
      }
    })
    sinon.stub(axios, 'get').returns(response)
    done()
  })

  after(done => {
    axios.get.restore()
    done()
  })

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter intialEntries={['/cheeses/1']}>
        <Route path="/cheeses/:id" component={CheesesShow} />
      </MemoryRouter>
    )
    done()
  })

  it('should render the correct HTML', done => {
    response.then(() => {
      wrapper.update()
      expect(wrapper.find('.section .container h1.title').text().to.eq('Cheddar'))
      expect(wrapper.find('.section .container h2.subtitle').text().to.eq('England'))
      expect(wrapper.find('figure.image img').prop('src').to.eq('cheddar.png'))
      expect(wrapper.find('div.column:last-child').contains(<p>Fairly bland</p>))
    })
    done()
  })

})
