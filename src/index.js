import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import { Provider } from 'react-redux'



import store from './AppStateManagement/store'
import AppRouter from './routers/AppRouter'


const renderApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(renderApp, document.getElementById('root'))