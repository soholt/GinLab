import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import RC2 from 'react-chartjs-2';
//console.log('RC2',RC2);
import { defaults } from 'react-chartjs-2';
//console.log('defaults',defaults);

// Disable animating charts by default.
defaults.global.animation = false;
//defaults.line.spanGaps = true;
//defaults.line.animation.duration = 0
//defaults.line.hover.animationDuration = 0; // duration of animations when hovering an item
//defaults.line.responsiveAnimationDuration = 0; // animation duration after a resize
defaults.global.elements.animation = { duration: 0 },
defaults.global.elements.hover = { animationDuration: 0, }, // duration of animations when hovering an item
defaults.global.elements.responsiveAnimationDuration = 0, // animation duration after a resize

//defaults.global.

defaults.global.defaultFontColor = '#FFF';
defaults.global.defaultColor = '#FFF';

//defaults.global.hover.mode = 'nearest';
//defaults.global.hover.mode = 'dataset';
/*
defaults.global.gridLines={
	color: "rgba(255,255,255,.3)",
	lineWidth:.5,
	zeroLineColor :"rgba(255,255,255,.7)",
	zeroLineWidth : 1
}

defaults.global.elements.scales = {xAxes:{}};
defaults.global.elements.scales.xAxes.ticks={
	//stepSize : 20,
	fontColor : "rgba(255,255,255,.7)",
	fontSize : 14
},
*/
defaults.global.pan = { // Assume x axis is the realtime scale
	enabled: true, mode: 'xy', rangeMin: { x: null, y: null }, rangeMax: { x: null, y: null },
};
defaults.global.zoom = {	// Speed of zoom via mouse wheel // (percentage of zoom on a wheel event)
	enabled: true, mode: 'y', rangeMin: { x: null, y: null }, rangeMax: { x: null, y: null }, speed: .1,
};

//defaults.global.elements.responsive = true; //






window.chartColors = {
	red: 'rgba(255, 99, 132,.3)',
	orange: 'rgba(255, 159, 64,.3)',
	yellow: 'rgba(255, 205, 86,1)',
	green: 'rgba(75, 192, 192,.3)',
	blue: 'rgba(54, 162, 235,.1)',
	purple: 'rgba(153, 102, 255,.3)',
	grey: 'rgba(201, 203, 207,.3)',
  white: 'rgba(255, 255, 255,.3)',
  pink: 'rgba(201, 100, 0,.3)',
};




//import 'chartjs-plugin-crosshair';
import 'chartjs-plugin-streaming';
import 'chartjs-plugin-zoom';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import     { faPlay, faPause, faRandom, faRetweet, faChartLine, faPrint, faSearch, faClock, faPowerOff, faCog, faCogs, faVolumeUp, faVolumeMute, faToggleOn, faToggleOff, faBug, faSave, faSearchPlus, faFillDrip, faDotCircle, faPoo } from '@fortawesome/free-solid-svg-icons' // theme
library.add( faPlay, faPause, faRandom, faRetweet, faChartLine, faPrint, faSearch, faClock, faPowerOff, faCog, faCogs, faVolumeUp, faVolumeMute, faToggleOn, faToggleOff, faBug, faSave, faSearchPlus, faFillDrip, faDotCircle, faPoo )



//import Button from 'react-bootstrap/Button';
import {ButtonToolbar } from 'react-bootstrap'; // or less ideally

import { Jumbotron, Col, Row} from 'reactstrap';
import {
  Alert,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';



import {
  RAudioContext,
  RAnalyser,
  RCycle,
  RDelay,
  RGain,
  RPanner,
  RPipeline,
  ROscillator,
	RSplitChannels,
  RChannelMerger,
	RBufferSource,
	RMediaStreamSource,
} from 'r-audio';


import Stream from '../Stream.jsx';

//au = {};
var scopeFreqOptions = {

  //width: 256,
  //height: 256,

  //responsive: true,
  //maintainAspectRatio: true,

  /////////animation: false,
  //animation: { duration: 0 },
  //hover: { animationDuration: 0, }, // duration of animations when hovering an item
  //responsiveAnimationDuration: 0, // animation duration after a resize

  title: { display: true, text: 'TimeDomain' },
  scales: { xAxes: [{ ticks: {
        //stepSize: 1,
        //maxTicksLimit:11,
      }
    }],

    yAxes: [{
      ticks: {
        //min: -200,
        //max: 200,
        //stepSize: 32,
        //beginAtZero: true,
        //precision:1,
      }
    }],

  },

  /*
  scales: {
    xAxes: [{
      type: 'logarithmic',

      position: 'bottom',
      ticks: {
        userCallback: function(tick) {
          var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
          if (remain === 1 || remain === 2 || remain === 5) {
            return tick.toString() + 'Hz';
          }
          return '';
        },
      },

      scaleLabel: {
        labelString: 'Frequency',
        display: true,
      }
    }],
  }*/

/*
            // Assume x axis is the realtime scale
            pan: {
                enabled: true,
                mode: 'xy',
                rangeMin: {
                    x: null,
                    y: null
                },
                rangeMax: {
                    x: null,
                    y: null
                },
            },
            zoom: {
                enabled: true,
                //drag: true,
                mode: 'y',
                rangeMin: {
                    x: null,
                    y: null
                },
                rangeMax: {
                    x: null,
                    y: null
                },
                // Speed of zoom via mouse wheel
			          // (percentage of zoom on a wheel event)
			          speed: .1,
            },


            plugins: {
                  crosshair: {
                    line: {
                      color: '#F66',  // crosshair line color
                      width: 1        // crosshair line width
                    },
                    sync: {
                      enabled: true,            // enable trace line syncing with other charts
                      group: 1,                 // chart group
                      suppressTooltips: false   // suppress tooltips when showing a synced tracer
                    },
                    zoom: {
                      enabled: true,                                      // enable zooming
                      zoomboxBackgroundColor: 'rgba(66,133,244,0.2)',     // background color of zoom box
                      zoomboxBorderColor: '#48F',                         // border color of zoom box
                      zoomButtonText: 'Reset Zoom',                       // reset zoom button text
                      zoomButtonClass: 'reset-zoom',                      // reset zoom button class
                    },
                    callbacks: {
                      beforeZoom: function(start, end) {                  // called before zoom, return false to prevent zoom
                        return true;
                      },
                      afterZoom: function(start, end) {                   // called after zoom
                      }
                    }
                  }
                },

                      */
};

var scopeTimeOptions = {


    //responsive: true,
    //responsive: false,
    //maintainAspectRatio: true, // maybe true for xy?

      /////////animation: false,
      //animation: { duration: 0 },
      //hover: { animationDuration: 0 },// duration of animations when hovering an item
      //responsiveAnimationDuration: 0, // animation duration after a resize

  title: { display: true, text: 'FrequencyDomain' },
  scales: {
    xAxes: [{ display: true, scaleLabel: { display: true, labelString: 'frequency' }, //type: 'logarithmic',


//          type: 'time',
//              time: {
  //                unit: 'millisecond'
    //            },
      //  id: 'first-x-axis',
        //type: 'linear',
      //  ticks: {
        //  beginAtZero:true
      //  }
      ticks:{ fontColor : "rgba(255,255,255,.7)", fontSize : 14 },//stepSize : 20,
        gridLines:{ color: "rgba(255,255,255,.3)", lineWidth:1, zeroLineColor :"rgba(200,200,200,.7)", zeroLineWidth : 1   }
      }],

      yAxes: [

/*
        { // multiaxis
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'left',
          id: 'y-axis-1',
        }, {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'right',
          id: 'y-axis-2',
        }
*/
      {

        //stacked: true,
      display: true,
      scaleLabel: { display: true, labelString: 'db'   },//position: 'bottom',

      ticks:{ fontColor : "rgba(255,255,255,.7)", fontSize : 14 },

          //stepSize : 10,
          //max: 0,
          //min: -200,

        //  suggestedMin: -250,
          //suggestedMax: 250,

      gridLines:{ color: "rgba(255,255,255,.3)", zeroLineColor :"rgba(255,255,255,.7)", zeroLineWidth : 1 },//lineWidth:.5,
        //stacked: true
      //    id: 'first-y-axis',
          //type: 'linear',
        }/*, {
          id: 'second-y-axis',
          type: 'linear'
        },
*/

      ]
    },

    // Events, https://www.chartjs.org/docs/latest/general/interactions/events.html
    //events: ['click'], // ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"]


//    layout: {
//      padding: {
//        left: 0,
//        right: 0,
//        top: 0,
        //bottom: 100
//      },
//    },

//chart:{ the associated chart
//    dataIndex: index of the current data
//    dataset: dataset at index datasetIndex
//    datasetIndex: index of the current dataset
//    color: [
//      'blue',    // color for data at index 0
//      'green',   // color for data at index 1
//      'red',  // color for data at index 2
//      'blue',  // color for data at index 3
//    ],
//},

  tooltips: {
    // Interaction Modes, https://www.chartjs.org/docs/latest/general/interactions/modes.html
    //mode: 'dataset', // mode: 'x', y, index, nearest, point
  },
  pan: { // Assume x axis is the realtime scale
		enabled: true, mode: 'xy', rangeMin: { x: null, y: null }, rangeMax: { x: null, y: null },
	},
  zoom: {	// Speed of zoom via mouse wheel // (percentage of zoom on a wheel event)
		enabled: true, mode: 'y', rangeMin: { x: null, y: null }, rangeMax: { x: null, y: null }, speed: .1,
  },
}

var scopeTimeData = {
  labels: [],
  datasets: [
    {borderWidth:1,label:'A',lineThickness:1,fill:false,lineTension:0.1,backgroundColor:'rgba(255,197,7,0.4)',borderColor:'rgba(255,197,7,1)',borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',pointBorderColor:'rgba(255,197,7,1)',pointBackgroundColor:'#fff',pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:'rgba(255,197,7,1)',pointHoverBorderColor:'rgba(220,220,220,1)',pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[0]},
    {borderWidth:1,label:'B',lineThickness:1,fill:false,lineTension:0.1,backgroundColor:'rgba(0,192,0,0.4)',borderColor:'rgba(0,192,0,1)',borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',pointBorderColor:'rgba(0,192,0,1)',pointBackgroundColor:'#fff',pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:'rgba(0,192,0,1)',pointHoverBorderColor: 'rgba(220,220,220,1)',pointHoverBorderWidth:1,pointRadius:1,pointHitRadius:10,data:[0]},
    {borderWidth:1,label:'C',lineThickness:1,fill:false,lineTension:0.1,backgroundColor:'rgba(175,0,0,0.4)',borderColor:'rgba(175,0,0,1)',borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',pointBorderColor:'rgba(175,0,0,1)',pointBackgroundColor:'#fff',pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:'rgba(175,0,0,1)',pointHoverBorderColor:'rgba(220,220,220,1)',pointHoverBorderWidth:1,pointRadius:1,pointHitRadius:10,data:[0]},
    {borderWidth:1,label:'D',lineThickness:1,fill:false,lineTension:0.1,backgroundColor:'rgba(0,0,192,0.4)',borderColor:'rgba(0,0,192,1)',borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',pointBorderColor:'rgba(0,0,192,1)',pointBackgroundColor:'#fff',pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:'rgba(0,0,192,1)',pointHoverBorderColor:'rgba(220,220,220,1)',pointHoverBorderWidth:1,pointRadius:1,pointHitRadius:10,data:[0]},
  ]
};


var scopeFreqData = {
  labels: [],
  datasets: [
    {borderWidth:1,label:'Ch1',lineThickness:1,fill:"start",//invert fill for negative numbers
      lineTension: 0.1,backgroundColor:'rgba(255,197,7,0.2)',borderColor:'rgba(255,197,7,1)',borderCapStyle:'butt',borderDash:[],borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255,197,7,1)',
      pointBackgroundColor: 'rgba(255,197,7,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255,197,7,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1.5,
      pointHitRadius: 10,
      data:[0],
      //data: [65, 59, 80, 81, 56, 55, 40,215,500],
      //data: [{x:0,y:0}, {x:123,y:35}, {x:333,y:11}, {x:777,y:66}, {x:1111,y:55}, {x:2222,y:12}, {x:3333,y:33},{x:4444,y:55},{x:5000,y:54},{x:10000,y:54},{x:20000,y:5}],
    },
    {borderWidth: 1,
      label: 'Ch2',
      lineThickness: 1,
      //fill: false,
      fill: "start",//invert fill for negative numbers
      lineTension: 0.1,
      backgroundColor: 'rgba(0,192,0,0.2)',
      borderColor: 'rgba(0,192,0,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0,192,0,1)',
      pointBackgroundColor: 'rgba(0,192,0,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0,192,0,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data:[0],
      //data: [ 55, 40,215,500, 65, 59, 80, 81, 56],
      //data: [{x:0,y:0}, {x:123,y:35}, {x:333,y:11}, {x:777,y:66}, {x:1111,y:55}, {x:2222,y:12}, {x:3333,y:33},{x:4444,y:55},{x:5000,y:54},{x:10000,y:54},{x:20000,y:5}],
    },
    {borderWidth: 1,
      label: 'Ch3',
      lineThickness: 1,
      //fill: false,
      fill: "start",//invert fill for negative numbers
      lineTension: 0.1,
      backgroundColor: 'rgba(175,0,0,0.2)',
      borderColor: 'rgba(175,0,0,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(175,0,0,1)',
      pointBackgroundColor: 'rgba(175,0,0,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(175,0,0,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data:[0],
      //data: [ 55, 40,215,500, 65, 59, 80, 81, 56],
      //data: [{x:0,y:0}, {x:123,y:35}, {x:333,y:11}, {x:777,y:66}, {x:1111,y:55}, {x:2222,y:12}, {x:3333,y:33},{x:4444,y:55},{x:5000,y:54},{x:10000,y:54},{x:20000,y:5}],
    },
    {borderWidth: 1,
      label: 'Math Ch4 = Ch1-Ch2',
      //fill: false,
      fill: "start",//invert fill for negative numbers
      lineTension: 0.1,
      backgroundColor: 'rgba(0,0,192,0.4)',
      borderColor: 'rgba(0,0,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0,0,192,1)',
      pointBackgroundColor: 'rgba(0,0,192,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0,0,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data:[0],
      //data: [ 55, 40,215,500, 65, 59, 80, 81, 56],
      //data: [{x:0,y:0}, {x:123,y:35}, {x:333,y:11}, {x:777,y:66}, {x:1111,y:55}, {x:2222,y:12}, {x:3333,y:33},{x:4444,y:55},{x:5000,y:54},{x:10000,y:54},{x:20000,y:5}],
    },
  ]
};

testData = {
  labels: [],
  datasets:[{label:'A',data:[]},{label:'B',data:[]},{label:'C',data:[]},{label:'D',data:[]},{label:'E',data:[]},{label:'F',data:[]}]
};


export default class Osc extends React.Component {

  au = {}; // audio context

  _frameId = null;

  _scopeAproxy = {};  //  analyser proxy
  _scopeBproxy = {};
  _scopeCproxy = {};
  _scopeLproxy = {};
  _scopeRproxy = {};

  _scopeTimeChartRef = {}; // ref to _scopeTimeChartRef
  _scopeFreqChartRef = {}; // ref to _scopeFreqChartRef
  _scopeXyChartRef = {};

  _scopeTimeData = {
    labels: [],
    datasets:[
      {label:'A',data:[]},
      {label:'B',data:[]},
      {label:'C',data:[]},
      {label:'M',data:[]},
      {label:'L',data:[]},
      {label:'R',data:[]},
    ]
  }; // data for _scopeTimeChart
  _scopeFreqData = {
    labels: [],
    datasets:[
      {label:'A',data:[]},
      {label:'B',data:[]},
      {label:'C',data:[]},
      {label:'M',data:[]},
      {label:'L',data:[]},
      {label:'R',data:[]},
    ]
  }; // data for _scopeTimeChart
  _scopeXyData = {
    labels: [],
    datasets:[
      {label:'AB',data:[]},
      {label:'AL',data:[]},
			{label:'LR',data:[]},
    ]
  }; // data for _scopeTimeChart

_osc1BufferData=[];
_osc2BufferData=[];

  constructor(props) {
    super(props);


    //this.myChart = React.createRef();

    this.state = {

_scopeFreqData:{},// scopeFreqData,
_scopeTimeData:{},// scopeTimeData,
_scopeXyData:{},

scopeFreqOptions:{
	title: { display: true, text: 'Frequency' },
	scales: {
		xAxes: [{
			display: true,

			//scaleLabel: { display: true, labelString: 'frequency' }, //type: 'logarithmic',
			ticks:{ fontSize : 14, },//stepSize : 20,
			gridLines:{ color: "rgba(200,200,200,.3)", lineWidth:1, zeroLineColor :"rgba(250,250,250,.8)", zeroLineWidth : 1.2 }
		}],
		yAxes: [{
			display: true,
			scaleLabel: { display: true, labelString: 'db'   },//position: 'bottom',
			ticks:{ fontSize : 14, beginAtZero: true, postition: 'bottom', min: -200},//ticks:{ fontColor : "rgba(255,255,255,.7)" },
			gridLines:{ color: "rgba(200,200,200,.3)", lineWidth:1, zeroLineColor :"rgba(250,250,250,.8)", zeroLineWidth : 1.2 },//lineWidth:.5,
		}]
	},
},



scopeTimeOptions:{
	title: { display: true, text: 'TimeDomain' },
	scales: {
		xAxes: [{
			display: true,
			//scaleLabel: { display: true, labelString: 'frequency' }, //type: 'logarithmic',
			ticks:{ fontSize : 14 },//stepSize : 20,
			gridLines:{ color: "rgba(200,200,200,.3)", lineWidth:1, zeroLineColor :"rgba(250,250,250,.8)", zeroLineWidth : 1.2 }
		}],
		yAxes: [{
			display: true,
			scaleLabel: { display: true, labelString: 'Volts'   },//position: 'bottom',
			ticks:{ fontSize : 14 },//ticks:{ fontColor : "rgba(255,255,255,.7)" },
			gridLines:{ color: "rgba(200,200,200,.3)", lineWidth:1, zeroLineColor :"rgba(250,250,250,.8)", zeroLineWidth : 1.2 },//lineWidth:.5,
		}]
	},
},
scopeXyOptions:{
	title: { display: true, text: 'X' },
	scales: {
		xAxes: [{
			display: true,
			//scaleLabel: { display: true, labelString: 'frequency' }, //type: 'logarithmic',
			ticks:{ fontSize : 14 },//stepSize : 20,
			gridLines:{ color: "rgba(200,200,200,.3)", lineWidth:1, zeroLineColor :"rgba(250,250,250,.8)", zeroLineWidth : 1.2 }
		}],
		yAxes: [{
			display: true,
			scaleLabel: { display: true, labelString: 'Y'   },//position: 'bottom',
			ticks:{ fontSize : 14 },//ticks:{ fontColor : "rgba(255,255,255,.7)" },
			gridLines:{ color: "rgba(200,200,200,.3)", lineWidth:1, zeroLineColor :"rgba(250,250,250,.8)", zeroLineWidth : 1.2 },//lineWidth:.5,
		}]
	},
},

scopeFreqFill:true,
scopeTimeFill:true,
scopeXyFill:true,

sampleFreq:44100,
nyquistFreq:22050,//half

auInIsOpen:false,
oscIsOpen:true,
scopeFreqIsOpen:false,
scopeTimeIsOpen:false,
scopeXyIsOpen:false,
scopeBodeIsOpen:false,

//auIn:'',
/*
scopeTimeMathA: false,
scopeFreqMathA: false,

scopeTimeMathB: false,
scopeFreqMathB: false,
*/




//  ####  chartjs ####  scope
scopeTimeOn:false, // is time domain enabled
scopeTimeHeight:256,
scopeTimeWidth:512,
scopeTimeAspectRatio:false,

scopeTimeChA:false,// channels on/off
scopeTimeChB:false,
scopeTimeChC:false,
scopeTimeChD:false,
scopeTimeChL:false,
scopeTimeChR:false,
scopeTimeA:{},// settings
scopeTimeB:{},
scopeTimeC:{},
scopeTimeD:{},
scopeTimeL:{},
scopeTimeR:{},

scopeFreqOn:false, // is freq domain enabled
scopeFreqHeight:256,
scopeFreqWidth:512,
scopeFreqAspectRatio:false,

scopeFreqChA:false,
scopeFreqChB:false,
scopeFreqChC:false,
scopeFreqChD:false,
scopeFreqChL:false,
scopeFreqChR:false,
scopeFreqA:{},
scopeFreqB:{},
scopeFreqC:{},
scopeFreqD:{},
scopeFreqL:{},
scopeFreqR:{},

scopeXyAb: false,
scopeXyAl: false,
scopeXyLr: false,

      osc:true,// 'option enabled'
      osc1:false,
      osc2:false,
      osc3:false,
			oscTriPhase: false, oscTriPhaseFreq: 1000,

			osc1BufferOn: false,
			osc1BufferData: null,//new Float32Array(this.au.sampleRate),// 1 sec
			osc1BufferLoop:true,
			osc2BufferOn: false,
      osc2BufferData: null,//new Float32Array(this.au.sampleRate),
			osc2BufferLoop:true,

      osc1Type:'sine',
      osc2Type:'sine',
      osc3Type:'sine',

			osc1Type2:'',
      osc2Type2:'',
			osc3Type2:'',


      osc1Freq:1000,
      osc2Freq:1000,
      osc3Freq:1000,

      osc1Detune:0,
      osc2Detune:0,
      osc3Detune:0,

      osc1Start:0,
      osc2Start:0,//.000333333,
      osc3Start:0,//.000666666,

      osc1Stop:0,
      osc2Stop:0,
      osc3Stop:0,

      osc1Gain:0.5,
      osc2Gain:0.5,
      osc3Gain:0.5,

      osc1Ch:0,
      osc2Ch:1,
      osc3Ch:0,


      osc1Raw:true,
      osc2Raw:true,
      osc3Raw:true,

        osc1Vpp:2,
        osc2Vpp:2,
        osc3Vpp:2,

        osc1Multi:1, // ply aka x1 x10 x1000 etc
        osc2Multi:1,
        osc3Multi:1,


oscMergerOn:false,
auInMergeOutOn: false,
oscMergerChannelCount:2,


//scopeTimeBitDepth: 32,
//scopeFreqBitDepth: 32,
// todo add prefix scope
fftBits:32,
fftSize:256,
fftBufferSize:128,
fftSizes:[32,64,128,256,512,1024,2048],//,8192,16384,32768 - probs no point in having more, can add it for fun and testing


binCount: 128,

osc1Data:[],
osc1Min:0,
osc1Max:0,
osc1Vpp:0,
osc1Rms:0,

osc2Data:[],
osc2Min:0,
osc2Max:0,
osc2Vpp:0,
osc2Rms:0,

osc3Data:[],
osc3Min:0,
osc3Max:0,
osc3Vpp:0,
osc3Rms:0,

//timeData: timeData,
//freqData: freqData,

debug: false,

//scopeFreqA
//scopeFreqB
//anal1: false,
//anal2: false,
//anal3: false,
//anal4: false,

multiplier:1,
scaleAxis:'y',


scopeFreqChartType:'line',//['doughnut', 'pie', 'line', 'bar', 'radar', 'polarArea', 'bubble', 'horizontalBar', 'scatter']
scopeTimeChartType:'line',//['doughnut', 'pie', 'line', 'bar', 'radar', 'polarArea', 'bubble', 'horizontalBar', 'scatter']
scopeXyChartType  :'scatter',//['doughnut', 'pie', 'line', 'bar', 'radar', 'polarArea', 'bubble', 'horizontalBar', 'scatter']

auInStreamOnL: false,
auInStreamOnR: false,
auInStreamDataL: null,
auInStreamDataR: null,
    };


this.keyDown = this.keyDown.bind(this);
//this.scope = this.scope.bind(this);
//this._draw = this.draw.bind(this);
this.scopeDraw = this.scopeDraw.bind(this);
this.scopeStart = this.scopeStart.bind(this);
this.scopeStop = this.scopeStop.bind(this);
this.scopeTime = this.scopeTime.bind(this);
this.scopeFreq = this.scopeFreq.bind(this);
this.scopeXy = this.scopeXy.bind(this);


this.oscFreq = this.oscFreq.bind(this);
        this.handleRaw = this.handleRaw.bind(this);
        this.handleBits = this.handleBits.bind(this);
        this.handleRatio = this.handleRatio.bind(this);
        this.handleVolts = this.handleVolts.bind(this);

        this.handleScale = this.handleScale.bind(this); // x & y scales: Log or Lin

        this.isOpenToggle = this.isOpenToggle.bind(this);


  }

	scopeAspectRatio(e){
		switch(e) {
			case 'time':
			let newHeight=256;
				let height = this.state.scopeTimeHeight;
				let width  = this.state.scopeTimeWidth;
				if(height == width) {
					let newHeight = width / 2;
				} else {
					let newHeight = width;
				}
				this.setState({scopeTimeHeight:newHeight})
				break;
			case 'freq':
				//let height = this.state.scopeFreqHeight;
				//let width  = this.state.scopeFreqWidth;
				//height = height == width ? width / 2 : width;
			//	this.setState({scopeFreqHeight:height})
				break;
		}
	}
	scopeDot(e){

	}
	keyDown(e) {
		console.log('keyDown: ', e.keyCode);
		if(e.keyCode == 32) { // space
			//e.preventDefault();
			if(this.au.state == 'running') this.auState('suspend');
			if(this.au.state == 'suspended') this.auState('resume');
    }
	}

	auInStreamOpen() { console.log('auInStreamOpen');
		if(this.state.auInStreamOnL == false) {
			let streamPromiseL = navigator.mediaDevices.getUserMedia({ audio: true, video: false })
				.then(auInStreamDataL => this.setState({ auInStreamDataL }));
				//this.setState({ auInStreamOnL: true });

			let streamPromiseR = navigator.mediaDevices.getUserMedia({ audio: true, video: false })
				.then(auInStreamDataR => this.setState({ auInStreamDataR }));


			Promise.all([ streamPromiseL ]).then(() => this.setState({ auInStreamOnL: true })).then(() =>console.log('streamPromiseL',streamPromiseL));
			Promise.all([ streamPromiseR ]).then(() => this.setState({ auInStreamOnR: true })).then(() =>console.log('streamPromiseR',streamPromiseR));
		}
	}

	auInIsOpen(){ this.setState({auInIsOpen:!this.state.auInIsOpen}) }
  oscIsOpen(){this.setState({oscIsOpen:!this.state.oscIsOpen})}
  scopeFreqIsOpen(){this.setState({scopeFreqIsOpen:!this.state.scopeFreqIsOpen})}
  scopeTimeIsOpen(){this.setState({scopeTimeIsOpen:!this.state.scopeTimeIsOpen})}
  scopeXyIsOpen(){this.setState({scopeXyIsOpen:!this.state.scopeXyIsOpen})}
  scopeBodeIsOpen(){this.setState({scopeBodeIsOpen:!this.state.scopeBodeIsOpen})}
	scopeXyAb(){this.setState({scopeXyAb:!this.state.scopeXyAb})}
	scopeXyAl(){this.setState({scopeXyAl:!this.state.scopeXyAl})}
	scopeXyLr(){this.setState({scopeXyLr:!this.state.scopeXyLr})}

oscTriPhase() {
	this.setState({oscTriPhase: !this.state.oscTriPhase});
	if(!this.state.oscTriPhase) { // remove offset and then dissable
		console.log('oscTriPhase OFF');
		this.setState({osc1Start:0});
		this.setState({osc2Start:0});
		this.setState({osc3Start:0});
	}

}

oscTriPhaseFreq(e) {
	if(this.state.oscTriPhase) {

		let phase = 1 / e.target.value / 3;
		console.log('oscTriPhaseFreq phase', phase);
		//let start = this.au.currentTime;
		this.setState({oscTriPhaseFreq: e.target.value*1});

		this.setState({osc1Freq: e.target.value*1});
		this.setState({osc2Freq: e.target.value*1});
		this.setState({osc3Freq: e.target.value*1});
		this.setState({osc1Start:0});
		this.setState({osc2Start:phase});
		this.setState({osc3Start:phase*2});
	}
}

  //auIn(ch,state){
  //  if(ch=='L' || ch =='R') {
      //let ch = this.state.ch
      //this.seatState({chanel:lineIn+x,state:y})
//    }
//  }

oscMergerChannels(x) { if(x==2||x==4||x==6) this.setState({oscMergerChannelCount:x}); }

scopeTimeCh(e) { // switching on/off time scope channels
  console.log('scopeTimeCh', e.target.id);
  switch(e.target.id) {
    case 'a': this.setState({scopeTimeChA:!this.state.scopeTimeChA}); break;//if(!this.state.osc1) this.osc(1); break;
    case 'b': this.setState({scopeTimeChB:!this.state.scopeTimeChB}); break;//if(!this.state.osc2) this.osc(2); break;
    case 'c': this.setState({scopeTimeChC:!this.state.scopeTimeChC}); break;//if(!this.state.osc3) this.osc(3); break;
    case 'd': this.setState({scopeTimeChD:!this.state.scopeTimeChD}); break;
		case 'l': this.setState({scopeTimeChL:!this.state.scopeTimeChL}); if(!this.state.auInStreamOnL) this.auInStreamOpen(); break;
		case 'r': this.setState({scopeTimeChR:!this.state.scopeTimeChR}); if(!this.state.auInStreamOnR) this.auInStreamOpen(); break;
  }

  //if(this.state.scopeTimeChA == true) this.setState({scopeTimeChA:false});
}
scopeFreqCh(e) { // switching on/off freq scope channels
  console.log('scopeFreqCh', e.target.id);
  switch(e.target.id) {
    case 'a': this.setState({scopeFreqChA:!this.state.scopeFreqChA}); break;
    case 'b': this.setState({scopeFreqChB:!this.state.scopeFreqChB}); break;
    case 'c': this.setState({scopeFreqChC:!this.state.scopeFreqChC}); break;
    case 'd': this.setState({scopeFreqChD:!this.state.scopeFreqChD}); break;
		case 'l': this.setState({scopeFreqChL:!this.state.scopeFreqChL}); if(!this.state.auInStreamOnL) this.auInStreamOpen(); break;
		case 'r': this.setState({scopeFreqChR:!this.state.scopeFreqChR}); if(!this.state.auInStreamOnR) this.auInStreamOpen(); break;
  }
}
    componentDidMount() {
      console.log('componentDidMount');
      //console.log('this._scopeTimeChartRef',this._scopeTimeChartRef); // returns a Chart.js instance reference
      //this.startLoop();
      console.log('au',this.au);

//      fetch('/assets/audio/b.wav')
//        .then(res => res.arrayBuffer())
//        .then(ab => this.audioContext.decodeAudioData(ab))
//        .then(buffer => this.setState({ buffer }));

//const canvas = ReactDOM.findDOMNode('oscTime');
//const canvas = document.getElementById('oscTime');
//    const context = canvas.getContext('2d');
//context.canvas.style.backgroundColor = 'rgb(34,34,34)';

//var ctx = document.getElementById('oscTime').getContext('2d');


//this.myChart = this.refs['scope'].getChart();

//this.myChart.canvas.height=80; // works but ..
//this.myChart.height=80;this.myChart.width=80; //  dont work

//console.log('this.myChart',this.myChart)

//    this.myChart.canvas.height=80;
/*
this.myChart.ctx.beginPath();
this.myChart.ctx.rect(20, 20, 150, 100);
this.myChart.ctx.fillStyle = "red";
this.myChart.ctx.fill();
*/

//this.myChart.canvas.style.backgroundColor = 'rgba(34,34,34,255)';

//console.log('canvas', canvas)
//this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
//this.analyser = this.audioContext.createAnalyser();
//this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
//this.source = this.audioContext.createMediaStreamSource(this.props.audio);
//this.source.connect(this.analyser);


  //this._scopeTimeData = scopeTimeData; // data for _scopeTimeChart
  //this._scopeFreqData = scopeFreqData; // data for _scopeTimeChart

	//this.setState({osc1BufferData:new Float32Array(this.au.sampleRate)});
	//this.setState({osc2BufferData:new Float32Array(this.au.sampleRate)});
	//this.setState({osc1BufferData: this.au.createBufferSource()});
	//this.setState({osc2BufferData: this.au.createBufferSource()});
	//this.osc1BufferData = this.au.createBufferSource();
	//this.makeWhite(1);
	//this.osc2BufferData = this.au.createBufferSource();
	//this.makeWhite(2);

document.addEventListener("keydown", this.keyDown, false);
this._frameId = requestAnimationFrame(this.scopeDraw);

//this.scopeStart;
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
      //this.stopLoop();
      //window.removeEventListener('resize', this.handleResize);

      this.au.close();
      cancelAnimationFrame(this._frameId);
			document.removeEventListener("keydown", this.keyDown, false);






      //this.analyser.disconnect();
      //this.source.disconnect();
    }

    componentDidUpdate(prevProps, prevState) {
      //console.log('componentDidUpdate prevProps', prevProps);
      //console.log('componentDidUpdate prevState', prevState);
      // only update chart if the data has changed
      //if (prevProps.data !== this.props.data) {
      //  this.chart = c3.load({
      //    data: this.props.data
      //  });
      //}

    }

osc1Buffer() { this.setState({osc1BufferOn:!this.state.osc1BufferOn}) }
osc2Buffer() { this.setState({osc2BufferOn:!this.state.osc2BufferOn}) }
scopeTime() { this.setState({scopeTimeOn:!this.state.scopeTimeOn}); }
scopeFreq() { this.setState({scopeFreqOn:!this.state.scopeFreqOn}); }
scopeXy() { this.setState({scopeXyOn:!this.state.scopeXyOn}); }
/*
    scope(){
      this.drawScopeFloat();
      if(this.state.scopeTimeOn) {
            let scopeTimeChartRef = this._scopeTimeChartRef.chartInstance;
            scopeTimeChartRef.update();
      }
      if(this.state.scopeFreqOn) {
            let scopeFreqChartRef = this._scopeFreqChartRef.chartInstance;
            scopeFreqChartRef.update();
      }
      this._frameId = requestAnimationFrame(this.scope);
    }
*/
    scopeDraw() {
//console.log(',');
      //if(this.state.scopeFreqIsOpen || this.state.scopeTimeIsOpen)
        this.drawScopeFloat();
/*
      //if(this.state.scopeTimeOn && this.state.scopeTimeIsOpen) {
            let scopeTimeChartRef = this._scopeTimeChartRef.chartInstance;
            scopeTimeChartRef.update();//call update with a duration of 0. This will render the chart synchronously and without an animation.
      //}
      if(this.state.scopeFreqOn && this.state.scopeFreqIsOpen) {
            let scopeFreqChartRef = this._scopeFreqChartRef.chartInstance;
            scopeFreqChartRef.update(0);
      }
      */
      this._frameId = requestAnimationFrame(this.scopeDraw);//window.
    }

    scopeStart() {
      //if( !this._frameId ) {
        this._frameId = requestAnimationFrame(this.scopeDraw);//window.
      //}
      //this.setState({scope: true});
    }

    scopeStop() {
      //window.
      cancelAnimationFrame( this._frameId );
      //this.setState({scope: false});
    }

/*
    draw() {
      if(this.state.scope) this.scopeStop;
      if(!this.state.scope) this.scopeStart;

      console.log('draw',this.state.scope);
    }
*/
      //########################################################################
      isOpenToggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


      getInitialState() {
          return {windowWidth: window.innerWidth};
        }

        handleResize(e) {
          console.log('resize');
          //this.setState({windowWidth: window.innerWidth});
        }


      getData() {
        let data = [];
        for (let i = 0, len = 256; i < len; i++) {
          data.push(parseInt(Math.random() * 50));
        }
        return data;
      }

      realtime() {
        setInterval(() => {
          //this.myChart.data.datasets[0].data = this.getData();
          //this.myChart.update();
        }, 500);
      }

      handleRaw(e) {
        this.setState({raw: !this.state.raw});
        //Meteor.call('scope', this.state);
        this.setServer();
      }
      handleBits(e, v) {
        //console.log('handleBits', e); console.log('v', v);
        this.setState({bits: v*1});
//if(e.target.id == 'time') this.setState({bits: v});
//if(e.target.id == 'freq') this.setState({bits: v});
        //Meteor.call('scope', this.state);
        //this.setServer();
      }
      handleRatio(e, v) {
        //console.log('handleRatio', e);    console.log('v', v);
        this.setState({multiplier: v});
        //Meteor.call('scope', this.state);
        this.setServer();
      }
      handleVolts(e, v) {
        //console.log('handleVolts', e);    console.log('v', v);
        this.setState({volts: v});
        //Meteor.call('scope', this.state);
        this.setServer();
      }

      scaleInAxis(e) {
        if(e.target.id == 'x' || e.target.id == 'y') {
          let options = this.state.options;
          options.zoom.mode = e.target.id;
          this.setState({options:options});
        }
      }
      handleScale(e) {
        e.preventDefault();
        console.log('handleScale', e.target.id);


        var options = this.state.options;

        if(e.target.id == 'x') {
          if(options.xScale == 'linear') {
            options.xScale = 'logarithmic';
          } else {
            options.xScale = 'linear';
          }
        } else {
          if(options.yScale == 'linear') {
            options.yScale = 'logarithmic';
          } else {
            options.yScale = 'linear';
          }
        }
        this.setState({ options: options});
        this.setServer();
      }
      setServer() {}
      //########################################################################

  ainit() {

/*

    var whiteNoise = audioContext.createScriptProcessor(bufferSize, 1, 1);
whiteNoise.onaudioprocess = function(e) {
  var white = e.outputBuffer.getChannelData(0);
  for (var i = 0; i < bufferSize; i++) {
    white[i] = Math.random() * 2 - 1;
  }
}

var pinkNoise = (function() {
  var b0, b1, b2, b3, b4, b5, b6;
  b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
  var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
  node.onaudioprocess = function(e) {
    var pink = e.outputBuffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      pink[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      pink[i] *= 0.11; // (roughly) compensate for gain
      b6 = white * 0.115926;
    }
  }
  return node;
})();

var brownNoise = (function() {
  var lastOut = 0.0;
  var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
  node.onaudioprocess = function(e) {
    var brown = e.outputBuffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      brown[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = brown[i];
      brown[i] *= 3.5; // (roughly) compensate for gain
    }
  }
  return node;
})();

//whiteNoise.connect(audioContext.destination);
//pinkNoise.connect(audioContext.destination);
//brownNoise.connect(audioContext.destination);
*/
  }

	//this.setState({osc1BufferData:new Float32Array(this.au.sampleRate)});
	//this.setState({osc2BufferData:new Float32Array(this.au.sampleRate)});
	makeWhite(oscId){
		let sr = this.au.sampleRate;
		//let source = this.au.createBufferSource();
		let buffer = this.au.createBuffer(1, sr, sr);
		let data = buffer.getChannelData(0);
		//data.buffer = new Float32Array(sr);
		for (let i = 0; i < sr; i++) {
	    data[i] = Math.random() * 2 - 1;
	  }
		buffer.copyToChannel(data, 0, 0);
		//source.buffer = buffer;
		oscId == 1 ? this.setState({osc1BufferData: buffer}) : this.setState({osc2BufferData: buffer});
		oscId == 1 ? this._osc1BufferData = buffer : this._osc2BufferData = buffer;
		//console.log('au buffer', buffer);
		//console.log('au data', data);
	}
	makePink(oscId){
		let sr = this.au.sampleRate;
		let buffer = this.au.createBuffer(1, sr, sr);
		let data = buffer.getChannelData(0);
		let b0, b1, b2, b3, b4, b5, b6;
	  b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
		for (let i = 0; i < sr; i++) {
      let white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11; // (roughly) compensate for gain
      b6 = white * 0.115926;
    }
		buffer.copyToChannel(data, 0, 0);
		oscId == 1 ? this.setState({osc1BufferData: buffer}) : this.setState({osc2BufferData: buffer});
	}
	makeBrown(oscId){
		let sr = this.au.sampleRate;
		let buffer = this.au.createBuffer(1, sr, sr);
		let data = buffer.getChannelData(0);
		let lastOut = 0.0;
		for (let i = 0; i < sr; i++) {
      let white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // (roughly) compensate for gain
		}
		buffer.copyToChannel(data, 0, 0);
		oscId == 1 ? this.setState({osc1BufferData: buffer}) : this.setState({osc2BufferData: buffer});
	}
	makeDc(){}
	makeSweep(){}

  osc(x) {
    switch(x) {
      case 1:
        this.setState({osc1:!this.state.osc1});
        break;
      case 2:
        this.setState({osc2:!this.state.osc2});
        break;
      case 3:
        this.setState({osc3:!this.state.osc3});
        break;
    }
  }

  oscType(x, param) {
    switch(x) {
      case 1:
				switch(param) {
					/*
					case 'white': this.makeWhite(1); this.state.osc1BufferOn?this.setState({osc1BufferOn: false}):this.setState({osc1BufferOn: true}); break;
					case 'pink':  this.makePink(1);  this.state.osc1BufferOn?this.setState({osc1BufferOn: false}):this.setState({osc1BufferOn: true}); break;
					case 'brown': this.makeBrown(1); this.state.osc1BufferOn?this.setState({osc1BufferOn: false}):this.setState({osc1BufferOn: true}); break;
					case 'dc':    this.makeDc(1);    this.state.osc1BufferOn?this.setState({osc1BufferOn: false}):this.setState({osc1BufferOn: true}); break;
					case 'sweep': this.makeSweep(1); this.state.osc1BufferOn?this.setState({osc1BufferOn: false}):this.setState({osc1BufferOn: true}); break;
					*/
					case 'white': this.makeWhite(1); this.setState({osc1Type2:param}); break;
					case 'pink':  this.makePink(1); this.setState({osc1Type2:param}); break;
					case 'brown': this.makeBrown(1); this.setState({osc1Type2:param}); break;
					case 'dc':    this.makeDc(1); this.setState({osc1Type2:param}); break;
					case 'sweep': this.makeSweep(1); this.setState({osc1Type2:param}); break;
					case 'sine':
					case 'square':
					case 'sawtooth':
					case 'triangle':
						this.setState({osc1Type:param}); break;
				}
				break;
      case 2:
				switch(param) {
					case 'white': this.makeWhite(2); this.setState({osc2Type2:param}); break;
					case 'pink':  this.makePink(2); this.setState({osc2Type2:param}); break;
					case 'brown': this.makeBrown(2); this.setState({osc2Type2:param}); break;
					case 'dc':    this.makeDc(2); this.setState({osc2Type2:param}); break;
					case 'sweep': this.makeSweep(2); this.setState({osc2Type2:param}); break;
					case 'sine':
					case 'square':
					case 'sawtooth':
					case 'triangle':
						this.setState({osc2Type:param}); break;
				}
				break;
      case 3:
				switch(param) {
	        case 'sine':
					case 'square':
					case 'sawtooth':
					case 'triangle':
						this.setState({osc3Type:param});
					 	break;
				}
				break;
    }
  }


  oscFreq(x, param) {
    switch(x) {
      case 1:
        this.setState({osc1Freq:param*1});
        break;
      case 2:
        this.setState({osc2Freq:param*1});
        break;
      case 3:
        this.setState({osc3Freq:param*1});
        break;
    }
  }

  oscDetune(x, param) {
    switch(x) {
      case 1:
        this.setState({osc1Detune:param*1});
        break;
      case 2:
        this.setState({osc2Detune:param*1});
        break;
      case 3:
        this.setState({osc3Detune:param*1});
        break;
    }
  }

  oscGain(e) {
    //let gain = e.target.value * .01;
    let gain = e.target.value * 1.0;
    console.log('oscGain id',e.target.id);

    switch(e.target.id) {
      case '1':
        this.setState({osc1Gain:gain});
        console.log('osc1Gain',gain);
        break;
      case '2':
        this.setState({osc2Gain:gain});
        console.log('osc2Gain',gain);
        break;
      case '3':
        this.setState({osc3Gain:gain});
        console.log('osc3Gain',gain);
        break;
      //default:
      //this.setState({osc1Gain:gain});
    }
  }


    oscPhase(e) {
      //let gain = e.target.value * .01;
      let start = e.target.value * 1;
      console.log('oscPhase id',e.target.name);

      switch(e.target.id) {
        case '1':
          this.setState({osc1Start:start});
          console.log('osc1Phase',start);
          break;
        case '2':
          this.setState({osc2Start:start});
          console.log('osc2Phase',start);
          break;
        case '3':
          this.setState({osc3Start:start});
          console.log('osc3Phase',start);
          break;
        //default:
        //this.setState({osc1Gain:gain});
      }
    }


  oscCh(x, param) {
    switch(x) {
      case 1:
        this.setState({osc1Ch:param-1}); // counting from 1 not zero
        break;
      case 2:
        this.setState({osc2Ch:param-1});
        break;
      case 3:
        this.setState({osc3Ch:param-1});
        break;
    }
  }

  oscFreq(e) {
    //e.target.value = Number(e.target.value);
    e.target.value = e.target.value * 1;
    switch(e.target.id) {
      case '1':
        this.setState({osc1Freq: e.target.value});
        break;
      case '2':
        this.setState({osc2Freq: e.target.value});
        break;
      case '3':
        this.setState({osc3Freq: e.target.value});
        break;
    }
    console.log('e.target.id ',e.target.id);
    console.log('e.target.value ',e.target.value);
  }

	oscMergerOn(){ this.setState({oscMergerOn:!this.state.oscMergerOn}); }
	auInMergeOutOn(){ this.setState({auInMergeOutOn:!this.state.auInMergeOutOn}); }
  fftSize(x) {
    if(this.state.fftSizes.indexOf(x) != -1)
      this.setState({fftSize:x*1});
  }

  fftBits(x) {
    if(x == '8' || x == '32')
      this.setState({fftBits:x*1});
  }

  colour(e) {
    //e.target.value = Number(e.target.value);
    /*
    switch(e.target.id) {
      case 1:
        this.setState({osc1Freq: e.target.value});
        break;
      case 2:
        this.setState({osc2Freq: e.target.value});
        break;
      case 3:
        this.setState({osc3Freq: e.target.value});
        break;
    }*/
    //console.log('colour e: ',e.target);
    console.log('e.target.id ',e.target.id);
    console.log('e.target.value ',e.target.value);
  }

  aMap(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
/*
    anal(x) {
      switch(x) {
        case 1:
          this.setState({anal1:!this.state.anal1});
          break;
        case 2:
          this.setState({anal2:!this.state.anal2});
          break;
        case 3:
          this.setState({anal3:!this.state.anal3});
          break;
        case 4:
          this.setState({anal4:!this.state.anal4});
          break;
      }
    }
*/
    drawScopeFloat() {
			let samples = this.state.fftSize/2;
      let samplingF = this.au.sampleRate;//44100;
      let nyc = samplingF / 2;
      let sampleT = 1000/samplingF; // in ms instead of seconds

var freqDataLabels = nyc / samples;
/*
if(this.state.fftBits == 8) {

          let aFreqData = new Uint8Array(this._scopeAproxy.frequencyBinCount);
          let aTimeData = new Uint8Array(this._scopeAproxy.frequencyBinCount);
          if(this.state.scopeFreqChA) this._scopeAproxy.getByteFrequencyData(aFreqData);
          if(this.state.scopeTimeChA) this._scopeAproxy.getByteTimeDomainData(aTimeData);

          let bFreqData = new Uint8Array(this._scopeBproxy.frequencyBinCount);
          let bTimeData = new Uint8Array(this._scopeBproxy.frequencyBinCount);
          if(this.state.scopeFreqChB) this._scopeBproxy.getByteFrequencyData(bFreqData);
          if(this.state.scopeTimeChB) this._scopeBproxy.getByteTimeDomainData(bTimeData);

          let cFreqData = new Uint8Array(this._scopeCproxy.frequencyBinCount);
          let cTimeData = new Uint8Array(this._scopeCproxy.frequencyBinCount);
          if(this.state.scopeFreqChC) this._scopeCproxy.getByteFrequencyData(cFreqData);
          if(this.state.scopeTimeChC) this._scopeCproxy.getByteTimeDomainData(cTimeData);


      // Data is in 8bit unsigned form, representing raw 0 - 256 values
      // (If it was 32bit it would be 32bit float ranging from -1.0 to +1.0 = no need to center it)
      // If we let it run without a signal, it would show 128, this means Zero=0 is at -128
      // To center the signal we -128 from the data and it becomes singed -127 to 0 to +127,

      //this.setState({osc1Min:Math.min(data.datasets[0].data)});
      //this.setState({osc1Max:Math.max(data.datasets[0].data)});
      //dData[i] = aData[i] - bData[i];

          //// AC Unsigned -> AC Signed,
          //data.datasets[0].data[i] = this.state.osc1Data[i] - 128;
          //data.datasets[0].data[i] = (~aData + 1 >>> 0).toString(10)//aData[i]-128;
          //data.datasets[1].data[i] = bData[i]-128;
          //data.datasets[2].data[i] = cData[i]-128;

} else {

          let aFreqData = new Float32Array(this._scopeAproxy.frequencyBinCount);
          let aTimeData = new Float32Array(this._scopeAproxy.frequencyBinCount);
          if(this.state.scopeFreqChA) this._scopeAproxy.getFloatFrequencyData(aFreqData);
          if(this.state.scopeTimeChA) this._scopeAproxy.getFloatTimeDomainData(aTimeData);


          let bFreqData = new Float32Array(this._scopeBproxy.frequencyBinCount);
          let bTimeData = new Float32Array(this._scopeBproxy.frequencyBinCount);
          if(this.state.scopeFreqChB) this._scopeBproxy.getFloatFrequencyData(bFreqData);
          if(this.state.scopeTimeChB) this._scopeBproxy.getFloatTimeDomainData(bTimeData);

          let cFreqData = new Float32Array(this._scopeCproxy.frequencyBinCount);
          let cTimeData = new Float32Array(this._scopeCproxy.frequencyBinCount);
          if(this.state.scopeFreqChC) this._scopeCproxy.getFloatFrequencyData(cFreqData);
          if(this.state.scopeTimeChC) this._scopeCproxy.getFloatTimeDomainData(cTimeData);

}
*/


          let aFreqData = new Float32Array(this._scopeAproxy.frequencyBinCount);
          let aTimeData = new Float32Array(this._scopeAproxy.frequencyBinCount);
          if(this.state.scopeFreqChA) this._scopeAproxy.getFloatFrequencyData(aFreqData);
          if(this.state.osc1) this._scopeAproxy.getFloatTimeDomainData(aTimeData);


          let bFreqData = new Float32Array(this._scopeBproxy.frequencyBinCount);
          let bTimeData = new Float32Array(this._scopeBproxy.frequencyBinCount);
          if(this.state.scopeFreqChB) this._scopeBproxy.getFloatFrequencyData(bFreqData);
          if(this.state.osc2) this._scopeBproxy.getFloatTimeDomainData(bTimeData);

          let cFreqData = new Float32Array(this._scopeCproxy.frequencyBinCount);
          let cTimeData = new Float32Array(this._scopeCproxy.frequencyBinCount);
          if(this.state.scopeFreqChC) this._scopeCproxy.getFloatFrequencyData(cFreqData);
          if(this.state.scopeTimeChC) this._scopeCproxy.getFloatTimeDomainData(cTimeData);
//let lTimeData=null;let rTimeData=null;let lFreqData=null;let rFreqData=null;


let lFreqData = new Float32Array(samples);//this._scopeLproxy.frequencyBinCount
let lTimeData = new Float32Array(samples);//this._scopeLproxy.frequencyBinCount
let rFreqData = new Float32Array(samples);//this._scopeRproxy.frequencyBinCount
let rTimeData = new Float32Array(samples);//this._scopeRproxy.frequencyBinCount

if(this.state.auInStreamOnL) {

					//let lFreqData = new Float32Array(this._scopeLproxy.frequencyBinCount);
          //let lTimeData = new Float32Array(this._scopeLproxy.frequencyBinCount);
          this._scopeLproxy.getFloatFrequencyData(lFreqData);
          this._scopeLproxy.getFloatTimeDomainData(lTimeData);

					//let rFreqData = new Float32Array(this._scopeRproxy.frequencyBinCount);
          //let rTimeData = new Float32Array(this._scopeRproxy.frequencyBinCount);
          //this._scopeRproxy.getFloatFrequencyData(rFreqData);
          //this._scopeRproxy.getFloatTimeDomainData(rTimeData);
}
if(this.state.auInStreamOnR) {
          this._scopeRproxy.getFloatFrequencyData(rFreqData);
          this._scopeRproxy.getFloatTimeDomainData(rTimeData);
}
      /*
            aData = Array.from(aData);
            bData = Array.from(bData);
            cData = Array.from(cData);
            */
//let datasets = [];
//this._scopeTimeData.push(datasets);
      // need to reset the arrays if fft size is changed

//this._scopeFreqData = scopeFreqData;
//this._scopeTimeData = scopeTimeData;

      this._scopeFreqData.labels = [];
      //this._scopeFreqData.datasets = [];

      this._scopeFreqData.datasets[0].data = [];
      this._scopeFreqData.datasets[0].fill = this.state.scopeFreqFill?'start':false;
      this._scopeFreqData.datasets[0].borderWidth = 1;
      this._scopeFreqData.datasets[0].pointRadius = 1;
      this._scopeFreqData.datasets[0].borderColor = 'rgb(255, 205, 86)';
      this._scopeFreqData.datasets[0].backgroundColor = 'rgba(255, 205, 86, .05)';
			this._scopeFreqData.datasets[0].pointHitRadius = 20,

      this._scopeFreqData.datasets[1].data = [];
      this._scopeFreqData.datasets[1].fill = this.state.scopeFreqFill?'start':false;
      this._scopeFreqData.datasets[1].borderWidth = 1;
      this._scopeFreqData.datasets[1].pointRadius = 1;
      this._scopeFreqData.datasets[1].borderColor = 'rgb(0, 255, 0)';
      this._scopeFreqData.datasets[1].backgroundColor = 'rgba(0, 255, 0, .05)';
			this._scopeFreqData.datasets[1].pointHitRadius = 20,

      this._scopeFreqData.datasets[2].data = [];
      this._scopeFreqData.datasets[2].fill = this.state.scopeFreqFill?'start':false;
      this._scopeFreqData.datasets[2].borderWidth = 1;
      this._scopeFreqData.datasets[2].pointRadius = 1;
      this._scopeFreqData.datasets[2].borderColor = 'rgb(255, 0, 0)';
      this._scopeFreqData.datasets[2].backgroundColor = 'rgba(255, 0, 0, .05)';
			this._scopeFreqData.datasets[2].pointHitRadius = 20,

      this._scopeFreqData.datasets[3].data = [];
      this._scopeFreqData.datasets[3].fill = this.state.scopeFreqFill?'start':false;
      this._scopeFreqData.datasets[3].borderWidth = 1;
      this._scopeFreqData.datasets[3].pointRadius = 1;
      this._scopeFreqData.datasets[3].borderColor = 'rgb(0, 0, 255)';
      this._scopeFreqData.datasets[3].backgroundColor = 'rgba(0, 0, 255, .05)';
			this._scopeFreqData.datasets[3].pointHitRadius = 20,

      this._scopeFreqData.datasets[4].data = [];
      this._scopeFreqData.datasets[4].fill = this.state.scopeFreqFill?'start':false;
      this._scopeFreqData.datasets[4].borderWidth = 1;
      this._scopeFreqData.datasets[4].pointRadius = 1;
      this._scopeFreqData.datasets[4].borderColor = 'rgb(255, 255, 255)';
      this._scopeFreqData.datasets[4].backgroundColor = 'rgba(255, 255, 255, .05)';

      this._scopeFreqData.datasets[5].data = [];
      this._scopeFreqData.datasets[5].fill = this.state.scopeFreqFill?'start':false;
      this._scopeFreqData.datasets[5].borderWidth = 1;
      this._scopeFreqData.datasets[5].pointRadius = 1;
      this._scopeFreqData.datasets[5].borderColor = 'rgb(255,20,147)';
      this._scopeFreqData.datasets[5].backgroundColor = 'rgba(255,20,147,.05)';//window.chartColors.pink;
      //this._scopeFreqData.datasets = [];

      this._scopeTimeData.labels = [];
      //this._scopeTimeData.datasets = [];

      //this._scopeTimeData.datasets[0] = {fill:false,borderWidth:1,borderColor:window.chartColors.yellow,backgroundColor:window.chartColors.yellow,data:[]};
      this._scopeTimeData.datasets[0].data = [];
      this._scopeTimeData.datasets[0].fill = this.state.scopeTimeFill?true:false;
      this._scopeTimeData.datasets[0].borderWidth = 1;
      this._scopeTimeData.datasets[0].pointRadius = .5;
      this._scopeTimeData.datasets[0].borderColor = 'rgb(255, 205, 86)';
      this._scopeTimeData.datasets[0].backgroundColor = 'rgba(255, 205, 86, .05)';

      this._scopeTimeData.datasets[1].data = [];
      this._scopeTimeData.datasets[1].fill = this.state.scopeTimeFill?true:false;
      this._scopeTimeData.datasets[1].borderWidth = 1;
      this._scopeTimeData.datasets[1].pointRadius = 1;
      this._scopeTimeData.datasets[1].borderColor = 'rgb(0, 255, 0)';
      this._scopeTimeData.datasets[1].backgroundColor = 'rgba(0, 255, 0, .05)';

      this._scopeTimeData.datasets[2].data = [];
      this._scopeTimeData.datasets[2].fill = this.state.scopeTimeFill?true:false;
      this._scopeTimeData.datasets[2].borderWidth = 1;
      this._scopeTimeData.datasets[2].pointRadius = 1;
      this._scopeTimeData.datasets[2].borderColor = 'rgb(255, 0, 0)';
      this._scopeTimeData.datasets[2].backgroundColor = 'rgba(255, 0, 0, .05)';

      this._scopeTimeData.datasets[3].data = [];
      this._scopeTimeData.datasets[3].fill = this.state.scopeTimeFill?true:false;
      this._scopeTimeData.datasets[3].borderWidth = 1;
      this._scopeTimeData.datasets[3].pointRadius = 1;
      this._scopeTimeData.datasets[3].borderColor = 'rgb(0, 0, 255)';
      this._scopeTimeData.datasets[3].backgroundColor = 'rgba(0, 0, 255, .05)';

      this._scopeTimeData.datasets[4].data = [];
      this._scopeTimeData.datasets[4].fill = this.state.scopeTimeFill?true:false;
      this._scopeTimeData.datasets[4].borderWidth = 1;
      this._scopeTimeData.datasets[4].pointRadius = 1;
      this._scopeTimeData.datasets[4].borderColor = 'rgb(255, 255, 255)';
      this._scopeTimeData.datasets[4].backgroundColor = 'rgba(255, 255, 255, .05)';

      this._scopeTimeData.datasets[5].data = [];
      this._scopeTimeData.datasets[5].fill = this.state.scopeTimeFill?true:false;
      this._scopeTimeData.datasets[5].borderWidth = 1;
      this._scopeTimeData.datasets[5].pointRadius = 1;
      this._scopeTimeData.datasets[5].borderColor = 'rgb(255,20,147)';
      this._scopeTimeData.datasets[5].backgroundColor = 'rgba(255,20,147,.05)';
      //this._scopeTimeData.datasets = [];


			      this._scopeXyData.labels = [];
			      //this._scopeTimeData.datasets = [];

			      //this._scopeTimeData.datasets[0] = {fill:false,borderWidth:1,borderColor:window.chartColors.yellow,backgroundColor:window.chartColors.yellow,data:[]};
			      this._scopeXyData.datasets[0].data = [];
						this._scopeXyData.datasets[0].showLine = true;
			      this._scopeXyData.datasets[0].fill = this.state.scopeXyFill?true:false;
			      this._scopeXyData.datasets[0].borderWidth = 1;
			      this._scopeXyData.datasets[0].pointRadius = 1;
			      this._scopeXyData.datasets[0].borderColor = 'rgb(255, 205, 86)';
			      this._scopeXyData.datasets[0].backgroundColor = 'rgba(255, 205, 86, .05)';

			      this._scopeXyData.datasets[1].data = [];
						this._scopeXyData.datasets[1].showLine = true;
			      this._scopeXyData.datasets[1].fill = this.state.scopeXyFill?true:false;
			      this._scopeXyData.datasets[1].borderWidth = 1;
			      this._scopeXyData.datasets[1].pointRadius = 1;
			      this._scopeXyData.datasets[1].borderColor = 'rgb(0, 255, 0)';
			      this._scopeXyData.datasets[1].backgroundColor = 'rgba(0, 255, 0, .05)';

						this._scopeXyData.datasets[2].data = [];
						this._scopeXyData.datasets[2].showLine = true;
						this._scopeXyData.datasets[2].fill = this.state.scopeXyFill?true:false;
						this._scopeXyData.datasets[2].borderWidth = 1;
						this._scopeXyData.datasets[2].pointRadius = 1;
						this._scopeXyData.datasets[2].borderColor = 'rgb(255, 0, 0)';
						this._scopeXyData.datasets[2].backgroundColor = 'rgba(255, 0, 0, .05)';
      //this._scopeXyData.labels = [];

      //{label:'A',borderWidth:1,lineThickness:1,fill:false,data:[]}
//if(this.state.scopeTimeChA) this._scopeTimeData.datasets[0].push({label:'A',borderWidth:1,lineThickness:1,fill:false,data:[0]});
/*
      if(this.state.scopeTimeChA) this._scopeTimeData.datasets[0].data = [0];
      if(this.state.scopeTimeChB) this._scopeTimeData.datasets[1].data = [0];
      if(this.state.scopeTimeChC) this._scopeTimeData.datasets[2].data = [0];
      //if(this.state.scopeTimeChD) this._scopeTimeData.datasets[3].data = [0];

      if(this.state.scopeFreqChA) this._scopeFreqData.datasets[0].data = [0];
      if(this.state.scopeFreqChB) this._scopeFreqData.datasets[1].data = [0];
      if(this.state.scopeFreqChC) this._scopeFreqData.datasets[2].data = [0];
      //if(this.state.scopeFreqChD) this._scopeFreqData.datasets[3].data = [0];
*/
      for(let i = 0; i<samples; i++) {

        let _time = i * sampleT;

        this._scopeTimeData.labels[i] = _time.toFixed(2);// + 'ms';
        this._scopeFreqData.labels[i] = (i * freqDataLabels).toFixed(0);
				//this._scopeXyData.labels[i] = _time.toFixed(2);// + 'ms';
        //this._scopeXyData.labels[i] = Array();

        //this.setState({osc1Min:Math.min(data.datasets[0].data)});
        //this.setState({osc1Max:Math.max(data.datasets[0].data)});

        if(this.state.scopeFreqChA || this.state.osc1BufferOn) this._scopeFreqData.datasets[0].data[i] = aFreqData[i];
        if(this.state.scopeFreqChB || this.state.osc2BufferOn) this._scopeFreqData.datasets[1].data[i] = bFreqData[i];
        if(this.state.scopeFreqChC) this._scopeFreqData.datasets[2].data[i] = cFreqData[i];
				if(this.state.scopeFreqChL && this.state.auInStreamOnL) this._scopeFreqData.datasets[4].data[i] = lFreqData[i];
				if(this.state.scopeFreqChR && this.state.auInStreamOnR) this._scopeFreqData.datasets[5].data[i] = rFreqData[i];


        //if(this.state.scopeTimeChA) this._scopeTimeData.datasets[0].data[i] = aTimeData[i]*this.state.multiplier;
        //if(this.state.scopeTimeChB) this._scopeTimeData.datasets[1].data[i] = bTimeData[i]*this.state.multiplier;
				if(this.state.scopeTimeChA || this.state.osc1BufferOn) this._scopeTimeData.datasets[0].data[i] = aTimeData[i]*this.state.multiplier;
				if(this.state.scopeTimeChB || this.state.osc2BufferOn) this._scopeTimeData.datasets[1].data[i] = bTimeData[i]*this.state.multiplier;
        if(this.state.scopeTimeChC) this._scopeTimeData.datasets[2].data[i] = cTimeData[i]*this.state.multiplier;
				if(this.state.scopeTimeChL && this.state.auInStreamOnL) this._scopeTimeData.datasets[4].data[i] = lTimeData[i]*this.state.multiplier;
				if(this.state.scopeTimeChR && this.state.auInStreamOnR) this._scopeTimeData.datasets[5].data[i] = rTimeData[i]*this.state.multiplier ;

        //this.aMap(this.state.osc1Data[i] - 128, -128, 128, -1.0, 1.0);

        //if(this.state.scopeTimeMathA && this.state.scopeTimeChA && this.state.scopeTimeChB) {
        //if(this.state.scopeTimeChD) this._scopeTimeData.datasets[3].data[i] = this._scopeTimeData.datasets[0].data[i] - this._scopeTimeData.datasets[1].data[i];

				if(this.state.scopeXyIsOpen) {

					if(this.state.scopeXyAb)
					this._scopeXyData.datasets[0].data[i] = {
						x:aTimeData[i]*this.state.multiplier,//this._scopeTimeData.datasets[0].data[i],
						y:bTimeData[i]*this.state.multiplier,//this._scopeTimeData.datasets[1].data[i],
					};



					if(this.state.scopeXyAl && this.state.auInStreamOnL) {
						this._scopeXyData.datasets[1].data[i] = {
							x:aTimeData[i]*this.state.multiplier,
							y:aTimeData[i]*this.state.multiplier - lTimeData[i]*this.state.multiplier,
						}
					}

					if(this.state.scopeXyLr && this.state.auInStreamOnR) {
						this._scopeXyData.datasets[2].data[i] = {
							x:lTimeData[i]*this.state.multiplier,
							y:lTimeData[i]*this.state.multiplier - rTimeData[i]*this.state.multiplier,
						}
					}


				}
      //  }

      }

      this.setState({_scopeFreqData:this._scopeFreqData});
      this.setState({_scopeTimeData:this._scopeTimeData});
      this.setState({_scopeXyData:this._scopeXyData});

      //this.state._scopeFreqData = this._scopeFreqData;
      //this.state._scopeTimeData = this._scopeTimeData;

//this._scopeTimeChartRef.datasets.Ch1.data = timeData.datasets[0].data;
    //  this.setState({freqData:freqData})
      //console.log('this.oscTimeData',data);
      //this.forceUpdate();
    }

scopeFreqFill(){ this.setState({scopeFreqFill:!this.state.scopeFreqFill}) };
scopeTimeFill(){ this.setState({scopeTimeFill:!this.state.scopeTimeFill}) };
scopeXyFill(){ this.setState({scopeXyFill:!this.state.scopeXyFill}) };


logState(){

//this.drawScopeFloat();

//let _data = new Uint8Array(this.pproxy.frequencyBinCount);//proxy.frequencyBinCount
  //let data = this.aProxy(_data);

//let data = this.aProxy.frequencyBinCount;//getByteTimeDomainData();

//this.pproxy.getByteTimeDomainData(_data)
console.log('this.state',this.state);
//console.log('osc1Buffer',this.state.osc1Buffer);
  //console.log('data',_data);
  //console.log('state',this._scopeTimeChartRef.datasets.Ch1.data);
}

debug(){ this.setState({debug: !this.state.debug}) }


  auState(e) {
    //console.log('auState', e.target.id);//console.log('auState val', v);
    console.log('auState', e);//console.log('auState val', v);
    //switch(e.target.id) { // DOES NOT SEEM TO ALWAYS WORK??!!
    switch(e) {
      case 'resume':
        if(this.au.state == 'suspended')
          this.au.resume();
        break;

      case 'suspend':
        if(this.au.state == 'running')
          this.au.suspend();
        break;

      case 'close':
        this.au.close();
        break;

    }
    //this.setState({multiplier: v});
    //Meteor.call('scope', this.state);
    //this.setServer();
  }

  auIn(x){
    console.log('auIn',x);
    this.setState({auIn:x})
  }

  oscFreq(e){
    let x = e.target.id;
    let y = e.target.value;
  //  return <div>oscFreqInput</div>;//<Input/>
    if(x==1) this.setState({osc1Freq:y*1});
    if(x==2) this.setState({osc2Freq:y*1});
    if(x==3) this.setState({osc3Freq:y*1});
  }

auLoad(ctx) {
	this.au = ctx;
	console.log('audio loaded');
	//au = ctx;
	/*



  //https://codepen.io/ContemporaryInsanity/pen/YXbNbg White, pink & brown noise

  this.oscWhiteNoise = au.createScriptProcessor(this.state.bufferSize, 1, 1);
  this.oscWhiteNoise.onaudioprocess = function(e) {
    var white = e.outputBuffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      white[i] = Math.random() * 2 - 1;
    }
  }
	*/

/*
  this.oscPinkNoise = (function() {
    var b0, b1, b2, b3, b4, b5, b6;
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
    var node = this.au.createScriptProcessor(this.state.bufferSize, 1, 1);
    node.onaudioprocess = function(e) {
      var pink = e.outputBuffer.getChannelData(0);
      for (var i = 0; i < bufferSize; i++) {
        var white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        pink[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        pink[i] *= 0.11; // (roughly) compensate for gain
        b6 = white * 0.115926;
      }
    }
    return node;
  })();

  this.oscBrownNoise = (function() {
    var lastOut = 0.0;
    var node = this.au.createScriptProcessor(this.state.bufferSize, 1, 1);
    node.onaudioprocess = function(e) {
      var brown = e.outputBuffer.getChannelData(0);
      for (var i = 0; i < bufferSize; i++) {
        var white = Math.random() * 2 - 1;
        brown[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = brown[i];
        brown[i] *= 3.5; // (roughly) compensate for gain
      }
    }
    return node;
  })();
*/

  //whiteNoise.connect(audioContext.destination);
  //pinkNoise.connect(audioContext.destination);
  //brownNoise.connect(audioContext.destination);
  }
  render() {
    return ( //this.state.stream ? (
      <div>
{/*
  <RAudioContext debug={this.state.debug} onInit={ctx => this.au = ctx}>
  <RAudioContext debug={this.state.debug} onInit={ctx => this.auLoad.bind(this)(ctx)}>
  */}

        <RAudioContext debug={this.state.debug} onInit={ctx => this.auLoad.bind(this)(ctx)}>
          <article>

          {this.state.debug?
            'numberOfInputs: ' + this.au.destination.numberOfInputs + '<br/>' +
            'channelCountMode: ' + this.au.destination.channelCountMode + '<br/>' +
            'channelInterpretation: ' + this.au.destination.channelInterpretation + '<br/>' +
            'maxChannelCount: ' + this.au.destination.maxChannelCount + '<br/>' +
            'numberOfInputs: ' + this.au.destination.numberOfInputs + '<br/>' +
            'numberOfOutputs: ' + this.au.destination.numberOfOutputs + '<br/>'
            :''}

          </article>
          <RPipeline>

            <RPipeline connectToChannel={this.state.osc1Ch}>{/* connectFromChannel={0} connectToChannel={0}  connectToParam="gain" */}
              <ROscillator name="osc1" start={this.state.osc1Start} frequency={this.state.osc1Freq} type={this.state.osc1Type} disconnected={!this.state.osc1} />
{//this.state.osc1BufferOn?
								<RBufferSource name="buffer1" buffer={this.state.osc1BufferData} loop={this.state.osc1BufferLoop} start={this.au.currentTime} disconnected={!this.state.osc1BufferOn} />
//:null
}
              <RGain name="gain1" gain={this.state.osc1Gain} />
              <RAnalyser name="scopeA" fftSize={this.state.fftSize}>{proxy => { this._scopeAproxy = proxy }}</RAnalyser>
            </RPipeline>

            <RPipeline connectToChannel={this.state.osc2Ch}>
              <ROscillator name="osc2" start={this.state.osc2Start} frequency={this.state.osc2Freq} type={this.state.osc2Type} disconnected={!this.state.osc2} />
{//this.state.osc2BufferOn?
								<RBufferSource name="buffer2" buffer={this.state.osc2BufferData} loop={this.state.osc2BufferLoop} start={this.au.currentTime} disconnected={!this.state.osc2BufferOn} />
//:null
}
              <RGain name="gain2" gain={this.state.osc2Gain} />
              <RAnalyser name="scopeB" fftSize={this.state.fftSize}>{proxy => { this._scopeBproxy = proxy }}</RAnalyser>
            </RPipeline>

{ typeof InstallTrigger !== 'undefined'? // Chrome doesn't like it so we only turn it of for FireFox https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser/9851769
            <RPipeline connectToChannel={this.state.osc3Ch}>
              <ROscillator name="osc3" start={this.state.osc3Start} frequency={this.state.osc3Freq} type={this.state.osc3Type} disconnected={!this.state.osc3} />
              <RGain name="gain3" gain={this.state.osc3Gain} />
              <RAnalyser name="scopeC" fftSize={this.state.fftSize}>{proxy => { this._scopeCproxy = proxy }}</RAnalyser>
            </RPipeline>
:null}
{ typeof InstallTrigger !== 'undefined'?
						<RChannelMerger name="merg" channelCount={this.state.oscMergerChannelCount} disconnected={!this.state.oscMergerOn} />
:null}


          </RPipeline>
					<RPipeline>

{/*
					<RAnalyser name="l" fftSize={this.state.fftSize}>{proxy => { this._scopeLproxy = proxy }}</RAnalyser>
					<RChannelMerger name="mergAuIn" channelCount={2} disconnected={false} />

					<RSplitChannels channelCount={2}></RSplitChannels>
*/}

						 <RPipeline>
							{this.state.auInStreamOnL?<RMediaStreamSource stream={this.state.auInStreamDataL}/>:null}
							<RAnalyser name="l" fftSize={this.state.fftSize}>{proxy => { this._scopeLproxy = proxy }}</RAnalyser>
					  </RPipeline>
					  <RPipeline>
							{this.state.auInStreamOnR?<RMediaStreamSource stream={this.state.auInStreamDataR}/>:null}
							<RAnalyser name="r" fftSize={this.state.fftSize}>{proxy => { this._scopeRproxy = proxy }}</RAnalyser>
					  </RPipeline>
						{ typeof InstallTrigger !== 'undefined'?
							<RChannelMerger name="mergAuIn" channelCount={2} disconnected={!this.state.auInMergeOutOn} />
						:null}
					</RPipeline>

        </RAudioContext>

        <Navbar color="dark" dark expand="md">
          <NavbarBrand>
            <Button id="auIn" color={this.state.auInIsOpen?"primary":"outline-primary"} onClick={(e) => this.auInIsOpen(e)}>In</Button>|
            <Button id="osc" color={this.state.oscIsOpen?"primary":"outline-primary"} onClick={(e) => this.oscIsOpen(e)}>Out</Button>|
            <Button id="time" color={this.state.scopeTimeIsOpen?"primary":"outline-primary"} onClick={(e) => this.scopeTimeIsOpen(e)}>Time</Button>|
            <Button id="freq" color={this.state.scopeFreqIsOpen?"primary":"outline-primary"} onClick={(e) => this.scopeFreqIsOpen(e)}>Freq</Button>|
            <Button id="xy" color={this.state.scopeXyIsOpen?"primary":"outline-primary"} onClick={(e) => this.scopeXyIsOpen(e)}>XY</Button>|
{/*            <Button id="bode" color={this.state.scopeBodeIsOpen?"primary":"outline-primary"} onClick={(e) => this.scopeBodeIsOpen(e)}>Bode</Button>| */}

            <Button id="1" color="outline-info">{this.au.sampleRate || 'sampleRate?'}</Button>|
            <Button id="2" color="outline-info">{this.au.currentTime || 'currentTime?'}</Button>
          </NavbarBrand>
          <NavbarToggler onClick={this.isOpenToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Button color={this.state.debug?"info":"outline-info"} onClick={() => this.debug()}><FontAwesomeIcon icon="bug" /></Button>|
              <Button id="suspend" color={this.au.state == 'suspended' ? "warning":"outline-warning"} onClick={(e) => this.auState('suspend')}><FontAwesomeIcon icon="pause" /></Button>|
              <Button id="resume" color={this.au.state == 'running' ? "success":"outline-success"} onClick={(e) => this.auState('resume')}><FontAwesomeIcon icon="play" /></Button>|
              <Button id="close" color={this.au.state == 'closed' ? "danger":"outline-danger"} onClick={(e) => this.auState('close')}><FontAwesomeIcon icon="power-off" /></Button>
            </Nav>
          </Collapse>
        </Navbar>

        <Alert color="greay" isOpen={this.state.auInIsOpen}>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand>
							<Button id="auIn" color={this.state.auInIsOpen?"primary":"outline-primary"} onClick={(e) => this.auInIsOpen(e)}>In</Button>|
              <Button id="auIn" color={this.state.auInStreamOnL?"primary":"outline-primary"} onClick={(e) => this.auInStreamOpen(e)}>Audio In</Button>|
              <Button id="auIn" color={this.state.auIn=='Websocket'?"secondary":"outline-secondary"} onClick={(e) => this.auIn('webSocket')}>WebSocket</Button>|
							<Button id="auIn" color={this.state.auIn=='Websocket'?"secondary":"outline-secondary"} onClick={(e) => this.auIn('file')}>File</Button>|

            </NavbarBrand>
						<NavbarToggler onClick={this.isOpenToggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Button id="output" color={this.state.auInMergeOutOn?"success":"warning"} onClick={(e) => this.auInMergeOutOn()}><FontAwesomeIcon icon={this.state.auInMergeOutOn?"volume-up":"volume-mute"} /></Button>
              </Nav>
            </Collapse>
          </Navbar>
        </Alert>

        <Alert color="greay" isOpen={this.state.oscIsOpen}>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand>
						<InputGroup>
              <Button id="osc" color={this.state.oscIsOpen?"primary":"outline-primary"} onClick={(e) => this.oscIsOpen(e)}>Oscillator</Button>|
              <Button id="osc" color={this.state.oscTriPhase?"primary":"outline-primary"} onClick={(e) => this.oscTriPhase(e)}>tri phase</Button>|
							<InputGroupAddon addonType="prepend">freq</InputGroupAddon>
							<Input placeholder="freq" min={1} max={1000} type="range" step={10} value={this.state.oscTriPhaseFreq} onChange={(e) => this.oscTriPhaseFreq(e)} />
							<Input type="number" value={this.state.oscTriPhaseFreq} onChange={(e) => this.oscTriPhaseFreq(e)}/>
							</InputGroup>
            </NavbarBrand>
            <NavbarToggler onClick={this.isOpenToggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Button id="ch" color={this.state.oscMergerChannelCount==2?"info":"outline-info"} onClick={(e) => this.oscMergerChannels(2)}>2</Button>|
                <Button id="ch" color={this.state.oscMergerChannelCount==4?"info":"outline-info"} onClick={(e) => this.oscMergerChannels(4)}>4</Button>|
                <Button id="ch" color={this.state.oscMergerChannelCount==6?"info":"outline-info"} onClick={(e) => this.oscMergerChannels(6)}>6</Button>|
                <Button id="output" color={this.state.oscMergerOn?"success":"warning"} onClick={(e) => this.oscMergerOn()}><FontAwesomeIcon icon={this.state.oscMergerOn?"volume-up":"volume-mute"} /></Button>
              </Nav>
            </Collapse>
          </Navbar>

          <Navbar color="dark" dark expand="md">
            <NavbarBrand>
							<Button id="output" color={this.state.osc1?"success":"outline-warning"} onClick={(e) => this.osc(1)}><FontAwesomeIcon icon={this.state.osc1?"volume-up":"volume-mute"} /></Button>|
              <Button color={this.state.osc1Type=='sine'?"info":"outline-info"} onClick={() => this.oscType(1,'sine')}>∿</Button>|
              <Button color={this.state.osc1Type=='square'?"info":"outline-info"} onClick={() => this.oscType(1, 'square')}>□</Button>|
              <Button color={this.state.osc1Type=='sawtooth'?"info":"outline-info"} onClick={() => this.oscType(1, 'sawtooth')}>◿</Button>|
              <Button color={this.state.osc1Type=='triangle'?"info":"outline-info"} onClick={() => this.oscType(1, 'triangle')}>△</Button>|
							<Button color="warning">A</Button>|
              {/*this.state.osc1Type=='sine' || this.state.osc1Type=='square' || this.state.osc1Type=='square' || this.state.osc1Type=='square'?this.oscFreqInput:""*/}
							<Button id="output" color={this.state.osc1BufferOn?"success":"outline-warning"} onClick={(e) => this.osc1Buffer()}><FontAwesomeIcon icon={this.state.osc1BufferOn?"volume-up":"volume-mute"} /></Button>|
              <Button color={this.state.osc1Type2=='white'?"white":"outline-white"} onClick={() => this.oscType(1, 'white')}>w</Button>|
              <Button color={this.state.osc1Type2=='pink'?"pink":"outline-pink"} onClick={() => this.oscType(1, 'pink')}>p</Button>|
              <Button color={this.state.osc1Type2=='borwn'?"brown":"outline-brown"} onClick={() => this.oscType(1, 'brown')}><FontAwesomeIcon icon="poo" /></Button>|
              <Button color={this.state.osc1Type2=='dc'?"info":"outline-info"} onClick={() => this.oscType(1, 'dc')}>dc</Button>|
              <Button color={this.state.osc1Type2=='sweep'?"info":"outline-info"} onClick={() => this.oscType(1, 'sweep')}>sweep</Button>|
              <Button color={this.state.osc1Ch==1-1?"info":"outline-info"} onClick={() => this.oscCh(1, 1)}>Out1</Button>|
              <Button color={this.state.osc1Ch==2-1?"info":"outline-info"} onClick={() => this.oscCh(1, 2)}>Out2</Button>|
							{this.state.oscMergerChannelCount==4||this.state.oscMergerChannelCount==6?<Button color={this.state.osc1Ch==3-1?"info":"outline-info"} onClick={() => this.oscCh(1, 3)}>Out3</Button>:null}|
              {this.state.oscMergerChannelCount==4||this.state.oscMergerChannelCount==6?<Button color={this.state.osc1Ch==4-1?"info":"outline-info"} onClick={() => this.oscCh(1, 4)}>Out4</Button>:null}|
              {this.state.oscMergerChannelCount==6?<Button color={this.state.osc1Ch==5-1?"info":"outline-info"} onClick={() => this.oscCh(1, 5)}>Out5</Button>:null}|
              {this.state.oscMergerChannelCount==6?<Button color={this.state.osc1Ch==6-1?"info":"outline-info"} onClick={() => this.oscCh(1, 6)}>Out6</Button>:null}|

							<InputGroup>
								<InputGroupAddon addonType="prepend">f</InputGroupAddon>{/* todo maxFreq=this.au.sampleRate/2 */}
								<Input id="1" placeholder="frequency" min={0} max={this.au.sampleRate/2 || 22050} type="number" step="1" value={this.state.osc1Freq} onChange={(e) => this.oscFreq(e)} />
								<InputGroupAddon addonType="prepend"><Button id="1" value="10" onClick={(e) => this.oscFreq(e)}>10</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="1" value="100" onClick={(e) => this.oscFreq(e)}>100</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="1" value="500" onClick={(e) => this.oscFreq(e)}>500</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="1" value="1000" onClick={(e) => this.oscFreq(e)}>1000</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="1" value="2000" onClick={(e) => this.oscFreq(e)}>2000</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend">gain</InputGroupAddon>
								<Input id="1" placeholder="gain" min={0} max={1.0} type="range" step=".01" value={this.state.osc1Gain} onChange={(e) => this.oscGain(e)} />
								<Input id="1" placeholder="gain" min={0} max={1.0} type="number" step=".01" value={this.state.osc1Gain} onChange={(e) => this.oscGain(e)} />
									<InputGroupAddon addonType="prepend"><Button color="info">{this.state.osc1Gain*2.0*this.state.multiplier} Volt p-p</Button></InputGroupAddon>
							</InputGroup>
  <br />
              <Button id="output" color={this.state.osc2?"success":"outline-warning"} onClick={(e) => this.osc(2)}><FontAwesomeIcon icon={this.state.osc2?"volume-up":"volume-mute"} /></Button>|
              <Button color={this.state.osc2Type=='sine'?"info":"outline-info"} onClick={() => this.oscType(2,'sine')}>∿</Button>|
              <Button color={this.state.osc2Type=='square'?"info":"outline-info"} onClick={() => this.oscType(2, 'square')}>□</Button>|
              <Button color={this.state.osc2Type=='sawtooth'?"info":"outline-info"} onClick={() => this.oscType(2, 'sawtooth')}>◿</Button>|
              <Button color={this.state.osc2Type=='triangle'?"info":"outline-info"} onClick={() => this.oscType(2, 'triangle')}>△</Button>|
							<Button color="success">B</Button>|
							<Button id="output" color={this.state.osc2BufferOn?"success":"outline-warning"} onClick={(e) => this.osc2Buffer()}><FontAwesomeIcon icon={this.state.osc2BufferOn?"volume-up":"volume-mute"} /></Button> |
              <Button color={this.state.osc2Type2=='white'?"white":"outline-white"} onClick={() => this.oscType(2, 'white')}>w</Button>|
              <Button color={this.state.osc2Type2=='pink'?"pink":"outline-pink"} onClick={() => this.oscType(2, 'pink')}>p</Button>|
              <Button color={this.state.osc2Type2=='borwn'?"borwn":"outline-brown"} onClick={() => this.oscType(2, 'brown')}><FontAwesomeIcon icon="poo" /></Button>|
              <Button color={this.state.osc2Type2=='dc'?"info":"outline-info"} onClick={() => this.oscType(2, 'dc')}>dc</Button>|
              <Button color={this.state.osc2Type2=='sweep'?"info":"outline-info"} onClick={() => this.oscType(1, 'sweep')}>sweep</Button>|
              <Button color={this.state.osc2Ch==1-1?"info":"outline-info"} onClick={() => this.oscCh(2, 1)}>Out1</Button>|
              <Button color={this.state.osc2Ch==2-1?"info":"outline-info"} onClick={() => this.oscCh(2, 2)}>Out2</Button>|
              {this.state.oscMergerChannelCount==4||this.state.oscMergerChannelCount==6?<Button color={this.state.osc2Ch==3-1?"info":"outline-info"} onClick={() => this.oscCh(2, 3)}>Out3</Button>:null}|
              {this.state.oscMergerChannelCount==4||this.state.oscMergerChannelCount==6?<Button color={this.state.osc2Ch==4-1?"info":"outline-info"} onClick={() => this.oscCh(2, 4)}>Out4</Button>:null}|
              {this.state.oscMergerChannelCount==6?<Button color={this.state.osc2Ch==5-1?"info":"outline-info"} onClick={() => this.oscCh(2, 5)}>Out5</Button>:null}|
              {this.state.oscMergerChannelCount==6?<Button color={this.state.osc2Ch==6-1?"info":"outline-info"} onClick={() => this.oscCh(2, 6)}>Out6</Button>:null}|
							<InputGroup>
								<InputGroupAddon addonType="prepend">f</InputGroupAddon>{/* todo maxFreq=this.au.sampleRate/2 */}
								<Input id="2" placeholder="frequency" min={0} max={this.au.sampleRate/2 || 22050} type="number" step="1" value={this.state.osc2Freq} onChange={(e) => this.oscFreq(e)} />
								<InputGroupAddon addonType="prepend"><Button id="2" value="10" onClick={(e) => this.oscFreq(e)}>10</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="2" value="100" onClick={(e) => this.oscFreq(e)}>100</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="2" value="500" onClick={(e) => this.oscFreq(e)}>500</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="2" value="1000" onClick={(e) => this.oscFreq(e)}>1000</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="2" value="2000" onClick={(e) => this.oscFreq(e)}>2000</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend">gain</InputGroupAddon>
								<Input id="2" placeholder="gain" min={0} max={1.0} type="range" step=".01" value={this.state.osc2Gain} onChange={(e) => this.oscGain(e)} />
								<Input id="2" placeholder="gain" min={0} max={1.0} type="number" step=".01" value={this.state.osc2Gain} onChange={(e) => this.oscGain(e)} />
									<InputGroupAddon addonType="prepend"><Button color="info">{this.state.osc2Gain*2*this.state.multiplier} Volt p-p</Button></InputGroupAddon>
							</InputGroup>
  <br />
              <Button id="output" color={this.state.osc3?"success":"outline-warning"} onClick={(e) => this.osc(3)}><FontAwesomeIcon icon={this.state.osc3?"volume-up":"volume-mute"} /></Button>|
              <Button color={this.state.osc3Type=='sine'?"info":"outline-info"} onClick={() => this.oscType(3,'sine')}>∿</Button>|
              <Button color={this.state.osc3Type=='square'?"info":"outline-info"} onClick={() => this.oscType(3, 'square')}>□</Button>|
              <Button color={this.state.osc3Type=='sawtooth'?"info":"outline-info"} onClick={() => this.oscType(3, 'sawtooth')}>◿</Button>|
              <Button color={this.state.osc3Type=='triangle'?"info":"outline-info"} onClick={() => this.oscType(3, 'triangle')}>△</Button>|
							<Button color="danger">C</Button>|
              <Button color={this.state.osc3Ch==1-1?"info":"outline-info"} onClick={() => this.oscCh(3, 1)}>Out1</Button>|
              <Button color={this.state.osc3Ch==2-1?"info":"outline-info"} onClick={() => this.oscCh(3, 2)}>Out2</Button>|
              {this.state.oscMergerChannelCount==4||this.state.oscMergerChannelCount==6?<Button color={this.state.osc3Ch==3-1?"info":"outline-info"} onClick={() => this.oscCh(3, 3)}>Out3</Button>:null}|
              {this.state.oscMergerChannelCount==4||this.state.oscMergerChannelCount==6?<Button color={this.state.osc3Ch==4-1?"info":"outline-info"} onClick={() => this.oscCh(3, 4)}>Out4</Button>:null}|
              {this.state.oscMergerChannelCount==6?<Button color={this.state.osc3Ch==5-1?"info":"outline-info"} onClick={() => this.oscCh(3, 5)}>Out5</Button>:null}|
              {this.state.oscMergerChannelCount==6?<Button color={this.state.osc3Ch==6-1?"info":"outline-info"} onClick={() => this.oscCh(3, 6)}>Out6</Button>:null}|
							<InputGroup>
								<InputGroupAddon addonType="prepend">f</InputGroupAddon>{/* todo maxFreq=this.au.sampleRate/2 */}
								<Input id="3" placeholder="frequency" min={0} max={this.au.sampleRate/2 || 22050} type="number" step="1" value={this.state.osc3Freq} onChange={(e) => this.oscFreq(e)} />
								<InputGroupAddon addonType="prepend"><Button id="3" value="10" onClick={(e) => this.oscFreq(e)}>10</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="3" value="100" onClick={(e) => this.oscFreq(e)}>100</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="3" value="500" onClick={(e) => this.oscFreq(e)}>500</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="3" value="1000" onClick={(e) => this.oscFreq(e)}>1000</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend"><Button id="3" value="2000" onClick={(e) => this.oscFreq(e)}>2000</Button></InputGroupAddon>
								<InputGroupAddon addonType="prepend">gain</InputGroupAddon>
								<Input id="3" placeholder="gain" min={0} max={1.0} type="range" step=".01" value={this.state.osc3ChGain} onChange={(e) => this.oscGain(e)} />
								<Input id="3" placeholder="gain" min={0} max={1.0} type="number" step=".01" value={this.state.osc3Gain} onChange={(e) => this.oscGain(e)} />
									<InputGroupAddon addonType="prepend"><Button color="info">{this.state.osc3Gain*2*this.state.multiplier} Volt p-p</Button></InputGroupAddon>
							</InputGroup>
            </NavbarBrand>
          </Navbar>

        </Alert>
        <Alert color="greay" isOpen={this.state.scopeTimeIsOpen}>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand>
              <Button id="a" color={this.state.scopeTimeChA?"warning":"outline-warning"} onClick={(e) => this.scopeTimeCh(e)}>A</Button>|
              <Button id="b" color={this.state.scopeTimeChB?"success":"outline-success"} onClick={(e) => this.scopeTimeCh(e)}>B</Button>|
              <Button id="c" color={this.state.scopeTimeChC?"danger":"outline-danger"} onClick={(e) => this.scopeTimeCh(e)}>C</Button>|
              <Button id="d" color={this.state.scopeTimeChD?"primary":"outline-primary"} onClick={(e) => this.scopeTimeCh(e)}>D</Button>|
              <Button id="l" color={this.state.scopeTimeChL?"secondary":"outline-secondary"} onClick={(e) => this.scopeTimeCh(e)}>L</Button>|
              <Button id="r" color={this.state.scopeTimeChR?"secondary":"outline-secondary"} onClick={(e) => this.scopeTimeCh(e)}>R</Button>|
              <Button id="m" color="outline-secondary" onClick={(e) => this.scopeTimeCh(e)}>Math</Button>|

              <Button color="secondary"><FontAwesomeIcon icon="search-plus" /></Button>|
              <Button id="x" color={this.state.scaleAxis == 'x' ? "success":"outline-success"} onClick={(e) => this.scaleInAxis(e)}>x</Button>|
              <Button id="y" color={this.state.scaleAxis == 'y' ? "success":"outline-success"} onClick={(e) => this.scaleInAxis(e)}>y</Button>
            </NavbarBrand>
            <NavbarToggler onClick={this.isOpenToggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
								<Button id="time" color={this.state.scopeTimeAspectRatio?"info":"outline-info"} onClick={(e) => this.scopeAspectRatio('time')}>1:1</Button>|
                <Button id="c" color={this.state.scopeTimeFill?"info":"outline-info"} onClick={(e) => this.scopeTimeDot(e)}><FontAwesomeIcon icon="dot-circle" /></Button>|
                <Button id="c" color={this.state.scopeTimeFill?"info":"outline-info"} onClick={(e) => this.scopeTimeFill(e)}><FontAwesomeIcon icon="fill-drip" /></Button>|
                <Button id="multiplier" color={false? "warning":"outline-warning"} onClick={(e) => this.handleRatio(e, 100)}><FontAwesomeIcon icon="save" /></Button>

              </Nav>
            </Collapse>
          </Navbar>{/* redraw={true} ref={(reference) => this._scopeTimeChartRef = reference } */}
					{this.state.scopeTimeIsOpen?
          <RC2 id="time" data={this.state._scopeTimeData} type={this.state.scopeTimeChartType} options={this.state.scopeTimeOptions} width={this.state.scopeTimeWidth} height={this.state.scopeTimeHeight} aria-label="TimeScope" role="img" />
					:null}
        </Alert>{/*<RC2 id="oscTime" height={512} width={512} */}
        <Alert color="greay" isOpen={this.state.scopeFreqIsOpen || this.state.scopeTimeIsOpen || this.state.scopeXyIsOpen}>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand>
              <Button color="outline-info">Bit</Button>|
              <Button color="outline-success">Fft</Button>
              <Button color={this.state.fftSize==32?"success":"outline-success"} onClick={() => this.fftSize(32)}>32</Button>
              <Button color={this.state.fftSize==64?"success":"outline-success"} onClick={() => this.fftSize(64)}>64</Button>
              <Button color={this.state.fftSize==128?"success":"outline-success"} onClick={() => this.fftSize(128)}>128</Button>
              <Button color={this.state.fftSize==256?"success":"outline-success"} onClick={() => this.fftSize(256)}>256</Button>
              <Button color={this.state.fftSize==512?"success":"outline-success"} onClick={() => this.fftSize(512)}>512</Button>
              <Button color={this.state.fftSize==1024?"success":"outline-success"} onClick={() => this.fftSize(1024)}>1024</Button>
              <Button color={this.state.fftSize==2048?"success":"outline-success"} onClick={() => this.fftSize(2048)}>2048</Button>
              <Button color={this.state.fftSize==8192?"success":"outline-success"} onClick={() => this.fftSize(8192)}>8192</Button>
              <Button color={this.state.fftSize==16384?"success":"outline-success"} onClick={() => this.fftSize(16384)}>16384</Button>
              <Button color={this.state.fftSize==32768?"success":"outline-success"} onClick={() => this.fftSize(32768)}>32768</Button>
            </NavbarBrand>
            <NavbarToggler onClick={this.isOpenToggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Button id="multiplier" color={this.state.multiplier == 1  ? "info":"outline-info"} onClick={(e) => this.handleRatio(e, 1)}>x1</Button>|
                <Button id="multiplier" color={this.state.multiplier == 10 ? "info":"outline-info"} onClick={(e) => this.handleRatio(e, 10)}>10</Button>|
                <Button id="multiplier" color={this.state.multiplier == 100? "info":"outline-info"} onClick={(e) => this.handleRatio(e, 100)}>100</Button>|
                <Button id="multiplier" color="outline-warning"><FontAwesomeIcon icon="cog" /></Button>
              </Nav>
            </Collapse>
          </Navbar>
        </Alert>
        <Alert color="greay" isOpen={this.state.scopeFreqIsOpen}>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand>
              <Button id="a" color={this.state.scopeFreqChA?"warning":"outline-warning"} onClick={(e) => this.scopeFreqCh(e)}>A</Button>|
              <Button id="b" color={this.state.scopeFreqChB?"success":"outline-success"} onClick={(e) => this.scopeFreqCh(e)}>B</Button>|
              <Button id="c" color={this.state.scopeFreqChC?"danger":"outline-danger"} onClick={(e) => this.scopeFreqCh(e)}>C</Button>|
              <Button id="d" color={this.state.scopeFreqChD?"primary":"outline-primary"} onClick={(e) => this.scopeFreqCh(e)}>D</Button>|
              <Button id="l" color={this.state.scopeFreqChL?"secondary":"outline-secondary"} onClick={(e) => this.scopeFreqCh(e)}>L</Button>|
              <Button id="r" color={this.state.scopeFreqChR?"secondary":"outline-secondary"} onClick={(e) => this.scopeFreqCh(e)}>R</Button>|
              <Button id="m" color={this.state.scopeFreqChM?"secondary":"outline-secondary"} onClick={(e) => this.scopeFreqCh(e)}>Math</Button>|
              <Button id="play" color={this.state.scopeFreqOn?"success":"outline-success"} onClick={(e) => this.scopeFreq(e)}><FontAwesomeIcon icon="play" /></Button>:

              <Button color="secondary"><FontAwesomeIcon icon="search-plus" /></Button>|
              <Button id="x" color={this.state.scaleAxis == 'x' ? "success":"outline-success"} onClick={(e) => this.scaleInAxis(e)}>x</Button>|
              <Button id="y" color={this.state.scaleAxis == 'y' ? "success":"outline-success"} onClick={(e) => this.scaleInAxis(e)}>y</Button>
            </NavbarBrand>
            <NavbarToggler onClick={this.isOpenToggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

								<Button id="freq" color={this.state.scopeFreqAspectRatio?"info":"outline-info"} onClick={(e) => this.scopeAspectRatio('freq')}>1:1</Button>|
                <Button id="c" color={this.state.scopeTimeFill?"info":"outline-info"} onClick={(e) => this.scopeTimeDot(e)}><FontAwesomeIcon icon="dot-circle" /></Button>|
                <Button id="m" color={this.state.scopeFreqFill?"info":"outline-info"} onClick={(e) => this.scopeFreqFill(e)}><FontAwesomeIcon icon="fill-drip" /></Button>|
                <Button id="multiplier" color={false? "warning":"outline-warning"} onClick={(e) => this.handleRatio(e, 100)}><FontAwesomeIcon icon="save" /></Button>
              </Nav>
            </Collapse>
          </Navbar>
					{this.state.scopeFreqIsOpen?
          <RC2 id="freq" data={this.state._scopeFreqData} type={this.state.scopeFreqChartType} options={this.state.scopeFreqOptions} width={this.state.scopeFreqWidth} height={this.state.scopeFreqHeight} ref={(reference) => this._scopeFreqChartRef = reference } aria-label="FrequencyScope" role="img" />
					:null}
        </Alert>

        <Alert color="greay" isOpen={this.state.scopeXyIsOpen}>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand>
              <Button id="xy" color={this.state.scopeXyIsOpen?"primary":"outline-primary"} onClick={(e) => this.scopeXyIsOpen(e)}>XY</Button>|

							<Button id="c" color={this.state.scopeXyAb?"info":"outline-info"} onClick={(e) => this.scopeXyAb(e)}>A&B Lissajous</Button>|
							<Button id="c" color={this.state.scopeXyLr?"info":"outline-info"} onClick={(e) => this.scopeXyAl(e)}>A-L</Button>|
							<Button id="c" color={this.state.scopeXyLr?"info":"outline-info"} onClick={(e) => this.scopeXyLr(e)}>L-R</Button>|
------------------------------
							<Button id="xy" color={this.state.scopeTimeFill?"info":"outline-info"} onClick={(e) => this.scopeAspectRatio(e)}>1:1</Button>|
							<Button id="c" color={this.state.scopeXyDot?"info":"outline-info"} onClick={(e) => this.scopeXyDot(e)}><FontAwesomeIcon icon="dot-circle" /></Button>|
							<Button id="c" color={this.state.scopeXyFill?"info":"outline-info"} onClick={(e) => this.scopeXyFill(e)}><FontAwesomeIcon icon="fill-drip" /></Button>|
							<Button id="multiplier" color={false? "warning":"outline-warning"} onClick={(e) => this.handleRatio(e, 100)}><FontAwesomeIcon icon="save" /></Button>


            </NavbarBrand>
          </Navbar>
					{this.state.scopeXyIsOpen?
					<RC2 id="xy" data={this.state._scopeXyData} type="scatter" options={this.state.scopeXyOptions} width={512} height={512} aria-label="XyScope" role="img" />
					:null}
        </Alert>

      </div>
    );
  }
}
{/*
  <RC2 id="xy" data={this.state._scopeXyData} type={this.state.scopeXyChartType} options={} width={512} height={256} ref={(reference) => this._scopeXyChartRef = reference } aria-label="XYScope" role="img" />
  <RC2 id="xy" data={this.state._scopeXyData} type={this.state.scopeXyChartType} options={} width={512} height={256} ref={(reference) => this._scopeXyChartRef = reference } aria-label="XyScope" role="img" />
                <ButtonToolbar>

                              <InputGroup>
                                <InputGroupAddon addonType="prepend">fA</InputGroupAddon>
                                <Input id="1" placeholder="frequency" min={0} max={22050} type="number" step="1" value={this.state.osc1Freq} onChange={(e) => this.oscFreq(e)} />
                                <InputGroupAddon addonType="prepend"><Button id="1" value="1" onClick={(e) => this.oscFreq(e)}>1</Button></InputGroupAddon>
                                <InputGroupAddon addonType="prepend"><Button id="1" value="100" onClick={(e) => this.oscFreq(e)}>100</Button></InputGroupAddon>
                                  <InputGroupAddon addonType="prepend"><Button id="1" value="500" onClick={(e) => this.oscFreq(e)}>500</Button></InputGroupAddon>
                                <InputGroupAddon addonType="prepend"><Button id="1" value="1000" onClick={(e) => this.oscFreq(e)}>1000</Button></InputGroupAddon>
                              </InputGroup>

                              <InputGroup>
                                <InputGroupAddon addonType="prepend">fB</InputGroupAddon>
                                <Input id="2" placeholder="frequency" min={0} max={22050} type="number" step="1" value={this.state.osc2Freq} onChange={(e) => this.oscFreq(e)} />
                                <InputGroupAddon addonType="prepend"><Button id="2" value="1" onClick={(e) => this.oscFreq(e)}>1</Button></InputGroupAddon>
                                <InputGroupAddon addonType="prepend"><Button id="2" value="100" onClick={(e) => this.oscFreq(e)}>100</Button></InputGroupAddon>
                                <InputGroupAddon addonType="prepend"><Button id="2" value="1000" onClick={(e) => this.oscFreq(e)}>1000</Button></InputGroupAddon>
                              </InputGroup>

                </ButtonToolbar>


      <Button color={this.state.debug?"info":"outline-info"} onClick={() => this.debug()}><FontAwesomeIcon icon="bug" /></Button>
      <Button onClick={() => this.logState()}>LogState</Button>

      <Button color={false?"success":"outline-success"} onClick={() => this.anal(1)}>aMin: {this.state.osc1Min}</Button>
      <Button color={false?"success":"outline-success"} onClick={() => this.anal(2)}>aMax: {this.state.osc1Max}</Button>
      <Button color={false?"success":"outline-success"} onClick={() => this.anal(3)}>bMin: {this.state.osc2Min}</Button>
      <Button color={false?"success":"outline-success"} onClick={() => this.anal(4)}>bMax: {this.state.osc2Max}</Button>
*/}

      {/*
                <Line data={this.state.oscTimeData} options = {options} width={512} height={512} ref='scope' aria-label="Scope" role="img"/>
      */}
