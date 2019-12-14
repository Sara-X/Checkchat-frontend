import React, { createContext, useState, useReducer } from 'react'
import robotReducer from './robotReducer'
import messageReducer from './MessageReducer'
import { mixRobotIcon } from './styles/icons'
//import checkchat from './styles/checkchat.jpg'
import liu from './styles/小流.jpg'

export const MessageManger = createContext()
export default function MessageProvider({ children }){
	const initRobotState = {
		action: 'TO_MIX',
		info: '纠错机器人，点击进入造句模块，AI智能纠正语法错误',
		mode: 'mix',
		title: '小流 ',
		icon: liu,
		index: 0,
	}

	let initMessageState = { mixMessage: [], enMessage: [], cnMessage: [], stofMessage: [] }
	if (typeof localStorage !== 'undefined') {
		if (!localStorage.message) {
			localStorage.setItem('message', JSON.stringify(initMessageState))
		}
	}

	let messageList = JSON.parse(localStorage.getItem('message'))
	const [ input, setInput ] = useState([])
	const reducer = useReducer(robotReducer, initRobotState)
	const mesReducer = useReducer(messageReducer, messageList)
	return (
		<div>
			<MessageManger.Provider value={[ input, setInput, reducer, mesReducer ]}>{children}</MessageManger.Provider>
		</div>
	)
}
