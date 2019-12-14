import React from 'react'
import { Message, Transition } from 'semantic-ui-react'

export default function Alertrepwdwrong(props){
	return (
		<Transition visible={props.IsAlertrepwdrong} animation='scale' duration={100}>
			<Message id='alert' negative size='big'>
				<Message.Header>两次输入的密码不一致，请重新输入!</Message.Header>
			</Message>
		</Transition>
	)
}
