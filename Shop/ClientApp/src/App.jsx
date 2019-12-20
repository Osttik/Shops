import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Login from './components/Login';
import ProductContent from './components/ProductContent';

import './custom.css'

export function changeProperties(u, r, p){
    user = u;
    rules = r;
    product = p;
}

const user = 0;
const rules = 0;
const product = 0;

export default () => (
    <Layout>
        <Route path='/product-content' component={ProductContent} />
        <Route path='/login' component={Login} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route exact path='/home' component={Home} />
    </Layout>
);
