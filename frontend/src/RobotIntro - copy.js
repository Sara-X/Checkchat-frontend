import React, { useContext, useState } from 'react'
import { Image, Divider, Tab } from 'semantic-ui-react'
import InfoBoxTags from './InfoBoxTags'



export default function RobotIntro(props){
	const [ isAlert, setAlert ] = useState(false)


	if (props.state.title=='小利')
	{return (
		<div className='right_elements'>
			<div className='robot_icon'>
				<Image src={props.state.icon} />
			</div>
			<div className='robot_intro'>
				<span>{props.state.title}</span>
				<div>{props.state.intro}</div>
			</div> 
			
			<InfoBoxTags mode={props.state.mode} icon={props.state.icon} isAlert={isAlert} setAlert={setAlert}/> 
		</div>
		
		)
	}
	else
	{return (
		<div className='robot_intro'>
			<div className='robot_icon'>
				<Image src={props.state.icon} />
			</div>
			<div className='robot'>
				<span>{props.state.title}</span>
				<div>{props.state.intro}</div>
			</div>  
		</div>
	)}
	
}

