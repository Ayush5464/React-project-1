import React, { useEffect, useState } from "react";
import axios from "axios";
function Cart() {
  const [cartList, setCartList] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://fakestoreapi.com/carts");
      const cartData = await result.data;
      setCartList(cartData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {cartList?.map((currCart) => {
        return (
          <ul className="list-group" key={currCart.id}>
            <li className="list-group-items">user Id{currCart.userId}</li>
            <li className="list-group-items">user Id{currCart.date}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Cart;
