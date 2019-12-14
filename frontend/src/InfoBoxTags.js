import React, {useState, useEffect, useContext} from 'react'
import { Divider, Input, Button } from 'semantic-ui-react'
import { MessageManger } from './MessageProvider'
import axios from 'axios'
import send from './sound/send.mp3'
import receive from './sound/receive.mp3'
const sendSound = new Audio(send)
const receiveSound = new Audio(receive)
export 	const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)


export default function InfoBoxTags(props){
    const[errors, setErrors] = useState({err_types: [
        { type:'主谓不一致', freq:128 },
        { type:'动词冗余', freq:99 },
        { type:'形容词冗余', freq:50 },
        { type:'副词残缺', freq:20 },
        { type:'副词冗余', freq:6 },
        { type:'动词时态错误', freq:0},
        { type:'其他冗余', freq:0}
        ]})
    const [ input, setInput ] = useContext(MessageManger)
    const [ isReturned, setReturn ] = useState(true)
    const [ text, setText ] = useState('')
    const dispatch = useContext(MessageManger)[3][1]


    useEffect(() => {
        //TODO user_id from login
        // generateUserId();
        let data = {
        'user_id': 1
        };
        // console.log('test1');
        // console.log(data)
        axios.post("http://47.103.117.186:8000/user_error", {'user_id':1})
        .then(res => {
        // console.log('test');
        // console.log('test', res);
        setErrors(res.data);
        // const err_types = res.data.data.children.map(obj => obj.data)
        // console.log(err_types);
        // this.setState(err_types);
        }).catch(function (err) {
        // console.log('todo');
        // console.log(err);
        });
    },[]);
     
         
    async function getProblem(type){
		let data={
			'type':type,
			'user_id':1
		};
        // console.log(data)
        // console.log('request')
		let res = await axios.post("http://47.103.117.186:8000/recommend", data)
            console.log(res)
			return res
		}
	
	 
	
	async function recommend(errType){
		
		// Alert 'Wait for the robot' message
		if (isReturned !== true && errType !== '') {
			props.setAlert(true)
			setTimeout(() => {
				props.setAlert(false)
			}, 2500)
			return
		}
		// Input is not Empty
		if (errType && isReturned === true) {
			setReturn(false)
			sendSound.play()
			document.getElementById('textarea').value = ''
			let inputMessage = {
				text: errType,
				type: 'user',
				time: new Date().toLocaleTimeString(),
				id: 1,
			}
			setInput([ ...input, inputMessage ])
			//dispatch({
			//	type: props.mode,
			//	message: inputMessage,
            //})
            console.log('input')
            console.log(inputMessage)
			// Send Request
			getProblem(errType).then(
				(res) => {
					// request success with status code 200
					if (res.status === 200) {
						let outputMessage = {
							text: res.data.result,
							type: 'robot',
							time: new Date().toLocaleTimeString(),
							id: res.data.id,
                        }
                        console.log('out')
                        console.log(outputMessage)
                        
						dispatch({
							type: props.mode,
							message: outputMessage,
                        })
						if (!iOS) {
							receiveSound.play()
						}
						setText('')
						sendSound.load()
						setReturn(true)
						if (props.isAlert === true) {
							props.setAlert(false)
						}
					}
				},
				(error) => {
					setReturn(true)
				}
			)
		}
    }
    




    function renderTableData() {
        return errors.err_types.map((err_types, index) => {
        const { type, freq } = err_types //destructuring
        return (
         //    TODO updateMessage 替换成 recommend...
                       <button id='error_tags' onClick={() => recommend(type)} >
                           <span class='error_type'>
                             {type+' '}
                           </span>
                         <span id='error_freq'>
                             {freq}
                         </span>
                       </button>
         )
         })
     };
 
    
    
         
     
    return (
                
                <div>
                    <Divider />
                    <table id='err_types'>
                    <tbody> 
                        {renderTableData()}
                    </tbody>
                    </table>
                </div>
            )
        
      
    }
