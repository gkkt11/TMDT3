import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

import Payment from '../pages/Checkout/Payment'



const Routes = () => {
    const user = true
    return (
        // <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contact' exact component={Contact}/>
                <Route path='/login' exact component={Login}/>
                <Route path ='/register' exact component={Register}/>
                <Route path='/catalog/:slug' component={Product}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/cart' exact component={Cart}/>
                
                <Route path='/payment' exact component={Payment}/>
            </Switch>
        // </Router>
        
    )
}

export default Routes
