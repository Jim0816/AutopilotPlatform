import React, { Component } from 'react'
import { DownOutlined, FrownFilled, FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import environment from './index.module.css'

import staticIcon from '../../../asserts/photo/develop/static.png'
import moveIcon from '../../../asserts/photo/develop/move.png'
import resultIcon from '../../../asserts/photo/develop/result.png'
import bodyIcon from '../../../asserts/photo/develop/body.png'
import dotIcon from '../../../asserts/photo/develop/dot.png'
import carIcon from '../../../asserts/photo/develop/car.png'


import LineChart from '../../Echarts/lineChart'



// static区域测试数据示例
const staticTreeData = [
  {
    title: '0000ffff',
    key: '0-0',
    children: [
      {
        title: 'type: car',
        key: '0-0-0',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
      {
        title: 'camera_source: 0111xxx',
        key: '0-0-1',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
    ],
  },
  {
    title: '0000ffff',
    key: '0-1',
    children: [
      {
        title: 'type: car',
        key: '0-1-0',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
      {
        title: 'camera_source: 0111xxx',
        key: '0-1-1',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
    ],
  },
  {
    title: '0000ffff',
    key: '0-2',
    children: [
      {
        title: 'type: car',
        key: '0-2-0',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
      {
        title: 'camera_source: 0111xxx',
        key: '0-2-1',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
    ],
  },
];


// moving区域测试数据示例
const moveTreeData = [
  {
    title: '0000ffff',
    key: '0-0',
    children: [
      {
        title: 'type: car',
        key: '0-0-0',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
      {
        title: 'camera_source: 0111xxx',
        key: '0-0-1',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
    ],
  },
  {
    title: '0000ffff',
    key: '0-1',
    children: [
      {
        title: 'type: car',
        key: '0-1-0',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
      {
        title: 'camera_source: 0111xxx',
        key: '0-1-1',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
    ],
  },
  {
    title: '0000ffff',
    key: '0-2',
    children: [
      {
        title: 'type: car',
        key: '0-2-0',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
      {
        title: 'camera_source: 0111xxx',
        key: '0-2-1',
        icon: <img src={dotIcon} style={{width: '15px', height: '15px', marginTop: '-3px'}}/>,
      },
    ],
  },
];

//图标测试数据
const chart = {
  title: "测试结果",
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  values: [150, 230, 224, 218, 135, 147, 260]
}


// 环境感知模块
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
      <div className={environment.container}>
        <div className={environment.show_box}>
            <span className={environment.show_box_top}>
                <img src={staticIcon}/>
                <p>Static</p>
            </span>
            <span className={environment.show_box_bottom}>
              <Tree
                showIcon
                selectable={true}
                switcherIcon={<img src={bodyIcon} style={{width: '25px', height: '25px', marginTop: '-2px'}}/>}
                treeData={staticTreeData}
                style={{backgroundColor: '#323232', color: 'white', fontSize: '18px', fontWeight: 550}}
              />
            </span>
        </div>

        <div className={environment.show_box}>
            <span className={environment.show_box_top}>
                <img src={moveIcon}/>
                <p>Moving</p>
            </span>
            <span className={environment.show_box_bottom}>
              <Tree
                  showIcon
                  selectable={true}
                  switcherIcon={<img src={carIcon} style={{width: '25px', height: '25px', marginTop: '-1.5px'}}/>}
                  treeData={moveTreeData}
                  style={{backgroundColor: '#323232', color: 'white', fontSize: '18px', fontWeight: 550}}
              />
            </span>
        </div>

        <div className={environment.show_box}>
            <span className={environment.show_box_top}>
                <img src={resultIcon}/>
                <p>Overview</p>
            </span>
            <span className={environment.show_box_bottom}>
              <LineChart title={chart.title} labels={chart.labels} values={chart.values}/>
            </span>
        </div>
      </div>
    )
  }
}
