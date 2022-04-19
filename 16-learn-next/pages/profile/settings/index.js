import React, { memo } from 'react'
import Layout from '../layout'
// import {InfoWrapper} from './style'

export default memo(function ProfileSetings() {
    return (
        <Layout>
            <h2>ProfileSetings</h2>
            <span>我的名字：coderwhy</span>
        </Layout>
    )
})
