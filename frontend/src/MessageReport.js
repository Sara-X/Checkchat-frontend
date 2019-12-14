import React from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios'
import figure_info from './styles/figure_info.png'


class LineMarkerEcharts extends React.Component{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //构造函数是唯一可以给this.state赋值的地方
            
            data: {
                "numbers": [10, 50, 90, 70, 50, 10, 50, 90, 70, 50, 10, 50, 90, 70, 50,
                            10, 50, 90, 70, 50, 100],
                "wrongTypes": ["形容词错误", "副词错误", "连接词错误", "限定词错误", "名词使用错误", "名词单复数", 
                               "介词错误","代词错误", "标点符号错误", "动词错误", "缩略形式错误",
                               "相同词源但是词性错误", "大小写或空格错误", "其他错误", "拼写错误", 
                               "词的顺序错误", "动词形式", "动词时态错误", "动词词性变换", 
                               "主谓不一致", "其余错误"],
                "skill":[80, 90, 100, 70, 50, 40, 60]   
            }
            
            };
        };



    componentDidMount() {
        //TODO user_id from login
        // generateUserId();
        let data = {
                        'user_id': 1
                    };
        console.log('test1');
        console.log(data)
        axios.post("http://47.103.117.186:8000/report", {'user_id':1})
            .then(res => {
                console.log('test');
                console.log('test', res);
                this.setState(res.data);
            //    const err_types = res.data.data.children.map(obj => obj.data)
            //   console.log(err_types);
            //  this.setState(err_types);
            }).catch(function (err) {
                console.log('todo');
                console.log(err);
            });
        };
            

    getOption=()=>{
        const option = {
            toolbox: {
                show: true,
                iconStyle:{
                    borderColor:'white',
                },
                feature: {
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {
                        backgroundColor: 'rgb(23, 23, 23)'
                    }
                }
            },

            tooltip: {
            },

            radar: {
                    shape: 'circle',
                    center:['50%','28%'],
                    radius: '40%',
                    splitLine:{
                        show: false,
                        lineStyle:{
                            color:['rgba(50, 205, 50, 1)']
                        }
                    },
                    splitNumber:5,
                    splitArea:{
                        areaStyle:{
                            color:['rgba(255,250,250,0.8)','rgba(255,250,250,0.7)','rgba(255,250,250,0.4)','rgba(255,250,250,0.3)','rgba(255,250,250,0.1)']
                        }
                    },
                    name: {
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    indicator: [
                        { name: '修饰词错误', max: 100},
                        { name: '连接词错误', max: 100},
                        { name: '动词错误', max: 100},
                        { name: '名词形式错误', max: 100},
                        { name: '拼写错误', max: 100},
                        { name: '介词错误', max: 100},
                        { name: '主谓不一致', max: 100}
                    ],
                    axisLine: {
                        lineStyle: {
                            color: 'white',
                            width: 1,
                        }
                    }
                },
            
            grid: {
                    left: '8%',
                    right: '5%',
                    bottom: '20%',
                    top: '60%',                
                    backgroundColor: '#FFFAFA'  //也可用rgb or rgba: eg: 'rgb(125,125,125)'
                },

            xAxis: {
                    position:'left',
                    type: 'category',
                    boundaryGap: true,
                    nameGap: 150,
                    data: this.state.data['wrongTypes'],
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    axisLabel:{
                        fontWeight: '400',
                        fontFamily: 'monospace',
                        fontSize: 10,
                        rotate: 45,
                        color: 'white'
                    }
                },
            
            yAxis: {
                    type: 'value',
                    //min: 0,
                    //max: 100,
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    axisLabel:{
                        formatter: '{value} %',
                        fontSize: '90%',
                        fontFamily: 'monospace',
                        color:'white'
                    },
                },
            

            graphic: [
                {
                    type: 'group',
                    left: '75%',
                    top: 'center',
                    children: [
                        {
                            type: 'image',
                            // left: '20%',
                            // bottom: '80%',
                            style: {
                                image: figure_info,
                                x:28,
                                y:200,
                                width: 120,
                                height: 30,
                            }
                        },
                    ]
                }
            ],
            
            // load data
            series: [
                    {
                        color:'white', 
                        name: '语法技能树',
                        type: 'radar',
                        symbolSize:0,
                        areaStyle: {normal: {
                            opacity:0.8,
                            color: {
                                type: 'linear',
                                x:0,
                                y:0,
                                x2:1,
                                y2:0,
                                colorStops:[{
                                    offset: 0, color:'#F4C316'
                                },{
                                    offset: 1, color:'#E3899D'
                                }],
                                globalCoord: false
                            }
                        }},
                        data : [this.state.data['skill']]
                    },
                    {
                        type: 'bar',
                        barCategoryGap: '40%',
                        data: this.state.data['numbers'],
                        itemStyle:{
                            emphasis:{
                                barBorderRadius: 8
                            },
                            normal:{
                                barBorderRadius: 8
                            }
                        },
                        color:{
                            type: 'linear',
                            x:0,
                            y:0,
                            x2:0,
                            y2:1,
                            colorStops:[{
                                 offset: 0, color:'#F4C316'
                            },{
                                 offset: 1, color:'#E3899D'
                            }],
                            globalCoord: false
                        }
                    }]
                    
            };
        return option;
    }
    
         
        
    
        
    
    render(){
        return (
                    <ReactEcharts
                        title='hi'
                        option={this.getOption()}
                        style={{height: '100%', width: '100%'}}
                        className='react_for_echarts'
                         />
        )
    }
}
    
    

export default LineMarkerEcharts
