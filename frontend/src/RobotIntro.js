import React, { useContext, useState } from 'react'
import { Image, Divider, Tab } from 'semantic-ui-react'
import Table from './InfoBoxTags'
import InfoBoxTags from './InfoBoxTags'


export default function RobotIntro(props){
    const [ isAlert, setAlert ] = useState(false)
    if (props.state.title=='小流')
    {return (
        <div className='right_elements'>
            <div className='robot_icon'>
            </div>
            <div className='robot_intro'>
                <div>纠错机器人使用说明：</div>
                <div>hi~我是小流，跟我用中文对话可以陪你闲聊哦~不过，我最重要的任务是督促你主动进行英语语法纠错。</div>
                <div>跟我说一句英文句子~我们马上开始吧！</div>   
            </div>   
        </div>
        
        )
    }

    else if (props.state.title=='小利')
    {
        return(
            <div className='right_elements'>
                <div className='robot_icon'>
                </div>
                <div className='robot_intro'>
                    <div>练习机器人使用说明：</div>
                    <div>hi~我是小利，我的任务是帮助你进行错题训练！</div>
                    <div>以下错误标签是你的错误类型统计，错得比较多的地方不要灰心~多多练习~补充知识~就可以击败这个语法难点了！</div>
                    <div>快点击以下错误标签开始练习吧！</div>
                </div> 
                <InfoBoxTags mode={props.state.mode} icon={props.state.icon} isAlert={isAlert} setAlert={setAlert}/> 
            </div>
        )

    }

    else if (props.state.title=='小说')
    {
        return(
            <div className='right_elements'>
                <div className='robot_icon'>
                </div>
                <div className='robot_intro'>
                    <div>数据机器人使用说明：</div>
                    <div>hi~我是小说，根据你做题的情况，我们分析了你语法掌握的程度，出错比较多的地方记得多加练习~</div>
                    <div>快快保存图片，与同学一起分享你的语法技能表吧~</div>
                </div>
            </div>
        )

    }

    else
    {return (
        <div className='robot_intro'>
            <div className='robot_icon'>
                CheckChat 是一个英语纠错聊天室。</div>
                <div>这里有三个机器人，分别为:</div>
                <div>纠错机器人——小流，</div>
                <div>练习机器人——小利，</div>
                <div>展示机器人——小说。</div>
                <div>快点击机器人头像开始学习吧！</div>
                <div className='robot'>
            </div> 
        </div>
    )}
    
}
