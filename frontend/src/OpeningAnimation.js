import React, { useState } from 'react'
import { Image, Transition, List } from 'semantic-ui-react'
import axios from 'axios'
import chick from './styles/chick.gif'
import word from './styles/word.gif'
import Alertrepwdwrong from './Alertrepwdwrong'
import Alertnouser from './Alertnouser'
import Alertnullcontent from './Alertnullcontent'
import Alertwrongpwd from './Alertwrongpwd'
import sys_word from './styles/sys.png'
import welcome_word from './styles/welcome.png'


export default function OpeningAnimation(props) {
    const [IsLogin, setIsLogin] = useState(false)
    const [IsRegister, setIsRegister] = useState(false)
    const [IsAlertnouser, setIsAlertnouser] = useState(false)
    const [IsAlertrepwdrong, setIsAlertrepwdrong] = useState(false)
    const [IsAlertwrongpwd, setIsAlertwrongpwd] = useState(false)
    const [IsAlertnullcontent, setIsAlertnullcontent] = useState(false)

    function handleloginr() {
        setIsLogin(true)
        setIsRegister(true)
        document.getElementById('opening_left').style.display = 'none'

    }

    async function PostUser() {     //发生错误返回0，正确返回1
        var user = document.getElementById('user').value
        var password = document.getElementById('password').value
        var ppp = {
            'user': user,
            'password': password,
        }
        let res = await axios.post("http://47.103.117.186:8000/user_login", ppp)
        console.log(res)
        return res

    }

    async function handlelogin() {

        setIsAlertwrongpwd(false)
        PostUser().then(
            (res) => {
                // request success with status code 200
                if (res.data.number === 0) {
                    setIsAlertwrongpwd(true)
                    props.setIsStarted(false)
                }
                else {
                    props.setIsStarted(true)
                    document.getElementById('opening_main').style.display = 'none'
                }
            }

        )
    }

    async function PostRegister() { //用户不存在返回1 两次密码不一致返回2 没有错误返回3
        var user = document.getElementById('user_r').value
        var password_r = document.getElementById('password_r').value
        var repassword = document.getElementById('repassword').value
        console.log(user)
        var ppp = {
            'user': user,
            'password': password_r,
            'repassword': repassword,
        }
        let res = await axios.post("http://47.103.117.186:8000/user_register", ppp)
        console.log(res)
        return res
    }


    async function handleRegister() {
        setIsAlertnouser(false)
        setIsAlertrepwdrong(false)
        setIsAlertnullcontent(false)
        PostRegister().then(
            (res) => {
                // request success with status code 200
                if (res.data.number === 1) {
                    setIsAlertnouser(true)
                }
                else if (res.data.number === 2) {
                    setIsAlertrepwdrong(true)
                }
                else if (res.data.number == 4){
                    setIsAlertnullcontent(true)
                }
                else {
                    props.setIsStarted(true)
                    document.getElementById('opening_main').style.display = 'none'
                }
            }

        )
    }



    return (
        <div id='opening_main'>
            <div id='opening_left'>
                {/* <Image id='system_word' src={sys_word} /> */}

                <Alertwrongpwd IsAlertwrongpwd={IsAlertwrongpwd} />
                <Transition visible={!props.IsStarted && !IsLogin && !IsRegister} animation='fade up' duration={300}>
                    <table id='table_login'>
                        <td>
                            <tr>
                                <Image id='system_word' src={sys_word} />
                            </tr>
                            <tr>
                                <Image id='welcome_word' src={welcome_word} />
                            </tr>
                            <tr>
                                <input type="text" id='user' placeholder='  ID: Type your id...' ></input>
                            </tr>
                            <tr>
                                <input type="password" id='password' placeholder='  Password: Type your password...'></input>
                            </tr>
                            <tr>
                                    <div onClick={() => handlelogin()}><button id='btn_login' type="primary">登 录</button></div>
                                    <div onClick={() => handleloginr()}><button id='btn_register'>注 册</button></div>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <Image id='main_img_word' src={word} />
                            </tr>
                            <tr>
                                <Image id='main_img_chick' src={chick} />
                            </tr>

                        </td>

                    </table>
                </Transition>
            </div>
            <div id='opening_left2'>
                <Alertnouser IsAlertnouser={IsAlertnouser} />
                <Alertnullcontent IsAlertnullcontent={IsAlertnullcontent} />
                <Alertrepwdwrong IsAlertrepwdrong={IsAlertrepwdrong} />

                <Transition visible={!props.IsStarted && IsLogin && IsRegister} animation='fade up' duration={300}>
                    <table id='table_register'>
                        <td>
                            <tr>
                                <Image id='system_word' src={sys_word} />
                            </tr>
                            <tr>
                                <Image id='welcome_word' src={welcome_word} />
                            </tr>
                            <tr>
                                <input type="text" id='user_r' placeholder='  ID: Type your name...'></input>
                            </tr>
                            <tr>
                                <input type="password" id='password_r' placeholder='  Password: Type your password...'></input>
                            </tr>
                            <tr>
                                <input type="password" id='repassword' placeholder='  Type your password again...'></input>
                            </tr>
                            <tr>
                                <button type="primary" id='btn_register' onClick={() => handleRegister()}>注 册</button>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <Image id='main_img_word' src={word} />
                            </tr>
                            <tr>
                                <Image id='main_img_chick' src={chick} />
                            </tr>
                        </td>

                    </table>
                </Transition>
            </div>
        </div >
    )
}

