import { Input, Button } from 'antd'
import React, { PureComponent } from 'react'
import moment from 'moment'

export default class HYHomeRecommend extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea
          rows={4}
          value={this.state.content}
          onChange={e => {
            this.handleChange(e)
          }}
        />
        <Button
          type="primary"
          onClick={e => {
            this.addComment()
          }}
        >
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
      avatar: 'https://avatars.githubusercontent.com/u/18374110?s=40&v=4',
      nickname: 'coder',
      datetime: moment(),
      content: this.state.content,
    }
    this.props.submitComment(commentInfo)
  }
}
