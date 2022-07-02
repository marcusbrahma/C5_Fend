import axios from "axios";
import React, { Component } from "react";
import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import style from "../LandingPage/Landing.module.css";
import EditPopup from "./EditPopup";

export class Product extends Component {
  state = {
    openPopup: false,
    products: [],
    activetitle: '',
    activeOrder: '',
    activeid: null
  }

  async componentDidMount () {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/products`);
      this.setState({ products: data})
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  handleEdit = (title,Order,id) => {
    console.log({title,Order,id})
    this.setState({openPopup: true,    
    activetitle:title,
    activeOrder: Order ,
    activeid: id}
    
    );
  }

  closePopup = () => {
    this.setState({openPopup: false});
  }

  save = async(title, price, id, image) => {
    console.log({title, price});
    try {
      const { data } = await axios.put(`http://localhost:8000/api/products/${id}`,{title:title,Order:price});
      console.log({data})
      this.setState({ products: data})
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  render() {
    const { products } = this.state
    // const products = [{title: "Biscuits", price: 60}, {title: "Biscuits", price: 60},{title: "Biscuits", price: 60},{title: "Biscuits", price: 60},]
    return (
      <LoaderWrapper>
        {
          this.state.openPopup && <EditPopup closePopup={this.closePopup} save={this.save} 
          title = {this.state.activetitle}
          Order = {this.state.activeOrder}
          id = {this.state.activeid} />
        }
        <div className={this.state.openPopup ? "blur_background_screen current__scrollbar" : ""}>
        <div className={style.container}>
          <div className={style.innerContainer}>Products (Admin side)</div>
          <div className={style.listContainer}>
            {products.map((product, index) => {
              return (
                <div className={style.list} style={{
                  borderBottom: index === products.length - 1 ? 'null' : '1px solid gainsboro'
                }}>
                  <p className={style.productIndex}>{index+1}.</p>
                  <p className={style.productTitle}>{product.title}</p>
                  <p className={style.productPrice}>Order:{product.Order}</p>
                  <img src={product.image} alt={product.title} className={style.productImage} />
                  <div className={style.button} id= {style.Edit} onClick={()=>this.handleEdit(product.title,product.Order,product.id)}><p>Edit</p></div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </LoaderWrapper>
    );
  }
}

export default Product;
