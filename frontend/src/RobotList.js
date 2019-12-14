import React, { useState } from 'react'
// import { headRobotIcon, chineseIcon, stIcon, mixRobotIcon } from './styles/icons'
import RobotItem from './RobotItem'
import liu from './styles/小流.jpg'
import li from './styles/小利.jpg'
import shuo from './styles/小说.jpg'
import checkchat from './styles/checkchat.jpg'

export default function RobotList(){
	const initialState = [
		{
			title: '小流',
			info: '纠错机器人，点击进入造句模块，AI智能纠正语法错误',
			intro:'点击进入造句模块, AI智能纠正语法错误',
            use:'我可以帮你进行语法纠错哟',
			action: 'TO_MIX',
			mode: 'mix',
			icon: liu,
		},
		{
			title: '小利',
			info: '练习机器人，点击进入智能推送习题模块',
			intro: '点击进入智能推送习题模块',
            use:'我可以帮你进行语法纠错哟',
			action: 'TO_EN',
			mode: 'en',
			icon: li,
		},
		{
			title: '小说',
			info: '数据机器人，点击查看各语法知识掌握情况',
			intro: '点击查看各语法知识掌握情况',
            use:'我可以帮你进行语法纠错哟',
			action: 'TO_CN',
			mode: 'cn',
			icon: shuo,
		}
		
	]

	const [ robots ] = useState(initialState)

	return (
		<div className='sidelist'>
			<div className='side_header'>
			</div>
			{robots ? (
				robots.map((data) => {
					return <RobotItem key={data.title} data={data} />
				})
			) : null}
		</div>
	)
}
