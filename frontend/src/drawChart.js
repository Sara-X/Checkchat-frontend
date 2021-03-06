var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    color: ['#EE6363'],
    title: {
        text: 'Correctness Rate',
        // subtext: '假数据'
        // link:'https://www.baidu.com/'
        x:'center',
        top: '4%',
        textStyle: {
            // color:'#8B658B',
            fontStyle: 'normal',
            fontWeight:'bolder',
            fontFamily:'broadway',
            fontSize: 30
            // textBorderColor:'#EE2C2C'
        }
    },

    tooltip: {},

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

    radar: {
        shape: 'circle',
        center:['50%','30%'],
        radius: '30%',
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
    left: '40%',
    right: '40%',
    bottom: '5%',
    top: '50%',                
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

    series: [{
        name: '个人能力',
        type: 'radar',
        areaStyle: {normal: {}
                    },
        data : [
            {
                value : []
            },
        ]
    },{
        type: 'bar',
        data: []
    }]
};;

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// 读取json数据
myChart.showLoading();
$.get('userData.json', function(go){
    // 填入数据
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