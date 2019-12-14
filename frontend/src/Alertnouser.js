import React from 'react'
import { Message, Transition } from 'semantic-ui-react'

export default function Alertnouser(props){
	return (
		<Transition visible={props.IsAlertnouser} animation='scale' duration={100}>
			<Message id='alert' negative size='big'>
				<Message.Header>用户已存在，请重新输入!</Message.Header>
			</Message>
		</Transition>
	)
}
