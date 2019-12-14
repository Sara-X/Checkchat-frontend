import React from 'react'
import { Message, Transition } from 'semantic-ui-react'

export default function Alertnull(props){
	return (
		<Transition visible={props.Isnull} animation='scale' duration={100}>
			<Message id='alert' negative size='big'>
				<Message.Header>值不能为空，请输入！!</Message.Header>
			</Message>
		</Transition>
	)
}
