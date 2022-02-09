import React, {useState} from 'react'
import styles from "./ArrayState.module.css"

function ArrayState() {

    const [cart, setCart] = useState(() => {
        return getCart();
    });
    
    
    function handleClick() {
        setCart((prevCart) => {
            return [...prevCart, "Tofu"]
        })
        // const newCart = [...cart];
        // newCart.push("tofu");
        // setCart(newCart);

    }

    // const localStorage = {
    //     myCart: [];
    // }

    function getCart() {
        const rawData = window.localStorage.getItem("myCart");
        if (!rawData) {
            return []
        }
        const data = JSON.parse(rawData)

        return data;
    }


    function saveCart() {
        const data = JSON.stringify(cart);
        window.localStorage.setItem("myCart", data)
    }


    function resetCart() {
        window.localStorage.removeItem("myCart")
        setCart([])
    }



    return ( 
        <div>
            <input type="text" />
            <button onClick={handleClick}>Add item</button>
            <button onClick={saveCart}>Save</button>
            <button onClick={resetCart}>Reset</button>
        <ul>
            { cart.map((cartItem) => {
                return <li>{cartItem}</li>
            }) }
        </ul>
      </div>
  )
}

export default ArrayState