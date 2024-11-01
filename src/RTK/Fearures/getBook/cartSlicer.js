import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    selectedItems: 0,
    totalPrice: 0,
    grandTotal: 0
}

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExiting = state.carts.find(cart => cart.id === action.payload.id)

            if (!isExiting) {
                state.carts.push({ ...action.payload, quantity: 1 })
            } else {
                console.log('Alrady Add This');
            }

            state.selectedItems = setSelectedItems(state)
            state.totalPrice = setTotalPrice(state)
        },

        updateCartQuantity: (state, action) => {
            state.carts.map(cart => {
                if (cart.id === action.payload.id) {
                    if (action.payload.type === 'increment') {
                        cart.quantity += 1
                    }else if (action.payload.type === 'decrement') {
                        if (cart.quantity > 1) {
                            cart.quantity -= 1
                        }
                    }
                }
                return cart
            })
            state.selectedItems = setSelectedItems(state)
            state.totalPrice = setTotalPrice(state)
        },

        removeCart: (state, action) => {
            state.carts =  state.carts.filter(cart => cart.id !== action.payload)
            state.selectedItems = setSelectedItems(state)
            state.totalPrice = setTotalPrice(state)
        }
    }

})


export const setSelectedItems = state =>
    state.carts.reduce((total, cart) => {
        return Number(total + cart.quantity)
    }, 0)

export const setTotalPrice = state =>
    state.carts.reduce((total, cart) => {
        return Number(total + cart.quantity * cart.price)
    }, 0)

export const { addToCart, updateCartQuantity, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
