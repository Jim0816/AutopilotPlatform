import React, { Component } from 'react'
import decision from './index.module.css'

import staticIcon from '../../../asserts/photo/develop/static.png'
import moveIcon from '../../../asserts/photo/develop/move.png'
import resultIcon from '../../../asserts/photo/develop/result.png'

// 决策规划模块
export default class index extends Component {

  state = {
    
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={decision.container}>
        决策规划
      </div>
    )
  }
}
