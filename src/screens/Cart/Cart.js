import React from "react";
import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import style from "./Cart.module.css";

const Cart = (props) => {
  return (
    <LoaderWrapper>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.title}>Shopping Cart</div>
          <div>
            {[].map((product) => {
              return (
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LoaderWrapper>
  );
};

export default Cart;
