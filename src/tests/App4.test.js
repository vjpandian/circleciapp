import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import { sleep, defaultDuration } from '../tools'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;

it('changes the text on click', () => {
  const wrapper = shallow(<App/>)
  let text = wrapper.find('.text-container')
  expect(sleep(defaultDuration)).resolves.toBeUndefined()
  expect(text.exists()).toBe(true)
  expect(wrapper.state('words')).toBe('')
  wrapper.find('button').simulate('click')
  text = wrapper.find('.text-container')
  expect(text.text()).toBe(wrapper.state('words'))
})

