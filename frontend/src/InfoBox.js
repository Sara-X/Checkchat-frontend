import React, { useContext, useState }from 'react'
import { Grid, Divider, Image, Header,Button, Responsive } from 'semantic-ui-react'
import { gitIcon } from './styles/icons'
import checkchat from './styles/checkchat.jpg'
import infobox from './styles/infobox.png'
import threeRobot from './styles/threeRobot.png'

import { MessageManger } from './MessageProvider'
import Table from './InfoBoxTags'
import RobotIntro from './RobotIntro'


export default function InfoBox(){

	const state = useContext(MessageManger)[2][0]

	return (
		<Grid.Column tablet={16} widescreen={4} largeScreen={4}>
			<div className='info_box'>
				<div style={{ margin: 'auto' }}>
					<Image src={infobox} />
				</div>

				<Divider />
				<RobotIntro state={{ ...state }} />
							
				
				<div>
					<div className='git'>
						<Divider />
						<a href='https://www.liulishuo.com/' target='_blank' rel='noopener noreferrer'>
							<div className='github_box clickable'>
								<Image src={threeRobot} size='small' />
								<Header as='h3'>
									<Header.Content>
										流利说官网
										<Header.Subheader>Empower everyone to achieve their full potential.</Header.Subheader>
									</Header.Content>
								</Header>
							</div>
						</a>
					</div>
				</div>
			</div>
		</Grid.Column>
	)
}
