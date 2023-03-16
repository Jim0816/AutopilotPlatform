import React, { Component } from 'react'
import car from './index.module.css'

import staticIcon from '../../../asserts/photo/develop/static.png'
import moveIcon from '../../../asserts/photo/develop/move.png'
import resultIcon from '../../../asserts/photo/develop/result.png'

// 车辆控制模块
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
      <div className={car.container}>
        车辆控制
      </div>
    )
  }
}
