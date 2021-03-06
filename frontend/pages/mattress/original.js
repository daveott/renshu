import Link from 'next/link'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { Button, Select, Form } from 'antd'
const { Option } = Select
import { cartState } from '../../components/helpers/recoil-helper'

export default function OriginalMattress() {
  const [cart, setCart] = useRecoilState(cartState)
  const [size, setSize] = useState()

  const sizes = [
    { value: 'twin', label: 'Twin' },
    { value: 'twin_xl', label: 'Twin XL' },
    { value: 'full', label: 'Full' },
    { value: 'queen', label: 'Queen' },
    { value: 'king', label: 'King' },
    { value: 'cal_king', label: 'Cal King' },
  ]

  const handleCartAddition = () => {
    setCart([{ size: size }])
  }

  function handleChange(value) {
    setSize(value)
  }

  return (
    <>
      <header><h1>T&N Original Mattress</h1></header>
      <Form layout="vertical">
        <Form.Item label="Size" colon={false}>
          <Select style={{ width: 200 }} onChange={handleChange}>
            { sizes.map(size => {
                return(<Option value={size.value} key={size.value}>{size.label}</Option>)
              })
            }
          </Select>
        </Form.Item>
        <Button onClick={handleCartAddition}>Add to Cart</Button>
      </Form>
    </>
  )
}
