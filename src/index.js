import React,{useContext,useReducer,lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store/configStore';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Loading from './components/loading'

//import Home from './components/home';
const Home=lazy(()=>import('./components/home'))


ReactDOM.render(

  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route  exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
      </Suspense>
  </Provider>
,
  document.getElementById('root')
);
