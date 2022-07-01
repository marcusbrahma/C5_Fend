import axios from "axios";
import React, { Component } from "react";
import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import style from "./Landing.module.css";

export class LandingPage extends Component {
  state = {
    products: [],
  }

  async componentDidMount () {
    try {
      const { data } = await axios.get(`http://localhost:8001/api/products`);
      this.setState({ products: data})
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  
  render() {
    const { products } = this.state
    // const products = [{title: "Biscuits", price: 60}, {title: "Butter", price: 60},{title: "Milk", price: 60},{title: "Bread", price: 60},]
    return (
      <LoaderWrapper>
        <div className={style.container}>
          <div className={style.innerContainer}>Products (Customer side)</div>
          <div className={style.listContainer}>
            {products.map((product, index) => {
              return (
                <div className={style.list} style={{
                  borderBottom: index === products.length - 1 ? 'null' : '1px solid gainsboro'
                }}>
                  <p className={style.productIndex}>{index+1}.</p>
                  <p className={style.productTitle}>{product.title}</p>
                  <p className={style.productPrice}>Cart: {product.cart}</p>
                  <img src={product.image} alt={product.title} className={style.productImage} />
                  {/* <div className={style.button}><p>Edit</p></div> */}
                </div>
              );
            })}
          </div>
        </div>
      </LoaderWrapper>
    );
  }
}

export default LandingPage;
