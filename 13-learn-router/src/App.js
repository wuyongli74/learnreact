import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import {
  withRouter,
  // BrowserRouter, Link, Route,Switch,
  NavLink,
} from 'react-router-dom'
import './App.css'
// import Home from './pages/home'
// import About from './pages/about'
// import Profile from './pages/profile'
// import NoMatch from './pages/noMatch'
// import User from './pages/user'
// import Login from './pages/login'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Detail2 from './pages/detail2'
// import Detail3 from './pages/detail3'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      links: [
        { to: '/', title: '首页' },
        { to: '/about', title: '首页' },
        { to: '/', title: '首页' },
      ],
    }
  }

  render() {
    const id = 'ava'
    const info = { name: 'why', age: 18, height: 1.89 }

    return (
      <div>
        {/* <BrowserRouter> */}
        {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}
        {/* 1.NavLick的使用 */}
        {/* <NavLink to="/" activeStyle={{ color: 'red' }}>
            首页
          </NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/profile">我的</NavLink> */}
        <NavLink exact to="/" activeClassName="link-active">
          首页
        </NavLink>
        <NavLink to="/about" activeClassName="link-active">
          关于
        </NavLink>
        <NavLink to="/profile" activeClassName="link-active">
          我的
        </NavLink>
        <NavLink to="/user" activeClassName="link-active">
          用户
        </NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">
          详情
        </NavLink>
        <NavLink to={`/detail2?name=why&age=18`} activeClassName="link-active">
          详情2
        </NavLink>
        <NavLink
          to={{
            pathname: '/detail3',
            search: '?name=abc',
            state: info,
          }}
          activeClassName="link-active"
        >
          详情3
        </NavLink>
        <NavLink to="/acv" activeClassName="link-active">
          acv
        </NavLink>
        <button
          onClick={e => {
            this.product()
          }}
        >
          商品
        </button>

        {/* 2.Switch组件的作用: 路径和组件之间的映射关系 */}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/:id" component={User} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route path="/product" component={Product} />
          <Route component={NoMatch} />
        </Switch>*/}
        {/* </BrowserRouter> */}

        {renderRoutes(routes)}
      </div>
    )
  }

  product() {
    console.log(this.props.history)
    this.props.history.push('/product')
  }
}
export default withRouter(App)
