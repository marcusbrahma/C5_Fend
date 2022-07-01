import React, { Component } from 'react'
import style from "../LandingPage/Landing.module.css";

class EditPopup extends Component {
    state = {
        title: this.props.title,
        price: this.props.Order,
    }
    titleChange = (e) => {
        const title = e.target.value;
        if (title){
            this.setState({ title: title });
        }
    }
    priceChange = (e) => {
        const price = e.target.value;
        if (price){
            this.setState({ price: parseInt(price) });
        }
    }

    save = () => {
        const { title, price } = this.state;
        this.props.save(title, price,this.props.id)
    }
  render() {
      const { title, price } = this.state;
    return (
      <div className={style.popupContainer}>
          <div className={style.popupContentContainer}>
              <div className={style.title}>
                  <label>Title</label>
                  <input type="text" value={title} onChange={this.titleChange} />
              </div>
              <div className={style.title}>
                  <label>Order</label>
                  <input type="number" value={price} onChange={this.priceChange} />
              </div>
              <div style={{
                  display: "flex",
                  justifyContent: "space-around"
              }}>
              
              <div className={style.button} style={{
                  backgroundColor: "orange",
              }} onClick={this.props.closePopup}><p>Close</p></div>
              <div className={style.button} style={{
                  backgroundColor: "red",
              }} onClick={this.props.delete}><p>Delete</p></div>
              <div className={style.button} onClick={this.save}><p>Save</p></div>
              </div>
          </div>
      </div>
    )
  }
}

export default EditPopup