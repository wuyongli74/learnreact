import { Button, DatePicker, Space } from 'antd'
import React, { PureComponent } from 'react'
import classNames from 'classnames'
import HYHomeRecommend from './components/home/index'
import HYTitle from './components/title/index'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive: true,
      commentList: [],
    }
  }
  render() {
    const { isActive, commentList } = this.state
    const isBar = false
    const errClass = 'error'
    const warnClass = null

    return (
      <div>
        <div style={{ width: '500px', padding: '20px' }}>
          {commentList.map((item, index) => {
            return (
              <HYTitle
                key={item.id}
                comment={item}
                removeItem={e => {
                  this.removeComment(index)
                }}
              />
            )
          })}
          <HYHomeRecommend submitComment={this.submitComment.bind(this)} />
        </div>

        <div>
          {/* 原生React中添加class方法 */}
          <h2 className={'foo bar active title'}>标题1</h2>
          <h2 className={'title' + (isActive ? ' active' : '')}>标题2</h2>
          <h2 className={['title', isActive ? 'active' : ''].join(' ')}>标题3</h2>
          {/* classnames库添加class */}
          <h2 className={classNames('foo', 'bar', 'active', 'title')}>标题4</h2>
          <h2 className="foo bar active title">标题5</h2>
          <h2 className={classNames({ active: isActive, bar: isBar }, 'title')}>标题6</h2>
          <h2 className={classNames('foo', errClass, warnClass, { active: isActive })}>标题7</h2>
          <h2 className={classNames(['active', 'title'])}>标题8</h2>
          <h2 className={classNames(['active', 'title', { bar: isBar }])}>标题9</h2>

          <Space direction="vertical" size={12}>
            <DatePicker format="YYYY-MM-DD HH:mm:ss" />
            <DatePicker picker="month" />
          </Space>
        </div>

        <Button type="primary">按钮</Button>
      </div>
    )
  }
  submitComment(info) {
    console.log(info)
    this.setState({
      commentList: [...this.state.commentList, info],
    })
  }

  removeComment(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList,
    })
  }
}
