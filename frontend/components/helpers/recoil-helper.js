import { atom, selector } from 'recoil'

export const cartState = atom({
  key: 'cartState',
  default: [],
})

export const getCartState = selector({
  key: 'getCartState',
  get: ({get}) => {
    console.log(get(cartState))
    return get(cartState)
  }
})
