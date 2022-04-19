import React, { PureComponent } from 'react'
// import About from './pages/About'
// import About from './pages/About2'
// import About from './pages/About3'
import About from './pages/About4'
// import Home from './pages/Home4-redux-thunk使用'
import Home from './pages/Home5-redux-saga使用'

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
