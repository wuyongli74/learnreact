import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'

export default class HYTitle extends PureComponent {
  render() {
    const { nickname, content, avatar } = this.props.comment
    return (
      <div>
        <Comment
          author={<a>{nickname}</a>}
          avatar={<Avatar src={avatar} alt={nickname} />}
          content={<p>{content}</p>}
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
          actions={[
            <span onClick={e => this.removeItem()}>
              <DeleteOutlined />
              删除
            </span>,
          ]}
        />
      </div>
    )
  }
  removeItem() {
    this.props.removeItem()
  }
}
