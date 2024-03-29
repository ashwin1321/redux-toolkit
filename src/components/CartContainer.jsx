import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector(state => state.cart)

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <>
            <section className='cart'>
                <header>
                    <h2>your Bag</h2>
                </header>
                <article>
                    {cartItems.map(item => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </article>
                <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>
                            total <span>${total}</span>
                        </h4>
                    </div>
                    <button className='btn clear-btn'>
                        clear cart
                    </button>
                </footer>
            </section>

        </>

    )
}

export default CartContainer


// 