import * as React from 'react';
import { connect } from 'react-redux';
import Filters from './Filters'
import ProductCard from './ProductCard'
import axios from "axios";

function sort(e, d){
  const sort = d.props.children
}

function filter(e, d){
  const filter = d.props.children
}

class Home extends React.Component {
  public render(){
    const products = axios.get(`/api/products/`).then(response => response)
    
    console.log(products, "products")
    return(
    <Filters 
      onSortChange = {sort}
      onFilterChange = {sort}
    />
    )
  }
}

export default connect()(Home);
