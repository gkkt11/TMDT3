import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'



const Routes = () => {
    return (
        // <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path ='/register' exact component={Register}/>
                <Route path='/catalog/:slug' component={Product}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/cart' component={Cart}/>
            </Switch>
        // </Router>
        
    )
}

export default Routes
