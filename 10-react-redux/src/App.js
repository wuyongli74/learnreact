import React, { PureComponent } from 'react'
import About from './pages/about'
// import About from './pages/about3'
// import About from './pages/about2'
import Home from './pages/home1-手动和redux联系'
// import Home from './pages/home2-自定义的connect'
// import Home from './pages/home3-react-redux-connect'
// import Home from './pages/home4-redux-thunk使用';
// import Home from './pages/home5-redux-saga使用'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
