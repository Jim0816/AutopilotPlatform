import React, { Component } from 'react'
import develop from './index.module.css'
import editIcon from '../../asserts/photo/develop/edit.png'
import switchIcon from '../../asserts/photo/develop/switch.png'
import menuIcon from '../../asserts/photo/develop/menu.png'
import staticIcon from '../../asserts/photo/develop/static.png'
import moveIcon from '../../asserts/photo/develop/move.png'
import resultIcon from '../../asserts/photo/develop/result.png'

export default class index extends Component {
   
    state = {
       menuFlag: 1, //左边顶部按钮切换标志，1，2，3
    }

    render() {
        let {menuFlag} = this.state
        console.log(menuFlag)
        return (
            <div className={develop.container}>
                <div className={develop.bg}></div>
                <div className={develop.left}>
                    {/* 上方导航栏 */}
                    <div className={develop.left_top}>
                         {/* 标题 */}
                        <span className={develop.left_top_top}>
                            <img src={editIcon}/>
                            <p>开发者模式</p>
                            <img src={switchIcon} style={{float: 'right', cursor: 'pointer'}}/>
                        </span>
                        {/* 按钮切换 */}
                        <span className={develop.left_top_bottom}>
                            <span className={menuFlag == 1 ? develop.switch_btn_selected : develop.switch_btn_static} onClick={e => this.switchMenu(1)}>环境感知</span>
                            <span className={menuFlag == 2 ? develop.switch_btn_selected : develop.switch_btn_static} onClick={e => this.switchMenu(2)}>决策规划</span>
                            <span className={menuFlag == 3 ? develop.switch_btn_selected : develop.switch_btn_static} onClick={e => this.switchMenu(3)}>车辆控制</span>
                        </span>
                    </div>
                    
                    
                    <div className={develop.left_bottom}>
                        <div className={develop.show_box}>
                            <span className={develop.show_box_top}>
                                <img src={staticIcon}/>
                                <p>Static</p>
                            </span>
                            <span className={develop.show_box_bottom}></span>
                        </div>

                        <div className={develop.show_box}>
                            <span className={develop.show_box_top}>
                                <img src={moveIcon}/>
                                <p>Moving</p>
                            </span>
                            <span className={develop.show_box_bottom}></span>
                        </div>

                        <div className={develop.show_box}>
                            <span className={develop.show_box_top}>
                                <img src={resultIcon}/>
                                <p>Overview</p>
                            </span>
                            <span className={develop.show_box_bottom}></span>
                        </div>
                    </div>
                    {/* <div className={develop.box} style={{marginTop: '0px'}}>环境感知</div>
                    <div className={develop.box}>决策规划</div>
                    <div className={develop.box}>车辆控制</div> */}
                </div>
                
                
                {/* <div className={develop.left}>
                    
                </div>
                <div className={develop.right}></div> */}
            </div>
        )
    }


    // ===========================  自定义函数  ====================================

    // 切换菜单事件
    switchMenu = (flag) => {
        this.state.menuFlag = flag
        this.forceUpdate()
    }
}