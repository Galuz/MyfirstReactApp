import React from 'react'
import {render} from 'react-dom'
//import {SkiDayList} from './components/SkiDayList'
//import {SkiDayCount} from './components/SkiDayCount'
import { App } from './components/App'
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from './components/Whoops404'
window.React = React

/*render(
	<SkiDayCount backcountry={false}/>,
	document.getElementById('react-container')
)*/

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="list-days" component={App}/>
		<Route path="add-day" component={App}/>
		<Route path="*" component={Whoops404}/>
	</Router>,


	document.getElementById('react-container')
)