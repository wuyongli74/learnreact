import { Button, Input } from 'antd'
import React, { PureComponent } from 'react'
import moment from 'moment'

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
    }
  }

  render() {
    return (
      <div>
        <Input.TextArea rows={4} value={this.state.content} onChange={e => this.handleChange(e)} />
        <Button type="primary" onClick={e => this.addComment()}>
          添加评论
        </Button>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    })
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      // id: Date.new(), 两者都可以
      avatar: 'https://avatars.githubusercontent.com/u/18374110?s=40&v=4',
      nickname: '稻草人！！',
      datetime: moment(),
      content: this.state.content,
    }
    console.log(this.state.content)
    // 调用
    this.props.submitComment(commentInfo)
    // 输入框为空
    this.setState({
      content: '',
    })
  }
}
