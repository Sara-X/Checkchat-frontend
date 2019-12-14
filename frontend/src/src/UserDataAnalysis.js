var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#EE6363','rgba(255,140,0,0.5)','#FF8C00'],
    title: {
        text: 'Correctness Rate',
        // subtext: '假数据',
        // link:'https://www.baidu.com/',
        x:'center',
        top: '4%',
        textStyle: {
            // color:'#8B658B',
            fontStyle: 'normal',
            fontWeight:'bolder',
            fontFamily:'broadway',
            fontSize: 40
            // textBorderColor:'#EE2C2C'
        }
    },

    tooltip: {
        // formatter:'{b}: {c}%'
    },

    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },

    // legend: {
    //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    // },

    // draw radar figure
    radar: {
        shape: 'circle',
        center:['50%','28%'],
        radius: '25%',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [4, 6]
           }
        },
        indicator: [
           { name: '主谓不一致', max: 100},
           { name: '动词冗余', max: 100},
           { name: '形容词冗余', max: 100},
           { name: '副词残缺', max: 100},
           { name: '副词冗余', max: 100},
           { name: '动词时态错误', max: 100},
           { name: '其他冗余', max: 100}
        ]
        
    },

    grid: {
      left: '30%',
      right: '30%',
      bottom: '5%',
      top: '45%',                
      backgroundColor: '#FFFAFA'  //也可用rgb or rgba: eg: 'rgb(125,125,125)'
    },

    xAxis: {
        type: 'value',
        // boundaryGap: [0, 0.01],
        min: 0,
        max: 100,
        axisLabel:{
            formatter: '{value} %',
            fontSize: '90%',
            fontFamily: 'monospace'
        }
    },

    yAxis: {
        position:'left',
        type: 'category',
        boundaryGap: true,
        nameGap: 150,
        axisLabel:{
            fontWeight: '600',
            fontFamily: 'monospace',
            fontSize: '85%'
        }
    },

    //set for water mark
    graphic: [
        // logo
        // {
        //     type: 'image',
        //     id: 'logo',
        //     right: '15%',
        //     top: 20,
        //     z: -10,
        //     bounding: 'raw',
        //     origin: [75, 75],
        //     style: {
        //         image: 'logo.jpg',
        //         width: 150,
        //         height: 150,
        //         opacity: 0.8
        //     }
        // },
        // words
        {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: '25%',
            bottom: '15%',
            z: 100,
            children: [
                {
                    type: 'rect',
                    left: 'center',
                    top: 'center',
                    z: 100,
                    shape: {
                        width: 500,
                        height: 50
                    },
                    style: {
                        fill: 'rgba(0,0,0,0.3)'
                    }
                },
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    z: 100,
                    style: {
                        fill: '#fff',
                        text: '47. 神 经 纠 错 大 队',
                        font: 'bold 30px Microsoft YaHei'
                    }
                }
            ]
        },
    ],

    // load data
    series: [
        {
            name: '个人能力',
            type: 'radar',
            symbolSize:0,
            areaStyle: {normal: {}},
            data : [
            {
                 value : []
            }]
        },
        {
            type: 'bar',
            barCategoryGap: '30%',
            data: [],
            // formatter:'{b}: {c} %'
        }]
        };

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// read json data
myChart.showLoading();
$.get('userData.json', function(go){
    // fill in data
    myChart.hideLoading();
    myChart.setOption({
        yAxis:{
                data: go.wrongTypes
        },
        series:[{
            name: '个人能力',
            type: 'radar',
            data: [{
                value: go.skill
            }]
        },{
            type: 'bar',
            data: go.numbers
        }]
    });

});