import React from 'react'
import { Popover } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

const CartPopover = ({items}) => {
  const [isVisible, setIsVisible] = useState(items.length > 0)

  useEffect(() => {
    setIsVisible(items.length > 0)
  }, [items])

  const close = () => {
    return setIsVisible(false)
  }

  const open = () => {
    return setIsVisible(true)
  }

  const title = () => {
    return <>
      Cart <a style={{"float": "right"}} data-testid="close-popover" onClick={close}>X</a>
    </>
  }

  const content = () => {
    return <>
      1 item added to your cart
    </>
  }


  return (
    <Popover content={content} title={title} trigger="click" onClick={open} visible={isVisible}>
      <ShoppingCartOutlined /> {items.length}
    </Popover>
  )
}

export default CartPopover
