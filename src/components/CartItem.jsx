import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'

const CartItem = ({ id, img, title, price, amount }) => {
    return (

        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h5 className="item-price">${price}</h5>
                {/* remove button */}
                <button className="remove-btn" type="button">remove</button>
            </div>
            <div>
                {/* increase amount */}
                <button className="amount-btn" type="button">
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                {/* decrease amount */}
                <button className="amount-btn" type="button">
                    <ChevronDown />
                </button>
            </div>

        </article>
    )
}

export default CartItem