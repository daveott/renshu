import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Popover } from 'antd'
import CartPopover from './CartPopover'


describe('with 0 items in my cart', () => {
  test('it does not show the popover', () => {
    const { queryByText } = render(<CartPopover items={ [] }/>)
    expect(queryByText('item added to your cart')).not.toBeInTheDocument()
  })
})

describe('with 1 items in my cart', () => {
  test('it shows the popover', () => {
    const { getByText } = render(<CartPopover items={ [{size: 'Queen'}] }/>)
    getByText('1 item added to your cart')
  })
})

describe('clicking the close button', () => {
  it('closes the popover', () => {
    const { getByTestId } = render(<CartPopover items={ [{size: 'Queen'}] }/>)
    const x = getByTestId("close-popover")
    fireEvent.click(x)
    expect(screen.queryByText('item added to your cart')).not.toBeInTheDocument()
  })
})
