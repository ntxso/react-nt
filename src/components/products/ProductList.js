import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { connect } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
import { Link } from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  handleDateChange = (newDate) => {
    this.setState({ date: newDate });
  };
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart=(product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName+ " eklendi",1)
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <h3>
          <Badge color="warning">Ürünler </Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        {/* <Calendar onChange={onChange} value={value}></Calendar> */}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün İsmi</th>
              <th>Fiyat</th>
              <th>Stok</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button color="info" size="sm" onClick={()=>this.addToCart(product)}>sepete ekle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="calendar-contaier">
          <h1 className="text-center">React Takvimi</h1>
          <div className="calendar">
            <Calendar onChange={this.handleDateChange} value={date}></Calendar>
          </div>
          <p className="text-center">
            <span className="bold">Seçilen Tarih:</span>{" "}
            {date.toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart:bindActionCreators(cartActions.addToCart,dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
