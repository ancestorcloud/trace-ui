import React from 'react'
import renderer from 'react-test-renderer'
import Text from './'

test('Text renders like a boss', () => {
  const component = renderer.create(
    <Text>like a boss</Text>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Text renders transform', () => {
  const component = renderer.create(
    <Text transform='uppercase'>like a boss</Text>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
