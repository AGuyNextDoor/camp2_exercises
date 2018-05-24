import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'underscore';

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]

class List extends Component {
  render(){
    return(
        <li>{this.props.element}</li>
    );
  }
}


class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name =
      <span style={{color: 'blue'}}>
        {product.title}
      </span>;

    return (
      <tr>
        <td>{product.decathlon_id}</td>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends Component {
constructor(props){
  super(props);
  this.state = {
    array: [],
    temp: [],
    iteratorId: 0,
    iteratorTitle: 0,
    iteratorPrice: 0
  }
}

  orderArray(categ = "", it){
    let temp = [];
    if(categ === ""){
      return this.state.array = this.state.temp;
    }
    else {
      this.state.temp = _.sortBy(this.props.products, categ);
      temp = this.state.temp.map((product) => {
        return(
         <tr>
           <td>{product.decathlon_id}</td>
           <td>{product.title}</td>
           <td>{product.price}</td>
         </tr>
        );
      });
      if((it % 2) === 0){
        return temp;
       }
      else{
        return temp.reverse();
      }
    }
  }

  render() {
    if(this.state.array.length === 0){
      this.state.array = this.props.products.map((product) => {
        return(
        <tr>
          <td>{product.decathlon_id}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
        </tr>
      );});
    }

    return (
      <table>
        <thead>
          <tr>
            <th><button onClick={() => this.setState({array: this.orderArray("decathlon_id", this.state.iteratorId), iteratorId: this.state.iteratorId + 1})}>id</button></th>
            <th><button onClick={() => this.setState({array: this.orderArray("title", this.state.iteratorTitle), iteratorTitle: this.state.iteratorTitle + 1})}>Name</button></th>
            <th><button onClick={() => this.setState({array: this.orderArray("price", this.state.iteratorPrice), iteratorPrice: this.state.iteratorPrice + 1})}>Price</button></th>
          </tr>
        </thead>
        <tbody>{this.state.array}</tbody>
      </table>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Board! </h1>
        <ProductTable products= {products} />
      </div>
    );
  }
}

export default App;
