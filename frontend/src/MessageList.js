import React, { useContext, useEffect } from 'react'
import MessageItem from './MessageItem'
import RobotTypingItem from './RobotTypingItem'
import { MessageManger } from './MessageProvider'
import AlertMessage from './AlertMessage'
import LineMarkerEcharts from './MessageReport'

export default function MessageList(props){
	const [ robotState ] = useContext(MessageManger)[2]
	const [ messageState ] = useContext(MessageManger)[3]
	const state = useContext(MessageManger)[2][0]
	console.log(state.title)
	
	let message = []
	let x = [ messageState.mixMessage, messageState.enMessage, messageState.cnMessage, messageState.stofMessage ]
	message = x[robotState.index]

	function scrollToBottom(){
		document.getElementById('message-list').scrollTop = document.getElementById('message-list').scrollHeight
	}

	useEffect(() => {
		return () => {
			scrollToBottom()
		}
	}, x)

	if (state.title === "小说"){
	return (
		<div onLoad={() => scrollToBottom()} id='message-list'>
			<LineMarkerEcharts />
		</div>
		)
	}
	else{
	return (
		<div onLoad={() => scrollToBottom()} id='message-list'>
			<AlertMessage isAlert={props.isAlert} />
			{message ? (
				message.map((data,index) => {
					return (
							<MessageItem key={data.id} type={data.type} data={data.text} time={data.time} icon={robotState.icon} index={index} />
					)
				})
			) : null}
			<RobotTypingItem type={'typing'} mode={robotState.mode} icon={robotState.icon} />
		</div>
		)
	}
}
