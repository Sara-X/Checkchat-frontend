import React from 'react'
import { Message, Transition } from 'semantic-ui-react'

export default function Alertnouser(props){
 return (
  <Transition visible={props.IsAlertnullcontent} animation='scale' duration={100}>
   <Message id='alert' negative size='big'>
    <Message.Header>用户名或密码不可为空!</Message.Header>
   </Message>
  </Transition>
 )
}