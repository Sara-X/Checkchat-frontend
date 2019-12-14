import React from 'react'
import { Message, Transition } from 'semantic-ui-react'

export default function Alertwrongpwd(props){
	return (
		<Transition visible={props.IsAlertwrongpwd} animation='scale' duration={5}>
			<Message id='alert' negative size='big'>
				<Message.Header>用户名或密码错误，请重新输入!</Message.Header>
			</Message>
		</Transition>
	)
}
