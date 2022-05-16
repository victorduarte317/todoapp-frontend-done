import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './main/routes'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('app'))