import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/';
import Adicionar from './pages/Adicionar/';
import Comprar from './pages/Comprar/';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Adicionar} path="/adicionar" />
            <Route component={Comprar} path="/comprar" />
        </BrowserRouter>
    );
};

export default Routes;
