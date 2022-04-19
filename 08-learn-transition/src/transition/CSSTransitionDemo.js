import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

const { Meta } = Card

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true,
    }
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button
          onClick={e => {
            this.setState({ isShow: !isShow })
          }}
        >
          显示、隐藏
        </button>
        {/* in属性--根据其值显示隐藏(布尔值)
          timeout--控制内部元素加载卸载时长不是动画时长 
          unmountOnExit--卸载属性(布尔值) 
          appear--加载时的动画 */}
        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={300}
          unmountOnExit={true}
          appear
          onEnter={el => console.log('进入状态')}
          onEntering={el => console.log('正在进入')}
          onEntered={el => console.log('进入完成')}
          onExit={el => console.log('开始退出')}
          onExiting={el => console.log('退出状态')}
          onExited={el => console.log('退出完成')}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}
